import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordComponent = () => {

    const [newPassword, setNewPassword] = useState("");

    const navigate = useNavigate();

    const email = localStorage.getItem("email");

    const handleResetPassword = (e) => {

        e.preventDefault();

        axios.post(
            "http://localhost:8080/api/admin/reset-password",
            {
                email,
                newPassword
            }
        )
        .then((response) => {

            alert(response.data);

            localStorage.removeItem("email");

            navigate("/login");

        })
        .catch((error) => {

            alert(error.response.data);

        });
    };

    return (

        <div className="container mt-5">

            <div className="card p-4">

                <h3>Reset Password</h3>

                <form onSubmit={handleResetPassword}>

                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Enter New Password"
                        value={newPassword}
                        onChange={(e) =>
                            setNewPassword(e.target.value)
                        }
                    />

                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Update Password
                    </button>

                </form>

            </div>

        </div>
    );
};

export default ResetPasswordComponent;