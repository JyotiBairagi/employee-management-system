import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'

const AttendanceComponent = () => {

    const [employees, setEmployees] = useState([])

    const [attendance, setAttendance] = useState({})

    const totalPresent = Object.values(attendance)
        .filter(status => status === 'Present').length

    const totalAbsent = Object.values(attendance)
        .filter(status => status === 'Absent').length

    const totalLeave = Object.values(attendance)
        .filter(status => status === 'Leave').length

    useEffect(() => {

        fetchEmployees()

    }, [])

    function fetchEmployees() {

        listEmployees()
            .then((response) => {

                setEmployees(response.data)

            })
            .catch(error => {

                console.log(error)

            })
    }

    function handleAttendance(id, status) {

        setAttendance({

            ...attendance,

            [id]: status
        })
    }

    return (

        <div className='container mt-4'>

            <h2 className='text-center mb-4'>
                Employee Attendance
            </h2>

            <div className='row mb-4'>

                <div className='col-md-4'>

                    <div className='card shadow text-center border-0 rounded-4'>

                        <div className='card-body'>

                            <h5>Total Present</h5>

                            <h2 className='text-success'>
                                {totalPresent}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className='col-md-4'>

                    <div className='card shadow text-center border-0 rounded-4'>

                        <div className='card-body'>

                            <h5>Total Absent</h5>

                            <h2 className='text-danger'>
                                {totalAbsent}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className='col-md-4'>

                    <div className='card shadow text-center border-0 rounded-4'>

                        <div className='card-body'>

                            <h5>On Leave</h5>

                            <h2 className='text-warning'>
                                {totalLeave}
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

            <table className='table table-bordered table-hover shadow'>

                <thead className='table-dark'>

                    <tr>

                        <th>Id</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        employees.map(employee =>

                            <tr key={employee.id}>

                                <td>{employee.id}</td>

                                <td>
                                    {employee.firstname} {employee.lastname}
                                </td>

                                <td>{employee.department}</td>

                                <td>

                                    <select
                                        className='form-select'
                                        value={attendance[employee.id] || ''}
                                        onChange={(e) =>
                                            handleAttendance(
                                                employee.id,
                                                e.target.value
                                            )
                                        }
                                    >

                                        <option value=''>
                                            Select
                                        </option>

                                        <option value='Present'>
                                            Present
                                        </option>

                                        <option value='Absent'>
                                            Absent
                                        </option>

                                        <option value='Leave'>
                                            Leave
                                        </option>

                                    </select>

                                </td>

                            </tr>
                        )
                    }

                </tbody>

            </table>

        </div>
    )
}

export default AttendanceComponent