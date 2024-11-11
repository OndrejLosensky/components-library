"use client";

import React from 'react';
import clsx from 'clsx';
import { 
  IoInformationCircle, 
  IoCheckmarkCircle, 
  IoWarning, 
  IoClose,
  IoAlertCircle 
} from "react-icons/io5";

interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  closeable?: boolean;
}

const variantClasses = {
  info: 'bg-blue-50 text-blue-800 border-blue-200',
  success: 'bg-green-50 text-green-800 border-green-200',
  warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
  error: 'bg-red-50 text-red-800 border-red-200'
};

const variantIcons = {
  info: <IoInformationCircle className="w-5 h-5 text-blue-500" />,
  success: <IoCheckmarkCircle className="w-5 h-5 text-green-500" />,
  warning: <IoWarning className="w-5 h-5 text-yellow-500" />,
  error: <IoAlertCircle className="w-5 h-5 text-red-500" />
};

const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  className = '',
  title,
  icon,
  onClose,
  closeable = false
}) => {
  return (
    <div
      role="alert"
      className={clsx(
        'relative flex gap-3 rounded-lg border p-4',
        variantClasses[variant],
        className
      )}
    >
      <div className="flex-shrink-0">
        {icon || variantIcons[variant]}
      </div>
      
      <div className="flex-1">
        {title && (
          <h5 className="mb-1 font-medium">
            {title}
          </h5>
        )}
        <div className="text-sm">
          {children}
        </div>
      </div>

      {(closeable || onClose) && (
        <button
          onClick={onClose}
          className={clsx(
            'absolute right-2 top-2 p-1 rounded-full transition-colors',
            'hover:bg-black/5'
          )}
        >
          <IoClose className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;
