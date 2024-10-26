import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

interface DropdownProps {
  className?: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ className = '', children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown if clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={clsx('relative', className)} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-full bg-blue-500 text-white rounded-md px-4 py-2 focus:outline-none"
      >
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-1 w-full bg-white shadow-lg rounded-md">
          {children}
        </div>
      )}
    </div>
  );
};

interface DropdownOptionProps {
  value: string;
  onClick: () => void;
  className?: string;
}

const DropdownOption: React.FC<DropdownOptionProps> = ({ value, onClick, className }) => {
  return (
    <div
      className={clsx('px-4 py-2 cursor-pointer hover:bg-gray-100', className)}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export { Dropdown, DropdownOption };
