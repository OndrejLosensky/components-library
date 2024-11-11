"use client";

import React, { useState, createContext, useContext } from 'react';
import clsx from 'clsx';
import { IoChevronDown } from "react-icons/io5";

interface AccordionContextType {
  openItems: number[];
  toggleItem: (index: number) => void;
  size: 'sm' | 'md' | 'lg';
}

const AccordionContext = createContext<AccordionContextType | null>(null);

interface AccordionProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'bordered' | 'separated';
  size?: 'sm' | 'md' | 'lg';
  multiple?: boolean;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
  index?: number;
}

const variantClasses = {
  default: 'border rounded-lg shadow-sm',
  bordered: 'border-2 rounded-lg',
  separated: 'space-y-2'
};

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
};

const Accordion: React.FC<AccordionProps> = ({ 
  className = '', 
  children,
  variant = 'default',
  size = 'md',
  multiple = false
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (multiple) {
      setOpenItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  const contextValue = {
    openItems,
    toggleItem,
    size
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={clsx(
        variant !== 'separated' && variantClasses[variant],
        sizeClasses[size],
        className
      )}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
              index
            });
          }
          return child;
        })}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  children, 
  disabled = false,
  className = '',
  icon,
  index = 0
}) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionItem must be used within an Accordion');
  
  const { openItems, toggleItem, size } = context;
  const isOpen = openItems.includes(index);

  const handleClick = () => {
    if (!disabled) {
      toggleItem(index);
    }
  };

  return (
    <div className={clsx(
      'border-b last:border-b-0',
      disabled && 'opacity-50 cursor-not-allowed',
      className
    )}>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={clsx(
          'flex justify-between items-center w-full text-left',
          size === 'sm' && 'p-2',
          size === 'md' && 'p-4',
          size === 'lg' && 'p-6',
          !disabled && 'hover:bg-gray-50'
        )}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        <IoChevronDown 
          className={clsx(
            'transition-transform duration-200',
            isOpen && 'transform rotate-180',
            size === 'sm' && 'w-4 h-4',
            size === 'md' && 'w-5 h-5',
            size === 'lg' && 'w-6 h-6'
          )}
        />
      </button>
      {isOpen && (
        <div className={clsx(
          'animate-accordion-down',
          size === 'sm' && 'p-2',
          size === 'md' && 'p-4',
          size === 'lg' && 'p-6'
        )}>
          {children}
        </div>
      )}
    </div>
  );
};

export { Accordion, AccordionItem };
export type { AccordionProps, AccordionItemProps };
