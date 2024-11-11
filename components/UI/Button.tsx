import React from 'react';
import clsx from 'clsx';
import { IoReload } from "react-icons/io5";

type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'ghost'
  | 'link'
  | 'danger'
  | 'success';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  isFullWidth?: boolean;
  isRounded?: boolean;
  isDisabled?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
  outline: 'border-2 border-current text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  link: 'text-blue-600 hover:underline focus:ring-blue-500 p-0 height-auto',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
  xl: 'px-6 py-3 text-xl'
};

const iconSpacing: Record<ButtonSize, string> = {
  xs: 'space-x-1',
  sm: 'space-x-1.5',
  md: 'space-x-2',
  lg: 'space-x-2.5',
  xl: 'space-x-3'
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  leftIcon,
  rightIcon,
  isLoading = false,
  loadingText,
  isFullWidth = false,
  isRounded = false,
  isDisabled = false,
  disabled,
  type = 'button',
  ...props
}) => {
  const isButtonDisabled = isDisabled || disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isButtonDisabled}
      className={clsx(
        'inline-flex items-center justify-center font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-60 disabled:cursor-not-allowed',
        variant !== 'link' && 'rounded-md',
        isRounded && 'rounded-full',
        isFullWidth && 'w-full',
        !isLoading && variantClasses[variant],
        isLoading && 'bg-opacity-80 cursor-wait',
        sizeClasses[size],
        (leftIcon || rightIcon || isLoading) && iconSpacing[size],
        className
      )}
      {...props}
    >
      {isLoading && (
        <IoReload className={clsx(
          'animate-spin',
          size === 'xs' && 'w-3 h-3',
          size === 'sm' && 'w-4 h-4',
          size === 'md' && 'w-5 h-5',
          size === 'lg' && 'w-6 h-6',
          size === 'xl' && 'w-7 h-7'
        )} />
      )}
      
      {!isLoading && leftIcon}
      
      <span>
        {isLoading && loadingText ? loadingText : children}
      </span>
      
      {!isLoading && rightIcon}
    </button>
  );
};

export default Button;
