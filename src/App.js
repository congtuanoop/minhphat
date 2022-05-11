import { useState } from 'react';
import Add from './Add';
import './App.css';
import Ex from './Ex';

function App() {
  const [toggle, changeToggle] = useState(true)
  const [add, setAdd] = useState([])
  const [ex, seEx] = useState([])



  function handleToggle() {
    changeToggle(!toggle)
  }

  function handleAdd(valueAdd) {
    setAdd((add) => {
      return [
        ...add,
        valueAdd,
      ]
    })
  }

  function handleEx(valueEx) {
    seEx((ex) => {
      return [
        ...ex,
        valueEx,
      ]
    })
  }

  return (
    <div className="App">
      {toggle ? <Add handleAdd={handleAdd} /> : <Ex handleEx={handleEx} />}
      <button onClick={handleToggle}>Togle</button>

      <h2>Tiền thu khách : </h2>
      <ul>
        {add.map((addLi, index) => (
          <li key={index}>{addLi.nameAdd} : {addLi.moneyAdd}</li>
        ))}
      </ul>
      <h3>Tổng thu : {add.reduce((total, curren) => total = total + Number.parseInt(curren.moneyAdd), 0)}</h3>

      <h2>Tiền chi : </h2>
      <ul>
        {ex.map((exLi, index) => (
          <li key={index}>{exLi.nameEx} : {exLi.moneyEx}</li>
        ))}
      </ul>
      <h3>Tổng chi : {ex.reduce((total, curren) => total = total + Number.parseInt(curren.moneyEx), 0)}</h3>

    </div>
  );
}

export default App;
