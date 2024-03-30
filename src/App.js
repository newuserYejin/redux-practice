import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';

function App() {
  // const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)
  const id = useSelector(state => state.id)
  const password = useSelector(state => state.password)

  const countUP = () => {
    dispatch({ type: "increment", payload: { num: 5 } })
    // setCount(count + 1)
  }

  const login = () => {
    dispatch({ type: "login", payload: { id: "noona", password: "1234" } })
  }

  const countDown = () => {
    dispatch({ type: "decrement", payload: { downNum: 2 } })
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={countUP}>up</button>
      <button onClick={login}>Login</button>
      <button onClick={countDown}>Down</button>
      <div>id: {id}</div>
      <div>password: {password}</div>
      <Box />
    </div>
  );
}

export default App;
