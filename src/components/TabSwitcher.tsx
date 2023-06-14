import { Children } from 'react';


export default function TabSwitcher({ children }: any) {
  return (
    <ul className="TabSwitcher">
      {Children.map(children, child =>
        <li className="sectionTabSwitcher">
          {child}
        </li>
      )}
    </ul>
  );
}
