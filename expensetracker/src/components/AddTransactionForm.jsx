import React from 'react'
import { useAddTransaction } from '../hooks/useAddTransactions'
import { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';
import Loader from './Loader'
import { useEffect } from 'react';

const AddTransactionForm = ({setaddTransactionModal}) => {

const { addTransaction } = useAddTransaction()
    
/* Adding addTransaction arguments */
    const [description, setDescription] = useState("")
    const [transactionType, setTransactionType] = useState("income")
    const [transactionAmount, setTransactionAmount] = useState()
    const [category, setCategory] = useState("")
    const [loading, setLoading] = useState(false)
    
/* Add transaction button function */
const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

  /* Add form validate */
  if(!description.trim()) {
    toast.error("Enter a valid title")
    return;
  }
  if(transactionAmount <=0) {
    toast.error("Enter valid amount")
    return;
  }
  if(!category) {
    toast.error("Select a category")
    return
  }
  
    if(loading) {
        return(<Loader />)
    }
  

    const success = await  addTransaction({
        description: description.trim(),
        transactionType,
        transactionAmount,
        category
    })
    
    if(success) {
        setDescription("")
        setTransactionAmount("")
        setCategory("")
        
    }

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
      <form action="" onSubmit={onSubmit}>
        {/* Add income and expense */}
        <label className='text-lg'>
            Transaction Type
        </label>
        <div className='grid grid-cols-2 bg-[#f1f5f9] items-center'>
            <div className='cols-1 m-1 '>
            <button type='button' value="income" onClick={() => setTransactionType("income")} className={`${transactionType === 'income' ?'bg-green-500 rounded-sm font-bold text-white' : 'bg-[#f1f5f9]'} w-full py-1`} >
                Income
            </button>
            </div>
            <div className='cols-1 m-1' >
            <button type='button' value="expense" onClick={() => setTransactionType("expense")} className={`${transactionType === 'expense' ? 'bg-red-500 rounded-sm font-bold text-white' : 'bg-[#f1f5f9]'} w-full py-1`}>
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
        value={description}
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
        value={transactionAmount}
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
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className='bg-[#f1f5f9]  mt-1 py-2 px-1 ring-1 ring-violet-500 outline-violet-500'>
            {
            transactionType === "income" ? 
            (
            <>
            <option value="" disabled>Select category</option>
            <option value="savary" className='hover:bg-blue-50'>Salary</option>
            <option value="investment">Investments</option>
            <option value="gift">Gift</option>
            <option value="freelance">Freelance</option>
            <option value="others">Others</option>
            </>
            ) : (
            <>
            <option disabled>Select category</option>
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
            type='submit'
            onClick={() => setaddTransactionModal(false)}
            className='cols-1 bg-red-500 py-3 font-semibold rounded-xl'>
                Cancel 
            </button>
            <button 
            type='submit'
            className='cols-1 bg-green-500 py-3 font-semibold rounded-xl'>
                Save Entry
            </button>
        </div>
      </form>
    </div>
  )
}

export default AddTransactionForm
