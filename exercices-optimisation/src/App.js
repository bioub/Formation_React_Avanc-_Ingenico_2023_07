import { Link, Route, Routes } from 'react-router-dom';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Exercise4 from './Exercise4';
import Exercise5 from './Exercise5';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="exercise1">Exercise 1</Link>{' '}
        <Link to="exercise2">Exercise 2</Link>{' '}
        <Link to="exercise3">Exercise 3</Link>{' '}
        <Link to="exercise4">Exercise 4</Link>{' '}
        <Link to="exercise5">Exercise 5</Link>
      </nav>
      <Routes>
        <Route path="exercise1" element={<Exercise1 />} />
        <Route path="exercise2" element={<Exercise2 />} />
        <Route path="exercise3" element={<Exercise3 />} />
        <Route path="exercise4" element={<Exercise4 />} />
        <Route path="exercise5" element={<Exercise5 />} />
      </Routes>
    </div>
  );
}

export default App;
