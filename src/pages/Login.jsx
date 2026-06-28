import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";


function Login(){

    const navigate = useNavigate();


    const [data,setData] = useState({

        email:"",
        password:""

    });

    const handleChange = (e)=>{

        setData({

            ...data,

            [e.target.name]:e.target.value

        });

    };

    const login = async()=>{

        try{

            const response = await API.post(
                "/auth/login",
                data
            );

            console.log(response.data);

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data)
            );

            alert("Login successful");

            navigate("/home");
        }
        catch(error){

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Login failed"
            );

        }
    }

    return(

        <div className="d-flex justify-content-center align-items-center vh-100">

            <div className="card p-4 shadow" style={{width:"350px"}}>

                <h2 className="text-center mb-4">
                    Login
                </h2>

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

                <button 
                className="btn btn-success w-100"
                onClick={login}
                >

                    Login

                </button>

            </div>
        </div>

    )

}

export default Login;