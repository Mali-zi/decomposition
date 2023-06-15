import React from 'react';

type ChildrenProps = {
  children: React.ReactNode;
  icons: React.ReactNode;
};

const RowList: React.FC<ChildrenProps> = ({ children, icons }) => {
  return (
    <ul className="RowList">
      {React.Children.map(children, (child) => {
        return (
          <li className="Row">
            {icons}
            {child}
          </li>
        )
      })}
    </ul>
  );
};

export default RowList;