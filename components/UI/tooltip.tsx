"use client";

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  variant?: 'dark' | 'light' | 'info';
  delay?: number;
  maxWidth?: string;
  arrow?: boolean;
}

const variantClasses = {
  dark: 'bg-gray-900 text-white',
  light: 'bg-white text-gray-900 border border-gray-200 shadow-sm',
  info: 'bg-blue-600 text-white'
};

const arrowClasses = {
  top: 'bottom-[-4px] left-1/2 -translate-x-1/2 border-t-gray-900 border-t-4 border-x-transparent border-x-4 border-b-0',
  right: 'left-[-4px] top-1/2 -translate-y-1/2 border-r-gray-900 border-r-4 border-y-transparent border-y-4 border-l-0',
  bottom: 'top-[-4px] left-1/2 -translate-x-1/2 border-b-gray-900 border-b-4 border-x-transparent border-x-4 border-t-0',
  left: 'right-[-4px] top-1/2 -translate-y-1/2 border-l-gray-900 border-l-4 border-y-transparent border-y-4 border-r-0'
};

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = 'top',
  className = '',
  variant = 'dark',
  delay = 0,
  maxWidth = '200px',
  arrow = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          ref={tooltipRef}
          style={{ maxWidth }}
          className={clsx(
            'absolute z-50 px-2 py-1 text-sm rounded-md whitespace-normal transition-opacity duration-200',
            variantClasses[variant],
            position === 'top' && 'bottom-full left-1/2 -translate-x-1/2 mb-2',
            position === 'right' && 'left-full top-1/2 -translate-y-1/2 ml-2',
            position === 'bottom' && 'top-full left-1/2 -translate-x-1/2 mt-2',
            position === 'left' && 'right-full top-1/2 -translate-y-1/2 mr-2',
            className
          )}
        >
          {text}
          {arrow && (
            <span 
              className={clsx(
                'absolute w-0 h-0',
                arrowClasses[position]
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
