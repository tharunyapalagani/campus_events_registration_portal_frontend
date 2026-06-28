import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Dashboard(){

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {

    const savedUser = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (savedUser) {
        setUser(savedUser);
    }

    const fetchRegistrations = async () => {
        try {

            const response = await API.get("/registrations/my", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setRegistrations(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    if (token) {
        fetchRegistrations();
    }

}, []);
    

    return(

        <div className="container mt-5">


            <h1 className="text-center mb-5">
                User Dashboard
            </h1>



            <div className="row g-4">



                <div className="col-md-4">


                    <div className="card shadow p-4 text-center">


                        <h4>
                            👤 Profile
                        </h4>


                        <hr/>


                        {

                        user &&

                        <>

                        <p>
                            Name: {user.name}
                        </p>


                        <p>
                            Email: {user.email}
                        </p>


                        <p>
                            College: {user.college}
                        </p>


                        <p>
                            Branch: {user.branch}
                        </p>


                        </>

                        }



                    </div>


                </div>




                <div className="col-md-4">


                    <div className="card shadow p-4 text-center">


                        <h4>
                            📅 Registered Events
                        </h4>


                        <hr/>


                        <h1 className="text-primary">
                            {registrations.length}
                        </h1>

                        <button
                            className="btn btn-success"
                            onClick={() => navigate("/my-events")}
                        >
                            View Events
                        </button>

                    </div>


                </div>

                <div className="col-md-4">


                    <div className="card shadow p-4 text-center">


                        <h4>
                            🔔 Upcoming Events
                        </h4>


                        <hr/>


                        <h1 className="text-success">
                            0
                        </h1>


                        <button className="btn btn-warning">
                            Explore
                        </button>


                    </div>


                </div>



            </div>



        </div>

    )

}


export default Dashboard;