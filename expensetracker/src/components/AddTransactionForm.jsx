import React from 'react'
import { useAddTransaction } from '../hooks/useAddTransactions'
import { useState } from 'react'
import { IoClose } from "react-icons/io5";

const AddTransactionForm = ({setaddTransactionModal}) => {
/* Add close state */
/* const [close, setClose] = useState(false)
console.log(close) */
    /* Calling addTransaction function */
    const { addTransaction } = useAddTransaction()
    
/* Adding addTransaction arguments */
    const [description, setDescription] = useState("")
    const [transactionAmount, setTransactionAmount] = useState(0)
    const [transactionType, setTransactionType] = useState("income")
    const [category, setCategory] = useState("")
    
/* Add transaction button function */
const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
        description,
        transactionAmount,
        transactionType,
        category
    })

    setDescription(" ")
    setTransactionAmount(" ")
}
  return (
    <div className='border border-gray-300 rounded-xl shadow-md textcolor p-3 md:px-5'>
        <div className='flex items-center justify-between border-b border-[#f1f5f9] py-2'>
            <p className='font-bold text-[#1a1a1a] text-xl tracking-wide'>
            Add New Transaction
            </p>
        
        <IoClose 
        size={30}
        className='textcolor'
        onClick={() => setaddTransactionModal(false)}
        />
        
        </div>
      <form action="">
        {/* Add income and expense */}
        <label className='text-lg'>
            Transaction Type
        </label>
        <div className='grid grid-cols-2 bg-[#f1f5f9] items-center'>
            <div className='cols-1 m-1 '>
            <button onClick={(e) => setTransactionType(e.target.value)} className={`${transactionType === 'income' ?'bg-green-500 rounded-sm font-bold text-white' : 'bg-[#f1f5f9]'} w-full py-1`} >
                Income
            </button>
            </div>
            <div className='cols-1 m-1' >
            <button onClick={(e) => setTransactionType(e.target.value)} className={`${transactionType === 'expense' ? 'bg-red-500 rounded-sm font-bold text-white' : 'bg-[#f1f5f9]'} w-full py-1`}>
                Expense
            </button>
            </div>
        </div>
            
        {/* Add description or title */}
        <div className='flex flex-col space-y-1 mt-1'>
        <label className='text-lg '>
            Transaction Title
        </label>
        <input 
        type="text"
        onChange={(e) => setDescription(e.target.value)} 
        placeholder={`{${transactionType === "income" ? 'e.g. Received money from BlessTech': 'e.g. Paid water bills'}`}
        className='bg-[#f1f5f9] py-2 px-1 ring-1 ring-violet-500 outline-violet-500'
        />
        </div>

        {/* Adding Amount */}
        <div className='flex flex-col mt-1 space-y-1'>
        <label>
            Amount(GHS)
        </label>
        <input
        type='number'
        placeholder='0.00'
        onChange={(e) => setTransactionAmount(e.target.value)}
        required
        className='bg-[#f1f5f9] py-2 px-1 ring-1 ring-violet-500 outline-violet-500'
        />
        </div>

        {/* Adding category */}
        <div className='flex flex-col mt-1 space-y-1'>
        <label>
            Category
        </label>
        <select 
        name="category" 
        id="" 
        onChange={(e) => setCategory(e.target.value)}
        className='bg-[#f1f5f9] bg-[#f1f5f9] mt-1 py-2 px-1 ring-1 ring-violet-500 outline-violet-500'>
            {
            description === "income" ? 
            (
            <>
            <option value="savary">Salary</option>
            <option value="investment">Investments</option>
            <option value="gift">Gift</option>
            <option value="freelance">Freelance</option>
            <option value="others">Others</option>
            </>
            ) : (
            <>
            <option value="transaction">Transportation</option>
            <option value="utilities">Utilities</option>
            <option value="education">Education</option>
            <option value="Groceries">Groceries</option>
            <option value="food">Food</option>
            <option value="others">Others</option>
            </>
            )
        }
        </select> 
        </div>

        {/* Add the date */}
       {/* <div className='flex flex-col mt-1 space-y-1'>
         <label>
            Date
        </label>
        <input 
        type="date" 
        className='bg-[#f1f5f9] py-3 px-1 ring-1 ring-violet-500 outline-violet-500'
        />
       </div> */}

        {/* Creating the exist and save bitton */}
        <div className='grid grid-cols-2 gap-4 text-white my-2'>
            <button
            onClick={() => setaddTransactionModal(false)}
            className='cols-1 bg-red-500 py-3 font-semibold rounded-xl'>
                Cancel 
            </button>
            <button 
            type='submit'
            onClick={onSubmit}
            className='cols-1 bg-green-500 py-3 font-semibold rounded-xl'>
                Save Entry
            </button>
        </div>
      </form>
    </div>
  )
}

export default AddTransactionForm
