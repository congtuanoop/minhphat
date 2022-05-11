import { useState } from 'react';
import Add from './Add';
import './App.css';
import Ex from './Ex';

function App() {
  const [toggle, changeToggle] = useState(true)
  const [add, setAdd] = useState([])
  const [ex, seEx] = useState([])

  const d = new Date();

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

  const handleDelAdd = (index) => {
    const newAdd = [...add];
    newAdd.splice(index, 1);
    setAdd(newAdd)
  }

  const handleDelEx = (index) => {
    const newAdd = [...ex];
    newAdd.splice(index, 1);
    seEx(newAdd)
  }

  return (
    <div className="App">
      <div className='dmy'><p>{d.getDate()}</p> <p>{d.getMonth() + 1}</p> <p>{d.getFullYear()}</p></div>
      {toggle ? <Add handleAdd={handleAdd} /> : <Ex handleEx={handleEx} />}
      <button onClick={handleToggle}>Toggle</button>

      <h2>Tiền thu khách : </h2>
      <ul>
        {add.map((addLi, index) => (
          <li key={index}>
            <p>{addLi.nameAdd} :</p> <p className='num'>{Intl.NumberFormat().format(addLi.moneyAdd)}</p>
            <p className='delete' onClick={() => handleDelAdd(index)}>&times;</p>
          </li>
        ))}
      </ul>
      <h3>Tổng thu : <p className='num'>{Intl.NumberFormat().format(sumAdd)},000</p></h3>
      <hr />

      <h2>Tiền chi : </h2>
      <ul>
        {ex.map((exLi, index) => (
          <li key={index}>
            <p>{exLi.nameEx} :</p> <p className='delete' onClick={() => handleDelEx(index)}>&times;</p> <p className='num'>
              {exLi.moneyEx}</p>
          </li>
        ))}
      </ul>
      <h3>Tổng chi : <p className='num'>{Intl.NumberFormat().format(sumEx)}</p></h3>
      <hr />

      <h2>Tiền còn : <p className='num red'>{Intl.NumberFormat().format(sumAdd - sumEx)},000</p></h2>

      <footer>
        <p></p>
        Email : congtuanoop@gmail.com <br />
        fb : facebook/congtuanoop
      </footer>
    </div >
  );
}

export default App;
