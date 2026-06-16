import React from 'react'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'

const DashboardCharts = ({ employees }) => {

    const departmentData = [

        {
            department: 'IT',
            count: employees.filter(emp => emp.department === 'IT').length
        },

        {
            department: 'HR',
            count: employees.filter(emp => emp.department === 'HR').length
        },

        {
            department: 'Sales',
            count: employees.filter(emp => emp.department === 'Sales').length
        },

        {
            department: 'Developer',
            count: employees.filter(emp => emp.department === 'Developer').length
        }

    ]

    return (

        <div className='mt-5'>

            <h3 className='text-center mb-4'>
                Employee Analytics Dashboard
            </h3>

            <div
                style={{
                    width: '100%',
                    height: 350
                }}
            >

              <ResponsiveContainer width="100%" height={350}>

                    <BarChart data={departmentData}>

                        <CartesianGrid strokeDasharray='3 3' />

                        <XAxis dataKey='department' />

                        <YAxis />

                        <Tooltip />

                        <Bar dataKey='count' />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    )
}

export default DashboardCharts