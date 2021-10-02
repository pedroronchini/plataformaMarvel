import React, { useState } from 'react';

import { List } from './partials/List';
import { Item } from './partials/Item';
import { Toggle } from './partials/Toggle';
import { DropDownContext } from './DropDownContext';

interface DropDownProps {
  className?: string;
}

export const DropDown: React.FC<DropDownProps> & {
  Toggle: typeof Toggle,
  List: typeof List,
  Item: typeof Item,
} = ({ children, className }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={className}>
      <DropDownContext.Provider value={{
          isShown,
          setIsShown
        }} 
      >
        { children }
      </DropDownContext.Provider>
    </div>
  )
};

DropDown.Toggle = Toggle;
DropDown.List = List;
DropDown.Item = Item;