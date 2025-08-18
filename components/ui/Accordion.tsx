'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface AccordionItemProps {
  id: string;
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  defaultOpenItems?: string[];
  className?: string;
  variant?: 'default' | 'bordered' | 'separated';
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenItems = [],
  className,
  variant = 'default',
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(itemId)
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId];
      } else {
        return prev.includes(itemId) ? [] : [itemId];
      }
    });
  };

  const isItemOpen = (itemId: string) => openItems.includes(itemId);

  const variants = {
    default: 'space-y-1',
    bordered: 'border border-gray-200 rounded-xl overflow-hidden',
    separated: 'space-y-4',
  };

  return (
    <div className={cn('w-full', variants[variant], className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={isItemOpen(item.id)}
          onToggle={() => toggleItem(item.id)}
          variant={variant}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

interface AccordionItemComponentProps {
  item: AccordionItemProps;
  isOpen: boolean;
  onToggle: () => void;
  variant: 'default' | 'bordered' | 'separated';
  isLast: boolean;
}

const AccordionItem: React.FC<AccordionItemComponentProps> = ({
  item,
  isOpen,
  onToggle,
  variant,
  isLast,
}) => {
  const itemStyles = {
    default: 'bg-white border border-gray-200 rounded-xl',
    bordered: `bg-white ${!isLast ? 'border-b border-gray-200' : ''}`,
    separated: 'bg-white border border-gray-200 rounded-xl shadow-soft',
  };

  return (
    <div className={itemStyles[variant]}>
      <button
        className={cn(
          'flex justify-between items-center w-full px-6 py-4 text-left transition-colors',
          'hover:bg-gray-50 focus:outline-none focus:bg-gray-50',
          variant === 'bordered' ? '' : 'rounded-xl'
        )}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
      >
        <span className="text-h5 font-medium text-gray-900 pr-4">
          {item.title}
        </span>
        <svg
          className={cn(
            'w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0',
            isOpen ? 'transform rotate-180' : ''
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      <div
        id={`accordion-content-${item.id}`}
        className={cn(
          'overflow-hidden transition-all duration-200 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
        style={{
          maxHeight: isOpen ? '1000px' : '0',
        }}
      >
        <div className="px-6 pb-4 text-body text-gray-600">
          {item.content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;