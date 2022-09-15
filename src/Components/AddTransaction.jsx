import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () =>
{
    const [text,setText] = useState('')
    const [amount, setAmount] = useState(0)
    const [err, setErr] = useState(false);

    const { addTransaction } = useContext(GlobalContext)
    
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (text !== '' && amount !== 0)
        {
            const newTrans = {
                id: Math.floor(Math.random() * 10000000),
                text: text,
                amount: +amount
            }

            addTransaction(newTrans);
            setText('')
            setAmount('')
            setErr(false);
        }
        else
        {
            setErr(true);
        }
    }

    const handleText = (e) =>
    {
        e.preventDefault();
        setText(e.target.value)    
    }
    const handleAmount = (e) =>
    {
        e.preventDefault();
        setAmount(e.target.value)    
    }
    
  return (
    <div>
          <form onSubmit={handleSubmit}>
              <div className='flex-c form-input'>
                  <label htmlFor="text">Text</label>
                    {err === true && (<div className='pad-tiny-v'>
                      <p4 style={{"font-size" : "0.75rem"}}>Please enter a description</p4>
                  </div>)}
                  <input type="text" value={text} onChange={handleText} placeholder='Enter description...' />
                
              </div>
              <div className='flex-c form-input'>
                  <label htmlFor="amount">Amount</label>
                   {err === true && (<div className='pad-tiny-v'>
                      <p4 style={{"font-size" : "0.75rem"}}>Please enter an amount</p4>
                  </div>)}
                  <input type="number" value={amount} onChange={handleAmount} placeholder='Enter amount...' />
                 
              </div>
              <button className='btn'>Add Transaction</button>
          </form>
    </div>
  )
}
