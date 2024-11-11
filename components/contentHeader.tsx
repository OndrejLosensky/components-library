import React from 'react';

const ContentHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        {children}
      </h1>
      <div className="h-px bg-gray-200 mt-4" />
    </div>
  );
};

export default ContentHeader;
