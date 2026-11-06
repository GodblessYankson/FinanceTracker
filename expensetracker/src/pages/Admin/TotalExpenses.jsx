import React from 'react'
import { getUserTransaction } from '../../hooks/useGetTransactions'

const TotalExpenses = () => {

const { transactions } = getUserTransaction()
 const { transactionTotals } = getUserTransaction()
const { income } = transactionTotals


  
  return (
    <div>
      <div>
            <p className="font-bold text-3xl">TOTAL INCOME <span>GHS {income?.toFixed(2)}</span></p>
            <p>Your total expenses</p>
{/*               <p>Transaction size: {querySnapshotdata?.size || 0}</p>
 */}      
    <div className="grid grid-cols-5 gap-2 md:gap-4 font-bold font-[#1a1a1a] md:tracking-wider md:text-lg ">
      <p>TITLE</p>  
      <p>CATEGORY</p>  
      <p>DATE</p>  
      <p>AMOUNT</p>  
      <p>ACTION</p>  
    </div>      
 <span>{transactions.map((transaction,index) => (
                <div key={transaction.transactionId}>
                  
                  <div className={`${index % 2 === 0 ? 'bg-violet-100' : 'bg-white'}  grid grid-cols-5 md:gap-4 gap-2 py-2 font- text-sm rounded-md md:px-2`}>
                    <p className="">{transaction.description.toUpperCase()}</p>
                    <p className="">{transaction.category.toUpperCase()}</p>
                    <p className="">{transaction.createdAt?.toDate().toLocaleDateString("ghs", {})}</p>
                    <p className={`${transaction.transactionType === 'income' ? 'text-green-600' : 'text-red-600'}`}><span className='INvisible md:visible'>GHS </span>{transaction.transactionAmount.toFixed(2)}</p>
                    <p className="">Edit</p>
                  </div>
                 

                </div>

            ))}</span>  
      </div>
    </div>
  )
}

export default TotalExpenses
