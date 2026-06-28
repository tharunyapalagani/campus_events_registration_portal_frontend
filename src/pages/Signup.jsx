import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Signup(){

    const navigate = useNavigate();

    const [user,setUser] = useState({

        name:"",
        email:"",
        password:"",
        college:"",
        collegeId:"",
        branch:""

    });

    const handleChange = (e)=>{

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const signup = async()=>{

        try{
            const response = await API.post(
                "/auth/signup",
                user
            );
            console.log(response.data);

            alert("Signup successful");

            navigate("/login");
        }
        catch (error) {
            console.log("Full Error:", error);
            console.log("Response:", error.response);

            alert(error.response?.data?.message || error.message);
            }
    }

    return(

        <div className="d-flex justify-content-center align-items-center vh-100">

            <div className="card p-4 shadow" style={{width:"350px"}}>

                <h2 className="text-center mb-4">
                    Create Account
                </h2>

                <input
                className="form-control mb-3"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                />

                <input
                className="form-control mb-3"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                />

                <input
                className="form-control mb-3"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                />

                <input
                className="form-control mb-3"
                name="college"
                placeholder="College"
                onChange={handleChange}
                />

                <input
                className="form-control mb-3"
                name="collegeId"
                placeholder="College ID"
                onChange={handleChange}
                />

                <input
                className="form-control mb-3"
                name="branch"
                placeholder="Branch"
                onChange={handleChange}
                />

                <button 
                className="btn btn-primary w-100"
                onClick={signup}
                >
                    Signup

                </button>

            </div>

        </div>

    )

}

export default Signup;