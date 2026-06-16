
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const HeaderComponent = () => {

    const navigator = useNavigate();

    function logout() {

        localStorage.removeItem("isLoggedIn");

        navigator('/login');
    }

    return (

        <div>

            <header>

                <nav
                    className='navbar navbar-expand-lg navbar-dark shadow'
                    style={{
                        background: 'linear-gradient(to right, #141e30, #243b55)',
                        padding: '15px'
                    }}
                >

                    <div className='container-fluid'>


                        <Link
                            className='navbar-brand fw-bold fs-3'
                            to='/employees'
                        >
                            EMS Portal
                        </Link>

                        <div className='d-flex align-items-center'>

                            <Link
                                to='/employees'
                                className='btn btn-outline-light me-2'
                            >
                                Dashboard
                            </Link>

                            <Link
                                to='/resume-scanner'
                                className='btn btn-outline-info me-2'
                            >
                                Resume Scanner
                            </Link>

                            <button
                                className='btn btn-danger'
                                onClick={logout}
                            >
                                Logout
                            </button>

                        </div>

                    </div>

                </nav>

                <div
                    className='text-center text-white py-4'
                    style={{
                        background: 'linear-gradient(to right, #243b55, #141e30)'
                    }}
                >

                    <h1 className='fw-bold'>
                        Employee Management System
                    </h1>




                    <p className='fs-5'>
                        Manage Employees, Departments, Salaries & Roles Easily
                    </p>

                </div>

            </header>

        </div>
    )
}

export default HeaderComponent