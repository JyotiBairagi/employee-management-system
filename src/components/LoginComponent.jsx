import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const LoginComponent = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()

    function handleLogin(e) {

        e.preventDefault()

        axios.post(
            "http://localhost:8080/api/admin/login",
            {
                username,
                password
            }
        )
            .then(response => {

                console.log("LOGIN RESPONSE:", response.data);

                localStorage.setItem(
                    "token",
                    response.data
                );

                localStorage.setItem(
                    "isLoggedIn",
                    "true"
                );

                navigate("/employees");
            })
            .catch(error => {

                alert(error.response.data)

            })
    }

    return (

        <div className='container mt-5'>

            <div className='row justify-content-center'>

                <div className='col-md-4'>

                    <div className='card shadow p-4 rounded-4'>

                        <h2 className='text-center mb-3'>
                            HR Admin Portal
                        </h2>

                        <p className='text-center text-muted mb-4'>
                            Employee Management System
                        </p>

                        <form onSubmit={handleLogin}>

                            <div className='mb-3'>

                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Admin Username'
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />

                            </div>

                            <div className='mb-3'>

                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='Admin Password'
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                            </div>

                            <button
                                type='submit'
                                className='btn btn-dark w-100'
                            >
                                Login
                            </button>

                            <p className="text-center mt-3">
                                <a href="/forgot-password">
                                    Forgot Password?
                                </a>
                            </p>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default LoginComponent