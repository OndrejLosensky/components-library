import React from 'react';
import clsx from 'clsx';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={clsx('bg-white shadow rounded-lg overflow-hidden', className)}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className = '', children }) => {
  return (
    <div className={clsx('p-4 border-b', className)}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ className = '', children }) => {
  return (
    <div className={clsx('p-4', className)}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ className = '', children }) => {
  return (
    <div className={clsx('p-4 border-t', className)}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardBody, CardFooter };
