import React from 'react'
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { getUserTransaction } from '../../hooks/useGetTransactions';

const AllTransactionsList = () => {
  let { transactions } = getUserTransaction()
  //let [transactionDescriptionFilter, setTransactionDescriptionFilter] = useState("")
  return (
    <section className="w-full border border-red-300">
      <div>
        <div className= "grid grid-cols-1 md:grid-cols-3 border border-b-blue-800 ">
    {/* Transaction Text */}
            <div className="md:col-span-1">
            <p>All transactions</p>
            <p>Manage and track recent logged entries</p>
        </div>

        {/* Search and Filter Options */}
        <div className="md:col-span-2 flex items-center justify-between border-3 border-gray-900">
          {/* Search tranasaction by name */}
        <div className="relative w-85 bg-gray-300 rounded-md focus:outline-2 focus:outline-violet-500">
          <IoIosSearch 
          size={20}
          className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
          />
          <input 
          type="text" 
          placeholder="Search transactions..." 
          className="w-full border border-gray-300 py-2 pl-10 pr-3 rounded-xl outline-none"
          />
        </div>

{/* Choose the transaction type */}
        <div>
          <select name="" id=""
          className={`bg-gray-300 border text-gray-900 border-gray-300  py-1 rounded-md  focus:outline-2 focus:outline-violet-500`}
          >
            <option value="alltypes">All Types</option>
            <option value="Income" className=''>Incomes only</option>
            <option value="Expense" className=''>Expenses only</option>
          </select>
        </div>

{/* Choose the categories type */}
        <div 
        >
          <select name="" id=""
          className='bg-gray-300 border text-gray-900 border-gray-300 py-1 rounded-md focus:outline-2 focus:outline-violet-500 flex items-center gap-10'
          >
            <option value="">All Categories</option>
            <option value="salary">Salary</option>
            <option value="investment">Investments</option>
            <option value="gift">Gift</option>
            <option value="freelance">Freelance</option>
            <option value="transportation">Transportation</option>
            <option value="utilities">Utilities</option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="food">Food</option>
            <option value="others">Others</option>
          
        
          </select>
        </div>

        </div>
      </div>
      {/* show transasctions */}
      <div>
        {transactions.map((transaction) => (
          <div key={transaction.transactionId} className='border border-amber-500'>
            <div>
              <p>{transaction.description}</p>
              <p>{transaction.transactionAmount}</p>
              <p>{transaction.transactionType}</p>
              <p>{transaction.category}</p>
            </div>
          </div>
        ))}
      </div>

      </div>
    </section>
  )
}

export default AllTransactionsList
