"use client";

import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children, className = '' }) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Close drawer if clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={clsx(
        'fixed inset-0 flex items-start justify-end bg-black bg-opacity-50 transition-opacity duration-200',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
    >
      <div
        ref={drawerRef}
        className={clsx(
          'bg-white shadow-lg h-full w-64 p-4 transition-transform duration-200 transform',
          isOpen ? 'translate-x-0' : 'translate-x-full',
          className
        )}
      >
        <button onClick={onClose} className="mb-4 text-gray-500">
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
