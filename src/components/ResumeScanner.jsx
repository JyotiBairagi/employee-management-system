import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ResumeScanner() {

    const [file, setFile] = useState(null);
    const [skills, setSkills] = useState([]);

    const handleUpload = async () => {

        const formData = new FormData();
        formData.append("file", file);

        try {

            const token = localStorage.getItem("token");

            console.log("TOKEN:", token);
            console.log("AUTH HEADER:", `Bearer ${token}`);

            const response = await axios.post(
                "http://localhost:8080/api/scanner/scan",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            const skillArray = response.data.split(",");

            setSkills(skillArray);

        } catch (error) {
            console.error(error);
        }
    };

    return (

        <div className="container mt-5">

            <Link
                to="/employees"
                className="btn btn-secondary mb-3"
            >
                Back to Employees
            </Link>

            <h2 className="mb-4">
                Resume Scanner
            </h2>

            <div className="mb-3">
                <label className="form-label">
                    Select Resume
                </label>

                <input
                    type="file"
                    className="form-control"
                    onChange={(e) => {
                        console.log(e.target.files[0]);
                        setFile(e.target.files[0]);
                    }}
                />
            </div>
            <button
                onClick={handleUpload}
                className="btn btn-primary"
            >
                Scan Resume
            </button>

            <hr />

            <h3>Extracted Skills</h3>

            <div>

                {skills.map((skill, index) => (

                    <span
                        key={index}
                        className="badge bg-primary me-2 mb-2"
                        style={{ fontSize: "16px" }}
                    >
                        {skill}
                    </span>

                ))}

            </div>

            {skills.length > 0 && (

                <div className="mt-3">

                    <h5>
                        Total Skills: {skills.length}
                    </h5>

                </div>

            )}

        </div>
    );
}
export default ResumeScanner;