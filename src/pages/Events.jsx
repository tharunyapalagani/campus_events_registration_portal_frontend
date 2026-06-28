import { useEffect, useState } from "react";
import API from "../api";

function Events() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await API.get("/events");
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const registerEvent = async (eventId) => {
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/registrations",
        { eventId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Event Registered Successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-5">
        Campus Events
      </h1>

      <div className="row g-4">

        {events.map((event) => (

          <div className="col-md-4" key={event._id}>

            <div className="card shadow h-100 p-3">

              <img
                src={event.image}
                className="card-img-top"
                alt={event.eventName}
                style={{ height: "180px", objectFit: "cover" }}
              />

              <div className="card-body">

                <h4>{event.eventName}</h4>

                <p>{event.description}</p>

                <p>📍 {event.venue}</p>

                <p>📅 {new Date(event.date).toDateString()}</p>

                <p>
                  <del className="text-danger">₹{event.price}</del>
                </p>

                <h5 className="text-success">
                  ₹{event.discountPrice}
                </h5>

                <button
                  className="btn btn-primary w-100"
                  onClick={() => registerEvent(event._id)}
                >
                  Register Now
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Events;