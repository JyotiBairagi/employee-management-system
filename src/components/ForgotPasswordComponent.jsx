import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ForgotPasswordComponent = () => {

    const [email, setEmail] = useState('')

    const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("EMAIL ENTERED:", email);

    axios.post("http://localhost:8080/api/admin/forgot-password", {
        email
    })
    .then(response => {

        console.log("API SUCCESS");

        localStorage.setItem("email", email);

        console.log("SAVED EMAIL:", localStorage.getItem("email"));

        navigate("/verify-otp");
    })
    .catch(error => {

        console.log("API FAILED:", error);

        alert(error.response?.data || "Error");
    });
};

    return (

        <div className="container mt-5">

            <div className="card p-4">

                <h3>Forgot Password</h3>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <button
                        className="btn btn-primary"
                    >
                        Send OTP
                    </button>

                </form>

            </div>

        </div>
    )
}

export default ForgotPasswordComponent