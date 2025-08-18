import React from 'react';
import { SEO_CONFIG } from '@/lib/seo-config';

interface OptimizedContentProps {
  location?: string;
  service?: string;
  business?: string;
  children: React.ReactNode;
  enableKeywordHighlighting?: boolean;
}

interface KeywordDensityAnalyzerProps {
  content: string;
  targetKeywords: string[];
  className?: string;
}

// Content wrapper that ensures optimal keyword distribution
export const OptimizedContent: React.FC<OptimizedContentProps> = ({
  location,
  service,
  business,
  children,
  enableKeywordHighlighting = false,
}) => {
  // Generate dynamic keyword suggestions based on page type
  const generateKeywords = () => {
    let keywords = [...SEO_CONFIG.PRIMARY_KEYWORDS];
    
    if (location) {
      keywords.push(`${location} entrepreneur`, `Adam James ${location}`, `${location} business services`);
      if (SEO_CONFIG.LOCATION_KEYWORDS[location.toLowerCase()]) {
        keywords.push(...SEO_CONFIG.LOCATION_KEYWORDS[location.toLowerCase()]);
      }
    }
    
    if (service) {
      keywords.push(`${service} Tulsa`, `Adam James ${service}`, `Oklahoma ${service}`);
    }
    
    if (business) {
      keywords.push(`${business} Tulsa`, `Adam James ${business}`);
    }
    
    return keywords;
  };

  const keywords = generateKeywords();

  return (
    <div className="optimized-content" data-keywords={keywords.join(',')}>
      {enableKeywordHighlighting && (
        <div className="keyword-density-indicator hidden lg:block fixed top-20 right-4 bg-white p-4 rounded-lg shadow-lg border z-50">
          <h4 className="text-sm font-semibold mb-2">SEO Keywords</h4>
          <div className="space-y-1">
            {keywords.slice(0, 5).map((keyword, index) => (
              <div key={index} className="text-xs text-gray-600">
                {keyword}
              </div>
            ))}
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

// Keyword density analyzer component
export const KeywordDensityAnalyzer: React.FC<KeywordDensityAnalyzerProps> = ({
  content,
  targetKeywords,
  className = '',
}) => {
  const analyzeKeywords = () => {
    return targetKeywords.map(keyword => {
      const regex = new RegExp(keyword, 'gi');
      const matches = content.match(regex) || [];
      const wordCount = content.split(/\s+/).length;
      const density = (matches.length / wordCount) * 100;
      
      return {
        keyword,
        count: matches.length,
        density: density.toFixed(2),
        status: density >= 1 && density <= 2.5 ? 'optimal' : density < 1 ? 'low' : 'high'
      };
    });
  };

  const analysis = analyzeKeywords();

  return (
    <div className={`keyword-analysis bg-gray-50 p-4 rounded-lg ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Keyword Density Analysis</h3>
      <div className="space-y-2">
        {analysis.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm">{item.keyword}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm">{item.count} times ({item.density}%)</span>
              <span className={`px-2 py-1 text-xs rounded-full ${
                item.status === 'optimal' ? 'bg-green-100 text-green-800' :
                item.status === 'low' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Semantic content enhancer
export const SemanticContent: React.FC<{
  topic: string;
  location?: string;
  className?: string;
}> = ({ topic, location, className = '' }) => {
  const getSemanticKeywords = () => {
    const base = SEO_CONFIG.SEMANTIC_KEYWORDS;
    const topicSpecific = {
      'business-consulting': ['strategic planning', 'growth strategy', 'market analysis', 'operational efficiency'],
      'corporate-housing': ['furnished apartments', 'temporary housing', 'business travel', 'relocation services'],
      'mental-health': ['therapeutic services', 'wellness programs', 'counseling', 'therapy sessions'],
      'real-estate': ['property investment', 'real estate development', 'market analysis', 'property management'],
    };
    
    return [...base, ...(topicSpecific[topic] || [])];
  };

  const semanticKeywords = getSemanticKeywords();

  return (
    <div className={`semantic-content ${className}`}>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          {location ? `In ${location}, ` : 'Throughout the Tulsa metro area, '}
          <strong>Adam James</strong> leverages his expertise in {topic.replace('-', ' ')} to deliver 
          exceptional results for clients. His comprehensive approach combines {semanticKeywords.slice(0, 3).join(', ')} 
          to create sustainable value and lasting impact.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The integration of {semanticKeywords.slice(3, 6).join(', ')} ensures that every client receives 
          personalized solutions tailored to their specific needs and objectives. This commitment to excellence 
          has established Adam James as {location ? `${location}'s` : 'Tulsa\'s'} premier choice for {topic.replace('-', ' ')}.
        </p>
      </div>
    </div>
  );
};

// Local SEO content enhancer
export const LocalSEOContent: React.FC<{
  location: string;
  serviceType?: string;
  includeNearbyAreas?: boolean;
  className?: string;
}> = ({ location, serviceType, includeNearbyAreas = true, className = '' }) => {
  const nearbyAreas = SEO_CONFIG.LOCAL_SEO.service_area.filter(area => area !== location);
  
  return (
    <div className={`local-seo-content ${className}`}>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">
          Serving {location} and Surrounding Areas
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Adam James</strong> proudly serves {location} and the greater Tulsa metropolitan area 
          {serviceType ? ` with expert ${serviceType} services` : ' with comprehensive business solutions'}. 
          Our deep understanding of the local market and community needs ensures that every client receives 
          personalized service that delivers real results.
        </p>
        
        {includeNearbyAreas && (
          <div>
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Additional Service Areas</h4>
            <div className="flex flex-wrap gap-2">
              {nearbyAreas.slice(0, 8).map((area, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Trust signals and authority content
export const TrustSignals: React.FC<{
  showStats?: boolean;
  showAwards?: boolean;
  showTestimonials?: boolean;
  className?: string;
}> = ({ 
  showStats = true, 
  showAwards = true, 
  showTestimonials = true, 
  className = '' 
}) => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '3', label: 'Successful Businesses' },
    { value: '50+', label: 'Jobs Created' },
    { value: '$10M+', label: 'Economic Impact' },
    { value: '500+', label: 'Clients Served' },
    { value: '20+', label: 'Service Areas' },
  ];

  const awards = [
    'Tulsa Business Journal 40 Under 40',
    'Oklahoma Small Business Excellence Award',
    'Tulsa Chamber of Commerce Business Leader',
    'Community Impact Recognition',
  ];

  return (
    <div className={`trust-signals ${className}`}>
      {showStats && (
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">Proven Track Record in Oklahoma</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showAwards && (
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recognition and Awards</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {awards.map((award, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-700">{award}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OptimizedContent;