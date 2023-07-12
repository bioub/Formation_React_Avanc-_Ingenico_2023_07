import { ReactNode } from 'react';

type Props<T> = {
  items: T[];
  renderItem(item: T): ReactNode;
};

function List<T>({ items, renderItem }: Props<T>) {
  return (
    <>
      {items.map((item) => renderItem(item))}
    </>
  )
}

export default List;

// List({items: ['Bleu', 'Vert'], renderItem(item) { return <></>}})

/*
const obj = {
  x: 1,
  render() { // Method Properties ES2015

  }
}
 */
