import React, { MouseEventHandler, useContext } from 'react';
import { DropDownContext } from '../DropDownContext';

interface ListProps {
  className?: string;
  onClick?: MouseEventHandler;
}

export const List: React.FC<ListProps> = ({ children, className}) => {
  const { isShown } = useContext(DropDownContext)

  return isShown ? <div className={className}>{ children }</div> : null
}