import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({transactions}) =>
{
  const sign = transactions.amount < 0 ? '-' : ''
  const { deleteTransaction } = useContext(GlobalContext)
  return (
    <li className='flex item' key={transactions.id} >
          <button className='del'  onClick={() =>
            deleteTransaction(transactions.id)
           }><b>X</b></button>
          <div className='flex jcsb'>
            <span className='pad-tiny'>{transactions.text}</span>
            <span className='pad-tiny'>{sign}${Math.abs(transactions.amount)}</span>
          </div>
      <div
        className={`pad-sml ${sign === '-' ? 'red' : 'green'}`}>
      </div>
      </li>
  )
}

export default Transaction