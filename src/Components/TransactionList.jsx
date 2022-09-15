import React, { useContext } from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () =>
{
  const {transactions} = useContext(GlobalContext)
  return (
    <div className='history flex-c pad-sml-v'>
      <h4>History</h4>
      <div className='line box'></div>
      <section>
        <ul className='flex-c aic'>
          {transactions.map(t =>
            <Transaction
              key={t.id}
              transactions={t} />
          )}
          </ul>
        </section>
    </div>
  )
}
