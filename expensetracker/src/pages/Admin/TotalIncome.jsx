import React from 'react'
import { getUserTransaction } from '../../hooks/useGetTransactions' 

const TotalIncome = () => {
  const { transactions } = getUserTransaction()
  const { transactionTotals } = getUserTransaction()
  const { income } = transactionTotals

  return (
    <div>
      <div>
        <p>TOTAL INCOME <span>GHS {income?.toFixed(2)}</span></p>

      </div>
    </div>
  )
}

export default TotalIncome
