import React from 'react'
import { getUserTransaction } from '../../hooks/useGetTransactions'

const TotalExpenses = () => {

const { transactions, querySnapshotdata } = getUserTransaction()
  
  return (
    <div>
      <div>
            <p>Your total expenses</p>
            <p>Transaction size: {querySnapshotdata?.size || 0}</p>
             <span>{transactions.map((transaction) => (
                <div key={transaction.transactionId}>
                    <p>All transactions</p>
                    <div className='flex flex-col gap-2 shadow-md border border-gray-300 rounded-xl p-3 md:px-5'>
                    <p>{transaction.description}</p>
                    <p>{transaction.transactionType}</p>
                    <p>{transaction.transactionAmount}</p>
                    <p>{transaction.category}</p>
                    </div>

                </div>

            ))}</span>  
      </div>
    </div>
  )
}

export default TotalExpenses
