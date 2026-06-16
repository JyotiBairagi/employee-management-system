import { useState } from "react";
import axios from "axios";

function ResumeUpload() {

    const [file, setFile] = useState(null);
    const [skills, setSkills] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {

        if (!file) {
            alert("Please select a resume");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {

            const response = await axios.post(
                "http://localhost:8080/api/scanner/scan",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setSkills(response.data.skills);

        } catch (error) {
            console.error(error);
            alert("Upload failed");
        }
    };

    return (
        <div>
            <h2>Resume Scanner</h2>

            <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileChange}
            />

            <button onClick={handleUpload}>
                Upload Resume
            </button>

            <h3>Extracted Skills</h3>

            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default ResumeUpload;