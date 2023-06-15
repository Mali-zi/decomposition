import React from 'react';

type ChildrenProps = {
  children: React.ReactNode;
};

const RowList: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <ul className="RowList">
      {React.Children.map(children, (child) => {
        return <li className="Row">{child}</li>;
      })}
    </ul>
  );
};

export default RowList;