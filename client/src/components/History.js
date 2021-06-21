import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { Transaction } from './Transaction';

export const History = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Historial de transacciones</h3>
      {transactions && transactions.length > 0 &&
        <>
          <ul id="list" className="list">
            {transactions.map(transaction => 
              <Transaction key={transaction.id} transaction={transaction} />
            )}
          </ul>
        </>
      }
    </>
  )
}
