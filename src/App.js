import { useState } from 'react';
import Add from './Add';
import './App.css';
import Ex from './Ex';

function App() {
  const [toggle, changeToggle] = useState(true)
  const [add, setAdd] = useState([])
  const [ex, seEx] = useState([])

  let sumAdd = add.reduce((total, curren) => total = total + Number.parseInt(curren.moneyAdd), 0)
  let sumEx = ex.reduce((total, curren) => total = total + Number.parseInt(curren.moneyEx), 0)

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
          <li key={index}>{addLi.nameAdd} : <p className='num'>{Intl.NumberFormat().format(addLi.moneyAdd)}</p></li>
        ))}
      </ul>
      <h3>Tổng thu : <p className='num'>{Intl.NumberFormat().format(sumAdd)}</p></h3>
      <hr />

      <h2>Tiền chi : </h2>
      <ul>
        {ex.map((exLi, index) => (
          <li key={index}>{exLi.nameEx} : <p className='num'>{exLi.moneyEx}</p></li>
        ))}
      </ul>
      <h3>Tổng chi : <p className='num'>{Intl.NumberFormat().format(sumEx)}</p></h3>
      <hr />

      <h2>Tiền còn : <p className='num'>{Intl.NumberFormat().format(sumAdd - sumEx)}</p></h2>

      <footer>
        <p></p>
        Email : congtuanoop@gmail.com || fb : facebook/congtuanoop
      </footer>
    </div>
  );
}

export default App;
