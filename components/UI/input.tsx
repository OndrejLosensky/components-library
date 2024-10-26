import React from 'react';
import clsx from 'clsx';

type InputVariant = 'primary' | 'secondary' | 'outline';
type InputSize = 'sm' | 'md' | 'lg' | 'xl';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  inputSize?: InputSize; 
  className?: string;
}

const variantClasses: Record<InputVariant, string> = {
  primary: 'bg-white text-gray-800 border-gray-300 focus:ring-blue-600 focus:border-blue-600',
  secondary: 'bg-gray-100 text-gray-700 border-gray-300 focus:ring-gray-600 focus:border-gray-600',
  outline: 'bg-transparent text-gray-800 border border-gray-400 focus:ring-gray-600 focus:border-gray-600',
};

const sizeClasses: Record<InputSize, string> = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-3 text-md',
  lg: 'py-3 px-4 text-lg',
  xl: 'py-4 px-5 text-xl',
};

const Input: React.FC<InputProps> = ({
  variant = 'primary',
  inputSize = 'md', 
  className = '',
  ...props
}) => {
  return (
    <input
      className={clsx(
        'block w-full rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        variantClasses[variant],
        sizeClasses[inputSize],
        className
      )}
      {...props}
    />
  );
};

export default Input;
