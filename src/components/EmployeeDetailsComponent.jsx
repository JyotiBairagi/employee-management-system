import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEmployee } from '../services/EmployeeService'

const EmployeeDetailsComponent = () => {

    const { id } = useParams()

    const [employee, setEmployee] = useState({})

    useEffect(() => {

        getEmployee(id)
            .then((response) => {

                setEmployee(response.data)

            }).catch(error => {

                console.log(error)

            })

    }, [id])

    return (

        <div className='container mt-5'>

            <div className='card shadow p-4'>

                <div className='text-center'>

                    <img
                        src={employee.imageUrl}
                        alt='Employee'
                        width='150'
                        height='150'
                        style={{
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                    />

                    <h2 className='mt-3'>
                        {employee.firstname} {employee.lastname}
                    </h2>

                </div>

                <hr />

                <div className='row mt-4'>

                    <div className='col-md-6'>

                        <h5>Email</h5>
                        <p>{employee.email}</p>

                    </div>

                    <div className='col-md-6'>

                        <h5>Department</h5>
                        <p>{employee.department}</p>

                    </div>

                    <div className='col-md-6 mt-3'>

                        <h5>Role</h5>
                        <p>{employee.role}</p>

                    </div>

                    <div className='col-md-6 mt-3'>

                        <h5>Salary</h5>
                        <p>₹ {employee.salary}</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default EmployeeDetailsComponent