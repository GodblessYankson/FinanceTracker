import React from 'react'
import { useState } from 'react'
import { FaCalculator, FaPiggyBank, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Calculator = () => {
    //Declaring state fro the variable
    const [monthlyIncome, setMonthlyIncome] = useState(7000)
    const [savingsRate, setSavingsRate] = useState(10)
    const [time, setTime] = useState(2)

    //Calculating the annual savings
    let monthlySavings = (monthlyIncome * savingsRate) / 100;
    let annualSavings = (time * 12) * monthlySavings
    let interestEarned = (annualSavings * 0.05) * time
    let interesPercentage = 0.05 * 2 * 100
    let totalSavings = annualSavings + interestEarned 

    //Converting to GHS cedis
    const formatCurrency = (val) =>
        new Intl.NumberFormat('GHS', {
            style: 'currency',
            currency: 'GHS',
            maximumFractionsDigits: 0,
        }).format(val)
        
    

  return (
   <section className='text-white w-full'>
    <div className='max-w-285 mx-auto py-20 md:flex flex-2 gap-6'>
       
         <div className='border border-green-700 flex-1'>
            <div className='space-y-2 mb-6'>
                <p className='text-violet-500 tracking-wide'>INTERACTIVE SAVINGS CALCULATOR</p>
                <p className='text-4xl md:text-5xl tracking-wide'>Project Your Future Wealth</p>
                <p className='textcolor'>Adjust the sliders below to calculate how consistent monthly savings can grow over time</p>

            </div>
            {/* sliders */}
            <div>
                <div className='mb-3'>
                    <div className='flex items-center justify-between mb-2'>
                        <p>Monthly Income</p>
                        <p className='text-violet-500'>{formatCurrency(monthlyIncome)}</p>
                    </div>
                    <input 
                    type="range"
                    min={500}
                    max={10000}
                    step={100}
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    className='slidersColors'
                    />
                </div>

                <div className='mb-3'>
                    <div className='flex items-center justify-between mb-2'>
                        <p>Savings Rate(%)</p>
                        <p className='text-violet-500'>{savingsRate}%</p>
                    </div>
                    <input 
                    type="range"
                    min={1}
                    max={100}
                    step={5}
                    value={savingsRate}
                    onChange={(e) => setSavingsRate(Number(e.target.value))}
                    className='slidersColors'
                    />
                </div>

                <div className='mb-3'>
                    <div className='flex items-center justify-between mb-2'>
                        <p>Time Horizon(Years)</p>
                        <p className='text-violet-500'>{time} Years</p>
                    </div>
                    <input 
                    type="range"
                    min={1}
                    max={10}
                    step={1}
                    value={time}
                    onChange={(e) => setTime(Number(e.target.value))}
                    className='slidersColors'
                    />
                </div>
            </div>
        </div>
    
    <div className='border border-red-600 flex-1'>
       <div className='bg-[#1b2637] py-6 px-4 w-full'>
        <div className='space-y-2 border-b border-[#5d697b]'>
            <p className='textcolor'>Estimated Savings over <span>{time} years</span></p>
            <p className='text-violet-500'>{formatCurrency(totalSavings)}</p>
            <p className='textcolor'>Based on a <span>{interesPercentage}% estimated annual return</span></p>
        </div>
        <div className='flex gap-6 '>
            <div>
                <p>Monthly Contributions</p>
                <p>{formatCurrency(monthlySavings)}</p>
            </div>
            <div>
                <p>Total Interest Earned</p>
                <p>{formatCurrency(interestEarned)}</p>
            </div>
        </div>
        <div className='bg-violet-500 text-center py-2 px-4 text-white my-2'>
            <Link to={"/signup"}>
                Start Saving Now
            </Link>
        </div>
       </div>
       </div>

    </div>
   </section>
  )
}

export default Calculator
