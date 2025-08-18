'use client';

import React, { useState, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs component');
  }
  return context;
};

export interface TabsProps {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
}

const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
  variant = 'default',
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultValue);
  
  const activeTab = value !== undefined ? value : internalActiveTab;
  
  const setActiveTab = (newValue: string) => {
    if (value === undefined) {
      setInternalActiveTab(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn('w-full', className)} data-variant={variant}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

const TabsList: React.FC<TabsListProps> = ({ children, className }) => {
  const variant = (React.useContext(TabsContext) as any)?.variant || 'default';
  
  const variants = {
    default: 'inline-flex h-10 items-center justify-center rounded-lg bg-gray-100 p-1 text-gray-500',
    pills: 'inline-flex space-x-1',
    underline: 'flex border-b border-gray-200',
  };

  return (
    <div className={cn(variants[variant as keyof typeof variants], className)} role="tablist">
      {children}
    </div>
  );
};

export interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  className,
  disabled = false,
}) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;
  const variant = 'default'; // We'll extract this from parent context if needed

  const variants = {
    default: cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      isActive
        ? 'bg-white text-gray-900 shadow-sm'
        : 'text-gray-600 hover:text-gray-900'
    ),
    pills: cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      isActive
        ? 'bg-primary text-white shadow-primary'
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    ),
    underline: cn(
      'inline-flex items-center justify-center whitespace-nowrap border-b-2 px-4 py-2 text-sm font-medium transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      isActive
        ? 'border-primary text-primary'
        : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
    ),
  };

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      tabIndex={isActive ? 0 : -1}
      className={cn(variants[variant as keyof typeof variants], className)}
      onClick={() => !disabled && setActiveTab(value)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  className,
}) => {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      className={cn(
        'mt-4 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'animate-fade-in',
        className
      )}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

// Export compound component
Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

export { TabsList, TabsTrigger, TabsContent };
export default Tabs;