import { useEffect, useState } from "react";
import API from "../api";

function MyEvents() {

    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {

        fetchMyEvents();

    }, []);

    const fetchMyEvents = async () => {

        try {

            const token = localStorage.getItem("token");

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

    return (

        <div className="container mt-5">

            <h2 className="text-center mb-4">
                My Registered Events
            </h2>

            <div className="row">

                {
                    registrations.map((event) => (

                        <div className="col-md-4 mb-4" key={event._id}>

                            <div className="card shadow p-3">

                                <h4>{event.eventId.eventName}</h4>

                                <p>Fee : ₹{event.eventFee}</p>

                                <p>Discount : ₹{event.discount}</p>

                                <h5 className="text-success">
                                    Final Amount : ₹{event.finalAmount}
                                </h5>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    );

}

export default MyEvents;