"use client"; 

import React from 'react';
import clsx from 'clsx';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  type?: AlertType;
  message: string;
  onClose?: () => void;
  className?: string;
}

const alertTypeClasses: Record<AlertType, string> = {
  success: 'bg-green-100 text-green-800 border border-green-300',
  error: 'bg-red-100 text-red-800 border border-red-300',
  warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
  info: 'bg-blue-100 text-blue-800 border border-blue-300',
};

const Alert: React.FC<AlertProps> = ({ type = 'info', message, onClose, className = '' }) => {
  return (
    <div
      className={clsx(
        'flex items-start p-4 rounded-md shadow-md',
        alertTypeClasses[type],
        className
      )}
    >
      <div className="flex-1">
        {message}
      </div>
      {onClose && (
        <button
          className="ml-4 text-lg focus:outline-none"
          onClick={onClose}
        >
          &times; {/* Close icon */}
        </button>
      )}
    </div>
  );
};

export default Alert;
