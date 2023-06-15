import React from 'react';

type ChildrenProps = {
  children: React.ReactNode,
  widthTabSwitcher: string,
};

const TabSwitcher: React.FC<ChildrenProps> = ({ children, widthTabSwitcher }) => {
  return (
    <ul 
      className="headerTabSwitcher"
      style={{width: `${widthTabSwitcher}`}}
    >
      {React.Children.map(children, (child) => {
        return <li className="sectionTabSwitcher">{child}</li>;
      })}
    </ul>
  );
};

export default TabSwitcher;
