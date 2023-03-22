import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Increase color= 'Orange'></Increase>
      <Increase color= 'White'></Increase>
      <Increase color= 'Black'></Increase>
    </div>
  );
}

function Increase(props) {
  const [count, setCount] = useState(1);

  const boost = () => {setCount (count * 2)}

  return (
    <div style={{backgroundColor: 'orange', padding: '10px', margin: '20px'}}>
      <h1>Color: {props.color}</h1>
      <p>Click Here</p>
      <p>Count: {count}</p>
      <button onClick={boost}>Double</button>
    </div>
  )
}

export default App;
