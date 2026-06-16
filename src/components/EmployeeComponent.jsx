import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EmployeeComponent = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [salary, setSalary] = useState('')
    const [role, setRole] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const { id } = useParams();

    const [errors, setErrorMessage] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const navigator = useNavigate();

    const navigate = useNavigate()

    function logout() {

        localStorage.removeItem('isLoggedIn')

        navigate('/')
    }

    function handleFirstName(event) {
        setFirstName(event.target.value);
    }

    function handleLastName(event) {
        setLastName(event.target.value);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handleDepartment(event) {
        setDepartment(event.target.value);
    }

    function handleSalary(event) {
        setSalary(event.target.value);
    }

    function handleRole(event) {
        setRole(event.target.value);
    }

    useEffect(() => {

        if (id) {
            getEmployee(id)
                .then((response) => {
                    setFirstname(response.data.firstname || '');
                    setLastname(response.data.lastname || '');
                    setEmail(response.data.email || '');
                    setDepartment(response.data.department || '');
                    setSalary(response.data.salary || '');
                    setRole(response.data.role || '');
                    setImageUrl(response.data.imageUrl || '');
                })
                .catch(error => {
                    console.log(error);
                });
        }

    }, [id]);



    function saveOrUpdateEmployee(event) {

        event.preventDefault();

        if (validateForm()) {

            const employee = {
                firstname,
                lastname,
                email,
                department,
                salary,
                role,
                imageUrl
            }

            console.log(employee);

            if (id) {

                updateEmployee(id, employee)
                    .then((response) => {

                        console.log(response.data);

                        toast.success("Employee Updated Successfully")

                        navigator('/employees');

                    }).catch(error => {

                        console.log(error);

                    })

            } else {

                createEmployee(employee)
                    .then((response) => {

                        console.log(response.data);

                        toast.success("Employee Added Successfully")

                        navigator('/employees');

                    }).catch(error => {

                        console.log(error);

                    })

            }

        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = { ...errors };

        if (firstname.trim()) {
            errorsCopy.firstname = '';
        } else {
            errorsCopy.firstname = 'First Name is required';
            valid = false;
        }

        if (lastname.trim()) {
            errorsCopy.lastname = '';
        } else {
            errorsCopy.lastname = 'Last Name is required';
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {

            errorsCopy.email = 'Email is required';
            valid = false;

        } else if (!emailPattern.test(email)) {

            errorsCopy.email = 'Enter valid email';
            valid = false;

        } else {

            errorsCopy.email = '';
        }

        setErrorMessage(errorsCopy);

        return valid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    return (
        <div className='container mt-5'>
            <br /> <br />

            <div className='row justify-content-center'>

                <div className='card w-50 mx-auto p-4 mt-5'>

                    {pageTitle()}


                    <form>

                        <div className='form-group mb-3'>
                            <label className='form-label'>
                                Employee First Name:
                            </label>

                            <input
                                type='text'
                                placeholder='Enter Employee First Name'
                                name='firstName'
                                value={firstname || ''}
                                className={'form-control ' + (errors.firstName ? 'is-invalid' : '')}
                                onChange={(e) => setFirstname(e.target.value)}

                            />
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>
                                Employee Last Name:
                            </label>

                            <input
                                type='text'
                                placeholder='Enter Employee Last Name'
                                name='lastName'
                                value={lastname || ''}
                                className={'form-control ' + (errors.lastName ? 'is-invalid' : '')}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>
                                Employee Email:
                            </label>

                            <input
                                type='text'
                                placeholder='Enter Employee Email'
                                name='email'
                                value={email || ''}
                                className={'form-control ' + (errors.email ? 'is-invalid' : '')}
                                onChange={handleEmail}
                            />
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <div className='form-group mb-3'>

                            <label className='form-label'>
                                Department:
                            </label>

                            <input
                                type='text'
                                placeholder='Enter Department'
                                name='department'
                                value={department || ''}
                                className='form-control'
                                onChange={handleDepartment}
                            />

                        </div>

                        <div className='form-group mb-3'>

                            <label className='form-label'>
                                Salary:
                            </label>

                            <input
                                type='number'
                                placeholder='Enter Salary'
                                name='salary'
                                value={salary || ''}
                                className='form-control'
                                onChange={handleSalary}
                            />

                        </div>

                        <div className='form-group mb-3'>

                            <label className='form-label'>
                                Role:
                            </label>

                            <input
                                type='text'
                                placeholder='Enter Role'
                                name='role'
                                value={role || ''}
                                className='form-control'
                                onChange={handleRole}
                            />

                        </div>

                        <div className='form-group mb-3'>

                            <label className='form-label'>
                                Employee Image URL:
                            </label>

                            <input
                                type='text'
                                placeholder='Enter Employee Image URL'
                                name='imageUrl'
                                value={imageUrl || ''}
                                className='form-control'
                                onChange={(e) => setImageUrl(e.target.value)}
                            />

                        </div>

                        {
                            imageUrl &&

                            <div className='text-center mb-3'>

                                <img
                                    src={imageUrl}
                                    alt='Employee Preview'
                                    style={{
                                        width: '140px',
                                        height: '140px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '4px solid #243b55',
                                        marginTop: '10px'
                                    }}
                                />

                            </div>
                        }

                        <button
                            className='btn btn-success'
                            onClick={saveOrUpdateEmployee}
                        >
                            Submit
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default EmployeeComponent