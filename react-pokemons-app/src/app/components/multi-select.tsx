import './multi-select.css';
import React, { MouseEvent, useState } from 'react';

type Props = {
  items: string[];
  selected: string[];
  onSelect(selection: string[]): void;
};

function MultiSelect(props: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  /*
  const els = [];

  for (const item of props.items) {
    els.push(<div>{item}</div>)
  }

  const els = props.items.map((item) => <div>{item}</div>);
  */

  function handleClickValues(event: MouseEvent<HTMLDivElement>) {
    setMenuOpen(!menuOpen);
  }

  function handleClickItem(item: string) {
    if (props.selected.includes(item)) {
      props.onSelect(props.selected.filter((el) => el !== item));
    } else {
      props.onSelect([...props.selected, item]);
    }
  }

  return (
    <div className="MultiSelect">
      <div className="values" onClick={handleClickValues}>{props.selected.length ? props.selected.join(', ') : 'Select...'}</div>
      {menuOpen && (
        <div className="menu">
          {props.items.map((item) => (
            <div className="item" key={item}>
              <label>
                <input type="checkbox" className="filled-in" checked={props.selected.includes(item)} onChange={() => handleClickItem(item)} />
                <span>{item}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
