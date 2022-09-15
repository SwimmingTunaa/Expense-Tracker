import { React, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () =>
{
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(t => t.amount)

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  const income = amounts.filter(item => item > 0).reduce((prev, curr) => (prev += curr), 0).toFixed(2)
  
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2) *-1;
  

  return (
    <div className='flex-c'>
        <div className='pad-sml-v'>
          <h4>YOUR BALANCE</h4>
          <h3><b>${total}</b></h3>
        </div>
        <div className='flex box jcc'>
            <div className='pad-sml flex-c aic'>
                  <h4>INCOME</h4>
                  <h4 className='green'>+${income}</h4>
            </div>
            <div className='pad-sml flex-c aic'>
                  <h4>EXPENSE</h4>
                  <h4 className='red'>-${expense}</h4>
            </div>        
        </div>
    </div>
  )
}
