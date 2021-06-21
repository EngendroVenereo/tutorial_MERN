import React, {useContext} from 'react';
import { numberWithCommas } from '../utils/format';

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const balance = amounts.reduce((acc, item) => (acc += item), 0);

  const sign = balance > 0? "+" : balance === 0? "" : "-";

  return (
    <>
      <h4>Balance</h4>
      <h1>{sign}$ {numberWithCommas(Math.abs(balance))}</h1>
    </>
  )
}
