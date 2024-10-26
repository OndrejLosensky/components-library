"use client"; // Mark this as a client component

import React from 'react';
import clsx from 'clsx';

interface ToggleProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const Toggle: React.FC<ToggleProps> = ({ isChecked, onChange, className = '' }) => {
  const handleToggle = () => {
    onChange(!isChecked);
  };

  return (
    <div
      className={clsx(
        'relative inline-flex items-center cursor-pointer',
        className
      )}
      onClick={handleToggle}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="sr-only"
      />
      <div className="block w-10 h-6 bg-gray-400 rounded-full transition-colors duration-200 ease-in-out">
        <div
          className={clsx(
            'dot w-4 h-4 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out',
            isChecked ? 'translate-x-4 bg-blue-500' : 'translate-x-0'
          )}
        />
      </div>
    </div>
  );
};

export default Toggle;
