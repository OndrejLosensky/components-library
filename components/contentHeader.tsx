import React from 'react';

const ContentHeader: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="text-3xl font-bold w-full "> 
      {children}
    </div>
  );
};

export default ContentHeader;
