import React from 'react';
import DashboardCharts from './DashboardCharts';
import { Link } from 'react-router-dom';

const DashboardComponent = ({ employees }) => {

    return (

        <div className='container mt-5'>

            <h2 className='text-center mb-4'>
                Employee Analytics Dashboard
            </h2>

            <div className='text-center mb-4'>

                <Link
                    to="/resume-scanner"
                    className='btn btn-primary'
                >
                    Resume Scanner
                </Link>

            </div>

          

            <DashboardCharts employees={employees} />

        </div>
    )
}

export default DashboardComponent;