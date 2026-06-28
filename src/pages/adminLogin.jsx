import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function AdminLogin() {

    const navigate = useNavigate();

    const [admin, setAdmin] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        });
    };

    const login = async () => {

        try {

            const response = await API.post("/admin/login", admin);

            localStorage.setItem("adminToken", response.data.token);
            localStorage.setItem("admin", JSON.stringify(response.data));

            alert("Admin Login Successful");

            navigate("/admin-dashboard");

        }
        catch (error) {

            alert(
                error.response?.data?.message ||
                "Admin Login Failed"
            );

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-4">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            Admin Login
                        </h2>

                        <input
                            className="form-control mb-3"
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />

                        <button
                            className="btn btn-primary w-100"
                            onClick={login}
                        >
                            Login
                        </button>
                        
                        <button
                            className="btn btn-outline-secondary w-100 mt-2"
                            onClick={() => navigate("/")}
                        >
                            Back to Home
                        </button>
                    </div>

                </div>

            </div>

        </div>

    );

}

export default AdminLogin;