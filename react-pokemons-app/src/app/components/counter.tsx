type Props = {
  count: number;
  onIncrement(): void;
};

function Counter({ count, onIncrement }: Props) {
  return (
    <button className="Counter" onClick={() => onIncrement()}>
      {count}
    </button>
  );
}

export default Counter;
