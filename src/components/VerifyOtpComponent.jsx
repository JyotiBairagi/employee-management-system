import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOtpComponent = () => {

    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    const email = localStorage.getItem("email");

    useEffect(() => {
        if (!email) {
            alert("Email missing. Please start forgot password again.");
            navigate("/forgot-password");
        }
    }, [email, navigate]);

    const verifyOtp = (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("OTP:", otp);

        axios.post("http://localhost:8080/api/admin/verify-otp", {
            email,
            otp
        })
        .then(() => {
            alert("OTP Verified Successfully");

            navigate("/reset-password", {
                state: { email }
            });
        })
        .catch((error) => {
            alert(error.response?.data || "OTP verification failed");
        });
    };

    return (
        <div className="container mt-5">

            <h3>Verify OTP</h3>

            <form onSubmit={verifyOtp}>

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />

                <button type="submit" className="btn btn-primary">
                    Verify OTP
                </button>

            </form>

        </div>
    );
};

export default VerifyOtpComponent;