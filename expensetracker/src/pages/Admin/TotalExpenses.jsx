import React from 'react'
import { useGetTransaction } from '../../hooks/useGetTransactions'

const TotalExpenses = () => {
const { transactionTotals } = useGetTransaction()

const { expense } = transactionTotals;
  
  return (
    <div>
      <div>
            <p>Your total expenses</p>
            <span>${expense}</span>   
      </div>
    </div>
  )
}

export default TotalExpenses
