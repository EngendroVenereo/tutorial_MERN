import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const NewTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 100000000);

    const newTransaction = {
      id: id,
      text: text,
      amount: +amount,
    }

    addTransaction(newTransaction);

    setText('');
    setAmount(0);
  }

  return (
    <>
      <h3>Nueva Transacción</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Descripción</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Descripción" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Monto</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Ingrese monto"/>
        </div>
          <button className="btn">Agregar Transacción</button>
      </form>
    </>
  )
}
