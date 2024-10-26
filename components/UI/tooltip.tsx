"use client"; // Mark this as a client component

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = 'top',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        hideTooltip();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={clsx(
            'absolute z-10 p-2 text-sm text-white bg-gray-800 rounded-md',
            position === 'top' && 'bottom-full mb-2 left-1/2 transform -translate-x-1/2',
            position === 'right' && 'top-1/2 left-full ml-2 transform -translate-y-1/2',
            position === 'bottom' && 'top-full mt-2 left-1/2 transform -translate-x-1/2',
            position === 'left' && 'top-1/2 right-full mr-2 transform -translate-y-1/2',
            className
          )}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
