import React, { MouseEventHandler } from 'react';

interface ItemProps {
  className?: string;
  onClick?: MouseEventHandler;
}

export const Item: React.FC<ItemProps> = ({ children, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      { children }
    </div>
  )
}