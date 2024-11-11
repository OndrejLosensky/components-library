"use client";

import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import { IoClose } from "react-icons/io5";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg';
  overlay?: boolean;
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  title?: string;
}

const sizeClasses = {
  left: {
    sm: 'w-64',
    md: 'w-80',
    lg: 'w-96'
  },
  right: {
    sm: 'w-64',
    md: 'w-80',
    lg: 'w-96'
  },
  top: {
    sm: 'h-1/4',
    md: 'h-1/3',
    lg: 'h-1/2'
  },
  bottom: {
    sm: 'h-1/4',
    md: 'h-1/3',
    lg: 'h-1/2'
  }
};

const positionClasses = {
  left: 'left-0 top-0 h-full transform -translate-x-full',
  right: 'right-0 top-0 h-full transform translate-x-full',
  top: 'top-0 left-0 w-full transform -translate-y-full',
  bottom: 'bottom-0 left-0 w-full transform translate-y-full'
};

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  className = '',
  position = 'right',
  size = 'md',
  overlay = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  title
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 transition-opacity duration-300',
        overlay && 'bg-white',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
      onClick={handleOverlayClick}
    >
      <div
        ref={drawerRef}
        className={clsx(
          'fixed bg-white shadow-lg transition-transform duration-300',
          positionClasses[position],
          sizeClasses[position][size],
          isOpen && 'transform translate-x-0 translate-y-0',
          className
        )}
      >
        <div className="flex flex-col h-full">
          {(showCloseButton || title) && (
            <div className="flex items-center justify-between p-4 border-b">
              {title && <h2 className="text-lg font-semibold">{title}</h2>}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close drawer"
                >
                  <IoClose className="w-5 h-5" />
                </button>
              )}
            </div>
          )}
          <div className="flex-1 overflow-y-auto p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
