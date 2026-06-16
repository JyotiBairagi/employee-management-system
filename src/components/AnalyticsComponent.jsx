import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'
import DashboardCharts from './DashboardCharts'

const AnalyticsComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        listEmployees()
            .then((response) => {

                setEmployees(response.data)

            }).catch(error => {

                console.log(error)

            })

    }, [])

    return (

        <div className='container mt-5'>

            <h2 className='text-center mb-4'>
                Employee Analytics Dashboard
            </h2>

            <DashboardCharts employees={employees} />

        </div>
    )
}

export default AnalyticsComponent