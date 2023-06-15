import React from 'react';

type ChildrenProps = {
  children: React.ReactNode;
};

const TabSwitcher: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <ul className="TabSwitcher">
      {React.Children.map(children, (child) => {
        return <li className="sectionTabSwitcher">{child}</li>;
      })}
    </ul>
  );
};

export default TabSwitcher;
