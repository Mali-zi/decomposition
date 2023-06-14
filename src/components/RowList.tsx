import { Children } from 'react';

export default function RowList({ children }: any) {
  return (
    <ul className="RowList">
      {Children.map(children, child =>
        <li className="Row">
          {child}
        </li>
      )}
    </ul>
  );
}