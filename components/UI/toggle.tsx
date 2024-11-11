"use client";

import React from 'react';
import clsx from 'clsx';

interface ToggleProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  label?: string;
  className?: string;
  color?: 'blue' | 'green' | 'red' | 'purple';
}

const sizeClasses = {
  sm: 'w-8 h-4',
  md: 'w-11 h-6',
  lg: 'w-14 h-7'
};

const dotSizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
};

const colorClasses = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  red: 'bg-red-600',
  purple: 'bg-purple-600'
};

const Toggle: React.FC<ToggleProps> = ({ 
  isChecked, 
  onChange, 
  size = 'md',
  disabled = false,
  label,
  className = '',
  color = 'blue'
}) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!isChecked);
    }
  };

  return (
    <label className={clsx(
      'inline-flex items-center',
      disabled && 'opacity-50 cursor-not-allowed',
      !disabled && 'cursor-pointer',
      className
    )}>
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={clsx(
            'block rounded-full transition-colors duration-200',
            sizeClasses[size],
            isChecked ? colorClasses[color] : 'bg-gray-300'
          )}
        />
        <div
          className={clsx(
            'absolute left-0.5 top-0.5 bg-white rounded-full shadow transform transition-transform duration-200',
            dotSizeClasses[size],
            isChecked && {
              'sm': 'translate-x-4',
              'md': 'translate-x-5',
              'lg': 'translate-x-7'
            }[size]
          )}
        />
      </div>
      {label && (
        <span className={clsx(
          'ml-3 text-gray-700',
          size === 'sm' && 'text-sm',
          size === 'md' && 'text-base',
          size === 'lg' && 'text-lg'
        )}>
          {label}
        </span>
      )}
    </label>
  );
};

export default Toggle;
