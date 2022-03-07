
import './App.css';
import { increment, decrement } from './Action';
import { useSelector, useDispatch } from 'react-redux'
function App() {
  const counter = useSelector((state) => state.counterReducer)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
