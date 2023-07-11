import './multi-select.css';
import React, { MouseEvent as ReactMouseEvent, ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
  items: string[];
  selected: string[];
  onSelect(selection: string[]): void;
  renderItem?(item: string): ReactNode;
  renderValues?(selection: string[]): ReactNode;
};

function MultiSelect({ items = [], selected = [], onSelect, renderItem, renderValues }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function listener(event: MouseEvent) {
      if (!hostRef.current?.contains(event.target as HTMLElement)) {
        setMenuOpen(false);
      }
    }
    window.addEventListener('click', listener);
    return () => {
      window.removeEventListener('click', listener);
    }
  }, []);

  /*
  useEffect(() => {
    console.log('effect mount + juste après render (sauf le premier)')
    return () => {
      console.log('effect unmount + juste avant render (sauf le premier)')
    }
  });
   */

  /*
  useEffect(() => {
    console.log('effect mount')
    return () => {
      console.log('effect unmount')
    }
  }, []);
   */

  /*
  useEffect(() => {
    console.log('effect mount + juste après render (sauf le premier) que si menuOpen change')
    return () => {
      console.log('effect unmount + juste avant render (sauf le premier) que si menuOpen change')
    }
  }, [menuOpen]);
   */

  // console.log(selected[0].toUpperCase());

  function handleClickValues(event: ReactMouseEvent<HTMLDivElement>) {
    console.log('click div values')
    setMenuOpen(!menuOpen);
  }

  function handleClickItem(item: string) {
    if (selected.includes(item)) {
      onSelect(selected.filter((el) => el !== item));
    } else {
      onSelect([...selected, item]);
    }
  }

  return (
    <div className="MultiSelect" ref={hostRef}>
      <div className="values" onClick={handleClickValues}>{selected.length ? renderValues ? renderValues(selected) : selected.join(', ') : 'Select...'}</div>
      {menuOpen && (
        <div className="menu">
          {items.map((item) => (
            <div className="item" key={item}>
              <label>
                <input type="checkbox" className="filled-in" checked={selected.includes(item)} onChange={() => handleClickItem(item)} />
                <span>{renderItem ? renderItem(item) : item}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
