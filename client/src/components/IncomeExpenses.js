import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const ingresos = amounts
    .filter(fl => fl > 0)
    .reduce((acc, item) => (acc += item), 0);
    
  const egresos = amounts
    .filter(fl => fl < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Ingresos</h4>
        <p className="money plus">{numberWithCommas(ingresos)}</p>
      </div>
      <div>
        <h4>Egresos</h4>
        <p className="money minus">{numberWithCommas(Math.abs(egresos))}</p>
      </div>
    </div>
  )
}
