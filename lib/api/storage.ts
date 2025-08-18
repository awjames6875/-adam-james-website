import { kv } from '@vercel/kv';

export interface StorageItem {
  id: string;
  data: any;
  createdAt: string;
  updatedAt: string;
}

export class Storage {
  private static getKey(type: string, id?: string): string {
    return id ? `${type}:${id}` : `${type}:*`;
  }

  static async save(type: string, id: string, data: any): Promise<void> {
    const item: StorageItem = {
      id,
      data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    await kv.set(this.getKey(type, id), item);
  }

  static async get<T = any>(type: string, id: string): Promise<StorageItem<T> | null> {
    const item = await kv.get<StorageItem<T>>(this.getKey(type, id));
    return item;
  }

  static async list<T = any>(type: string, limit = 100): Promise<StorageItem<T>[]> {
    const keys = await kv.keys(this.getKey(type));
    const items = await Promise.all(
      keys.slice(0, limit).map(key => kv.get<StorageItem<T>>(key))
    );
    
    return items
      .filter((item): item is StorageItem<T> => item !== null)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  static async update(type: string, id: string, data: any): Promise<void> {
    const existing = await this.get(type, id);
    if (!existing) {
      throw new Error('Item not found');
    }

    const updated: StorageItem = {
      ...existing,
      data: { ...existing.data, ...data },
      updatedAt: new Date().toISOString(),
    };

    await kv.set(this.getKey(type, id), updated);
  }

  static async delete(type: string, id: string): Promise<void> {
    await kv.del(this.getKey(type, id));
  }

  static async increment(key: string, by = 1): Promise<number> {
    return await kv.incr(key, by);
  }

  static async setExpiring(key: string, value: any, ttlSeconds: number): Promise<void> {
    await kv.setex(key, ttlSeconds, value);
  }
}

// Specific storage helpers for common data types
export class ContactFormStorage {
  static async save(data: any): Promise<string> {
    const id = `contact_${Date.now()}_${Math.random().toString(36).substring(2)}`;
    await Storage.save('contact_forms', id, data);
    return id;
  }

  static async getAll(limit = 100) {
    return Storage.list('contact_forms', limit);
  }
}

export class NewsletterStorage {
  static async save(email: string, data: any): Promise<void> {
    const id = email.toLowerCase();
    await Storage.save('newsletter_subscribers', id, data);
  }

  static async get(email: string) {
    return Storage.get('newsletter_subscribers', email.toLowerCase());
  }

  static async getAll(limit = 1000) {
    return Storage.list('newsletter_subscribers', limit);
  }

  static async unsubscribe(email: string): Promise<void> {
    await Storage.delete('newsletter_subscribers', email.toLowerCase());
  }
}

export class AppointmentStorage {
  static async save(data: any): Promise<string> {
    const id = `appointment_${Date.now()}_${Math.random().toString(36).substring(2)}`;
    await Storage.save('appointments', id, data);
    return id;
  }

  static async getAll(limit = 100) {
    return Storage.list('appointments', limit);
  }

  static async update(id: string, data: any): Promise<void> {
    await Storage.update('appointments', id, data);
  }
}

export class AnalyticsStorage {
  static async trackPageView(data: any): Promise<void> {
    const id = `pageview_${Date.now()}_${Math.random().toString(36).substring(2)}`;
    await Storage.save('page_views', id, data);
    
    // Also increment daily counter
    const today = new Date().toISOString().split('T')[0];
    await Storage.increment(`daily_pageviews:${today}`);
  }

  static async trackEvent(data: any): Promise<void> {
    const id = `event_${Date.now()}_${Math.random().toString(36).substring(2)}`;
    await Storage.save('events', id, data);
  }

  static async getPageViews(days = 30) {
    const pageViews = await Storage.list('page_views', days * 50); // Estimate
    return pageViews.filter(view => {
      const viewDate = new Date(view.createdAt);
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);
      return viewDate >= cutoff;
    });
  }

  static async getDailyStats(days = 30): Promise<Record<string, number>> {
    const stats: Record<string, number> = {};
    const promises: Promise<number>[] = [];
    const dates: string[] = [];

    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      dates.push(dateStr);
      promises.push(kv.get(`daily_pageviews:${dateStr}`).then(val => val || 0));
    }

    const values = await Promise.all(promises);
    dates.forEach((date, index) => {
      stats[date] = values[index];
    });

    return stats;
  }
}

export class SearchStorage {
  static async trackSearch(query: string, results: number, userId?: string): Promise<void> {
    const id = `search_${Date.now()}_${Math.random().toString(36).substring(2)}`;
    await Storage.save('searches', id, {
      query: query.toLowerCase(),
      results,
      userId,
    });
  }

  static async getPopularSearches(limit = 10): Promise<Array<{ query: string; count: number }>> {
    const searches = await Storage.list('searches', 1000);
    const queryCount: Record<string, number> = {};

    searches.forEach(search => {
      const query = search.data.query;
      queryCount[query] = (queryCount[query] || 0) + 1;
    });

    return Object.entries(queryCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit)
      .map(([query, count]) => ({ query, count }));
  }
}