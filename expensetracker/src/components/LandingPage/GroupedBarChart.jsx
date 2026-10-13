import React from 'react'
import { Pie } from 'react-chartjs-2'
import 'chart.js/auto'
import { LandingPageData } from '../../constant/LandingData'

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
        maintainAspectRatio: false,
        
        plugins: {
           
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
                stacked: true,
                title: {
                    display: true,
                    text: 'Amount(Thousands)',
                    font: {
                        size: 10
                    }
                }
            },
           /*  x: {
                title: {
                    display: true,
                    text: "Income and Expenses",
                    font: {
                        size: 10
                    }
                }
            } */
        }
    }
  return (
    <div className=' w-full h-[250px] px-2'>
{/*        <Bar data={data} options={options}/>
        <Line data={data} options={options}  /> */}
        <Pie data={data} options={options}/>
    </div>
  )
}

export default GroupedBarChart
