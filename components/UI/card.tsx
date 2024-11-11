import React from 'react';
import clsx from 'clsx';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  size?: 'sm' | 'md' | 'lg';
}

const variantClasses = {
  default: 'bg-white border border-gray-200',
  outlined: 'bg-transparent border border-gray-300',
  elevated: 'bg-white shadow-md'
};

const sizeClasses = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6'
};

const Card: React.FC<CardProps> = ({ 
  className = '', 
  children,
  variant = 'default',
  size = 'md'
}) => {
  return (
    <div className={clsx(
      'rounded-lg',
      variantClasses[variant],
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ 
  className = '', 
  children
}) => {
  return (
    <div className={clsx(
      'border-b border-gray-200 p-4',
      className
    )}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const CardBody: React.FC<CardBodyProps> = ({ 
  className = '', 
  children,
  size = 'md'
}) => {
  return (
    <div className={clsx(
      size === 'sm' && 'p-3',
      size === 'md' && 'p-4',
      size === 'lg' && 'p-6',
      className
    )}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ 
  className = '', 
  children
}) => {
  return (
    <div className={clsx(
      'border-t border-gray-200 p-4',
      className
    )}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardBody, CardFooter };
