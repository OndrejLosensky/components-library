import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;  
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  outline: 'border border-gray-600 text-gray-600 hover:bg-gray-100',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-2 px-4 text-md',
  lg: 'py-3 px-5 text-lg',  
  xl: 'py-5 px-8 text-xl',  
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',  
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        variantClasses[variant],      
        sizeClasses[size],        
        className                 
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
