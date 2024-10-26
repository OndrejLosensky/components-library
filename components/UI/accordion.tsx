"use client"; 

import React, { useState } from 'react';
import clsx from 'clsx';

interface AccordionProps {
  className?: string;
  children: React.ReactNode;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ className = '', children }) => {
  return (
    <div className={clsx('border rounded-md shadow-md', className)}>
      {children}
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
      >
        <span className="font-semibold">{title}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export { Accordion, AccordionItem };
