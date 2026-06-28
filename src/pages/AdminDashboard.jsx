import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import "../styles/AdminDashboard.css";

function AdminDashboard() {

    const navigate = useNavigate();

    const [students, setStudents] = useState([]);
    const [events, setEvents] = useState([]);
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try {

            const users = await API.get("/admin/users");
            const eventData = await API.get("/events");
            const registrationData = await API.get("/registrations");

            setStudents(users.data);
            setEvents(eventData.data);
            setRegistrations(registrationData.data);

        }
        catch(error){

            console.log(error);

        }

    };

    const totalRevenue = registrations.reduce(
        (sum,item)=>sum+(item.finalAmount || 0),0
    );

    const logout=()=>{

        localStorage.removeItem("admin");
        localStorage.removeItem("adminToken");

        navigate("/admin-login");

    }

    return(

        <div className="admin-container">

            {/* Sidebar */}

            <div className="sidebar">

                <h2>Admin Panel</h2>

                <ul>

                    <li>
                        <Link to="/admin-dashboard">
                            📊 Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link to="/add-event">
                            ➕ Add Event
                        </Link>
                    </li>

                    <li>
                        <Link to="/manage-events">
                            📅 Manage Events
                        </Link>
                    </li>

                    <li>
                        <Link to="/registered-students">
                            👨‍🎓 Students
                        </Link>
                    </li>

                    <li>

                        <button
                        className="btn btn-danger mt-3 w-100"
                        onClick={logout}
                        >
                            Logout
                        </button>

                    </li>

                </ul>

            </div>

            {/* Main Content */}

            <div className="main-content">

                <h2 className="mb-4">
                    Campus Event Management Dashboard
                </h2>

                {/* Cards */}

                <div className="cards">

                    <div className="dashboard-card">

                        <h3>👨‍🎓 Students</h3>

                        <h1>{students.length}</h1>

                    </div>

                    <div className="dashboard-card">

                        <h3>📅 Events</h3>

                        <h1>{events.length}</h1>

                    </div>

                    <div className="dashboard-card">

                        <h3>📝 Registrations</h3>

                        <h1>{registrations.length}</h1>

                    </div>

                    <div className="dashboard-card">

                        <h3>💰 Revenue</h3>

                        <h1>₹{totalRevenue}</h1>

                    </div>

                </div>

                {/* Quick Actions */}

                <div className="action-buttons">

                    <Link
                    to="/add-event"
                    className="btn btn-primary"
                    >
                        Add Event
                    </Link>

                    <Link
                    to="/manage-events"
                    className="btn btn-success"
                    >
                        Manage Events
                    </Link>

                    <Link
                    to="/registered-students"
                    className="btn btn-warning"
                    >
                        Students
                    </Link>

                </div>

                {/* Table */}

                <div className="table-card">

                    <h3 className="mb-4">
                        Recent Registrations
                    </h3>

                    <table className="table table-striped">

                        <thead>

                            <tr>

                                <th>Name</th>

                                <th>College</th>

                                <th>Amount</th>

                                <th>Discount</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                registrations.map((item)=>(

                                    <tr key={item._id}>

                                        <td>
                                            {item.userId?.name}
                                        </td>

                                        <td>
                                            {item.userId?.college}
                                        </td>

                                        <td>
                                            ₹{item.finalAmount}
                                        </td>

                                        <td>
                                            ₹{item.discount}
                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;