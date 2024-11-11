import React from 'react';
import clsx from 'clsx';

type InputVariant = 'primary' | 'secondary' | 'outline';
type InputSize = 'sm' | 'md' | 'lg';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  inputSize?: InputSize;
  className?: string;
  error?: boolean;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantClasses: Record<InputVariant, string> = {
  primary: 'border-gray-300 bg-white focus:border-blue-500 focus:ring-blue-500',
  secondary: 'border-gray-300 bg-gray-50 focus:border-gray-500 focus:ring-gray-500',
  outline: 'border-gray-300 bg-transparent focus:border-gray-500 focus:ring-gray-500',
};

const sizeClasses: Record<InputSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-4 py-2.5 text-lg'
};

const iconSizeClasses: Record<InputSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
};

const Input: React.FC<InputProps> = ({
  variant = 'primary',
  inputSize = 'md',
  className = '',
  error = false,
  errorMessage,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}) => {
  const inputClasses = clsx(
    'block w-full rounded-md border transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    variantClasses[variant],
    sizeClasses[inputSize],
    error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
    disabled && 'opacity-50 cursor-not-allowed bg-gray-100',
    leftIcon && 'pl-10',
    rightIcon && 'pr-10',
    className
  );

  return (
    <div className="relative">
      {leftIcon && (
        <div className={clsx(
          'absolute left-3 top-1/2 -translate-y-1/2 text-gray-400',
          iconSizeClasses[inputSize]
        )}>
          {leftIcon}
        </div>
      )}
      
      <input
        disabled={disabled}
        className={inputClasses}
        {...props}
      />

      {rightIcon && (
        <div className={clsx(
          'absolute right-3 top-1/2 -translate-y-1/2 text-gray-400',
          iconSizeClasses[inputSize]
        )}>
          {rightIcon}
        </div>
      )}

      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
