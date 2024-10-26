import React from 'react';
import clsx from 'clsx';

type SelectVariant = 'primary' | 'secondary' | 'outline';
type SelectSize = 'sm' | 'md' | 'lg' | 'xl';

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  variant?: SelectVariant;
  selectSize?: SelectSize;
  className?: string;
  children: React.ReactNode;
}

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  customStyle?: string;
}

const variantClasses: Record<SelectVariant, string> = {
  primary: 'bg-white text-gray-800 border-gray-300 focus:ring-blue-600 focus:border-blue-600',
  secondary: 'bg-gray-100 text-gray-700 border-gray-300 focus:ring-gray-600 focus:border-gray-600',
  outline: 'bg-transparent text-gray-800 border border-gray-400 focus:ring-gray-600 focus:border-gray-600',
};

const sizeClasses: Record<SelectSize, string> = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-3 text-md',
  lg: 'py-3 px-4 text-lg',
  xl: 'py-4 px-5 text-xl',
};

const Select: React.FC<SelectProps> = ({
  variant = 'primary',
  selectSize = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <select
      className={clsx(
        'block w-full rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        variantClasses[variant],
        sizeClasses[selectSize],
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
};

const Option: React.FC<OptionProps> = ({ customStyle, children, ...props }) => {
  return (
    <option className={clsx('py-2 px-4', customStyle)} {...props}>
      {children}
    </option>
  );
};

export { Select, Option };
