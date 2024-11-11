"use client";

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { IoChevronDown } from "react-icons/io5";

interface DropdownProps {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  disabled?: boolean;
  width?: 'auto' | 'full';
}

interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  destructive?: boolean;
}

const variantClasses = {
  default: 'bg-white border border-gray-200 text-gray-900',
  outline: 'bg-white border-2 border-gray-300 text-gray-900',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-900'
};

const sizeClasses = {
  sm: 'text-sm py-1.5 px-3',
  md: 'text-base py-2 px-4',
  lg: 'text-lg py-2.5 px-5'
};

const placementClasses = {
  'bottom-start': 'top-full left-0',
  'bottom-end': 'top-full right-0',
  'top-start': 'bottom-full left-0',
  'top-end': 'bottom-full right-0'
};

const Dropdown: React.FC<DropdownProps> = ({
  children,
  trigger,
  className = '',
  variant = 'default',
  size = 'md',
  placement = 'bottom-start',
  disabled = false,
  width = 'auto'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const defaultTrigger = (
    <button
      className={clsx(
        'flex items-center justify-between rounded-md',
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        !disabled && 'hover:bg-gray-50'
      )}
      disabled={disabled}
    >
      <span>Select option</span>
      <IoChevronDown className={clsx(
        'ml-2 transition-transform',
        isOpen && 'transform rotate-180'
      )} />
    </button>
  );

  return (
    <div className={clsx('relative inline-block', className)} ref={dropdownRef}>
      <div onClick={() => !disabled && setIsOpen(!isOpen)}>
        {trigger || defaultTrigger}
      </div>
      
      {isOpen && (
        <div className={clsx(
          'absolute z-50 mt-1 rounded-md shadow-lg',
          placementClasses[placement],
          variantClasses[variant],
          width === 'full' ? 'w-full min-w-[8rem]' : 'min-w-[8rem]'
        )}>
          <div className="py-1">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  icon,
  destructive = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'w-full flex items-center px-4 py-2 text-sm',
        !disabled && !destructive && 'hover:bg-gray-100',
        !disabled && destructive && 'hover:bg-red-50 text-red-600',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export { Dropdown, DropdownItem };
export type { DropdownProps, DropdownItemProps };
