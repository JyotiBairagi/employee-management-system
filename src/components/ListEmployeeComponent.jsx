import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
import DashboardCharts from './DashboardCharts'

import { toast } from 'react-toastify'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const [totalEmployees, setTotalEmployees] = useState(0)
    const [highestSalary, setHighestSalary] = useState(0)
    const [totalDepartments, setTotalDepartments] = useState(0)

    const [search, setSearch] = useState('')
    const [selectedDepartment, setSelectedDepartment] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const employeesPerPage = 5

    const navigator = useNavigate();

    const indexOfLastEmployee = currentPage * employeesPerPage

    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage

    useEffect(() => {

        getAllEmployees();

    }, [])

    function getAllEmployees() {

        setLoading(true)

        listEmployees()
            .then((response) => {

                setEmployees(response.data)

                setTotalEmployees(response.data.length)

                const salaries = response.data.map(emp => emp.salary || 0)

                setHighestSalary(Math.max(...salaries))

                const departments = new Set(
                    response.data.map(emp => emp.department)
                )

                setTotalDepartments(departments.size)
                setLoading(false)


            }).catch(error => {

                console.log(error)
                setLoading(false)

            })
    }

    function addNewEmployee() {

        navigator('/add-employee')
    }

    function updateEmployee(id) {

        navigator(`/update-employee/${id}`)
    }

    function removeEmployee(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        )

        if (confirmDelete) {

            deleteEmployee(id)
                .then((response) => {

                    toast.success("Employee Deleted Successfully")

                    getAllEmployees();

                }).catch(error => {

                    console.log(error);

                })
        }
    }

    const filteredEmployees = employees.filter(employee =>

        (
            (employee.firstname || '').toLowerCase().includes(search.toLowerCase()) ||

            (employee.lastname || '').toLowerCase().includes(search.toLowerCase())
        )

        &&

        (
            selectedDepartment === '' ||

            employee.department === selectedDepartment
        )

    )

    const currentEmployees = filteredEmployees.slice(
        indexOfFirstEmployee,
        indexOfLastEmployee
    )

    const totalPages = Math.ceil(
        filteredEmployees.length / employeesPerPage
    )
    return (

        <div className='container'>

            <h2 className='text-center'>List of Employees</h2>

            <div className='row mb-4 mt-4'>

                <div className='col-md-4'>

                    <div className='card text-center shadow'>

                        <div className='card-body'>

                            <h5>Total Employees</h5>

                            <h3>{totalEmployees}</h3>

                        </div>

                    </div>

                </div>

                <div className='col-md-4'>

                    <div className='card text-center shadow'>

                        <div className='card-body'>

                            <h5>Total Departments</h5>

                            <h3>{totalDepartments}</h3>

                        </div>

                    </div>

                </div>

                <div className='col-md-4'>

                    <div className='card text-center shadow border-0 rounded-4'>

                        <div className='card-body'>

                            <h5>Highest Salary</h5>

                            <h3>₹ {highestSalary}</h3>

                        </div>

                    </div>

                </div>

            </div>

            <div className='row mb-3'>

                <div className='row mb-3'>

                    <div className='col-md-4'>

                        <select
                            className='form-select'
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                        >

                            <option value=''>All Departments</option>

                            <option value='IT'>IT</option>

                            <option value='HR'>HR</option>

                            <option value='Sales'>Sales</option>

                            <option value='Developer'>Developer</option>

                        </select>

                    </div>

                </div>

                <div className='col-md-6'>

                    <button
                        className='btn btn-success fw-bold'
                        onClick={addNewEmployee}
                    >
                        Add Employee
                    </button>

                </div>

                <div className='col-md-6'>

                    <input
                        type='text'
                        placeholder='Search Employee'
                        className='form-control'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

            </div>

            {
                loading &&

                <div className='text-center mt-5'>

                    <div className='spinner-border text-primary' role='status'>
                    </div>

                    <p className='mt-3'>Loading Employees...</p>

                </div>
            }
            {
                !loading &&

                <>

                    <table className='table table-hover table-bordered shadow'>

                        <thead className='table-dark'>

                            <tr>

                                <th>Id</th>
                                <th>Image</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Department</th>
                                <th>Salary</th>
                                <th>Role</th>
                                <th>Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                currentEmployees.length === 0 &&

                                <tr>

                                    <td colSpan="9" className='text-center text-danger fw-bold'>

                                        No Employees Found

                                    </td>

                                </tr>
                            }

                            {
                                currentEmployees.map(employee =>

                                    <tr key={employee.id}>

                                        <td>{employee.id}</td>

                                        <td>

                                            <img
                                                src={employee.imageUrl}
                                                alt='Employee'
                                                width='60'
                                                height='60'
                                                style={{ borderRadius: '50%' }}
                                            />

                                        </td>

                                        <td>{employee.firstname}</td>

                                        <td>{employee.lastname}</td>

                                        <td>{employee.email}</td>

                                        <td>{employee.department}</td>

                                        <td>{employee.salary}</td>

                                        <td>{employee.role}</td>

                                        <td>

                                            <button
                                                className='btn btn-info'
                                                onClick={() => navigator(`/employee/${employee.id}`)}
                                            >
                                                View
                                            </button>

                                            <button
                                                className='btn btn-warning'
                                                onClick={() => updateEmployee(employee.id)}
                                                style={{ marginLeft: '10px' }}
                                            >
                                                Update
                                            </button>

                                            <button
                                                className='btn btn-danger'
                                                onClick={() => removeEmployee(employee.id)}
                                                style={{ marginLeft: '10px' }}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                )
                            }

                        </tbody>

                    </table>



                </>
            }
            <div className='d-flex justify-content-center mt-4 mb-5'>

                <button
                    className='btn btn-dark me-2'
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>

                <span className='mt-2'>
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    className='btn btn-dark ms-2'
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
                <div className='d-flex gap-3'>

                    <button
                        className='btn btn-primary ms-3'
                        onClick={() => window.location.href = '/analytics'}
                    >
                        Analytics
                    </button>

                    <button
                        className='btn btn-success'
                        onClick={() => window.location.href = '/attendance'}
                    >
                        Attendance
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ListEmployeeComponent
/*import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {

        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees()
            .then((response) => {
                setEmployees(response.data)
            })
            .catch(error => {
                console.log(error)
            })

    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/update-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);

        deleteEmployee(id)
            .then((response) => {
                getAllEmployees();
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='container'>

            <h2 className='text-center'>List of Employees</h2>
            <div className='mb-2 text-start'>
                <button className='btn btn-primary' onClick={addNewEmployee}>
                    Add Employee
                </button>
            </div>

            <table className='table table-striped table-bordered'>

                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>

                    </tr>
                </thead>

                <tbody>

                    {
                        employees.map(employee =>

                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}> Update </button>
                                    <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{ marginLeft:'10px'}}> Delete </button>
                                </td>
                            </tr>

                        )
                    }

                </tbody>

            </table>

        </div>
    )
}

export default ListEmployeeComponent */