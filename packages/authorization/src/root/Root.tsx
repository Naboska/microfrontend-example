import React from 'react';

export const Root: React.FC = ({children}) => {
  return (
    <div>
      <span>{children}</span>
      <span>ya rodilsya</span>
    </div>
  );
};
