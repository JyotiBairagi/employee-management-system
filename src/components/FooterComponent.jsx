import React from 'react'

const FooterComponent = () => {

    return (

        <div>

            <footer
                className='text-white text-center text-lg-start mt-5'
                style={{
                    background: 'linear-gradient(to right, #141e30, #243b55)'
                }}
            >

                <div className='container p-4'>

                    <div className='row'>

                        <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>

                            <h5 className='text-uppercase fw-bold'>
                                Employee Management System
                            </h5>

                            <p>
                                A modern employee management portal built using
                                React, Spring Boot, Bootstrap, and MySQL.
                            </p>

                        </div>

                        <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>

                            <h5 className='text-uppercase fw-bold'>
                                Quick Links
                            </h5>

                            <ul className='list-unstyled mb-0'>

                                <li>
                                    <a
                                        href='/employees'
                                        className='text-white text-decoration-none'
                                    >
                                        Dashboard
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href='/add-employee'
                                        className='text-white text-decoration-none'
                                    >
                                        Add Employee
                                    </a>
                                </li>

                            </ul>

                        </div>

                        <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>

                            <h5 className='text-uppercase fw-bold'>
                                Technologies
                            </h5>

                            <ul className='list-unstyled'>

                                <li>React JS</li>
                                <li>Spring Boot</li>
                                <li>Bootstrap</li>
                                <li>MySQL</li>

                            </ul>

                        </div>

                    </div>

                </div>

                <div
                    className='text-center p-3'
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.2)'
                    }}
                >

                    © 2026 Employee Management System | Developed by Jyoti Bairagi

                </div>

            </footer>

        </div>
    )
}

export default FooterComponent