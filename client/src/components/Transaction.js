import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = (props) => {
  const { transaction } = props;
  const sign = transaction.amount > 0? "+" : "-";
  const {deleteTransaction} = useContext(GlobalContext);

  return (
    <li className={transaction.amount > 0? "plus" : "minus"}>
      {transaction.text}
      <span>
        {sign}$ {numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  )
}
