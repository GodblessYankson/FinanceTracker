import React from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import { LandingPageData } from '../../constant/LandingData'
import { size } from 'zod'

const GroupedBarChart = () => {
    const data = {
        labels: LandingPageData.map((data)=> data.month),
        datasets: [
            {
                label: "Income",
                data: LandingPageData.map((data) => data.income),
                backgroundColor: 'Green',
                borderWidth: 1
            },
            {
                label: "Expense",
                data: LandingPageData.map((data) => data.expense),
                backgroundColor: 'Red',
                borderWidth: 1
            }
        ]
    } 
    const options = {
        resposive: true,
        
        plugins: {
            title: {
                display:true,
                text: 'Income and Expense comparision'
            },
            font: {
                size: 15
            }, 
            legend: {
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount(Thousands)',
                    font: {
                        size: 10
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: "Income and Expenses",
                    font: {
                        size: 10
                    }
                }
            }
        }
    }
  return (
    <div className='w-full '>
       <Bar data={data} options={options}/>
    </div>
  )
}

export default GroupedBarChart
