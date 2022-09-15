import React from 'react'
import { AddTransaction } from './AddTransaction'
export const NewTransaction = () => {
  return (
    <div className='flex-c'>
      <h4 className=''>Add New Transaction</h4>
          <div className='line box'></div>
    
          <AddTransaction/>
    </div>
  )
}
