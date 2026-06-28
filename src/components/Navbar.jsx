import { Link } from "react-router-dom";

function Navbar(){

    return(

        <nav className="navbar navbar-expand-lg bg-primary">

            <div className="container">

                <Link 
                className="navbar-brand text-white d-flex align-items-center"
                to="/"
                >

                    <img
                        src="https://img.magnific.com/premium-vector/eagle-fly-eagle-silhouette-eagle-mascot-spreads-wings_1063541-409.jpg?semt=ais_hybrid&w=740&q=80"
                        width="45"
                        height="45"
                        className="me-2"
                        />

                    Campus Events

                </Link>

                <div>
                    <Link 
                    className="text-white mx-3 text-decoration-none"
                    to="/"
                    >
                        Home
                    </Link>


                    <Link
                    className="text-white mx-3 text-decoration-none"
                    to="/events"
                    >
                        Events
                    </Link>


                    <Link
                    className="text-white mx-3 text-decoration-none"
                    to="/login"
                    >
                        Login
                    </Link>

                    <Link
                    className="text-white mx-3 text-decoration-none"
                    to="/signup"
                    >
                        Signup
                    </Link>

                    <Link
                    className="text-white mx-3 text-decoration-none"
                    to="/dashboard"
                    >
                        Dashboard
                    </Link>

                    <Link
                    className="text-white mx-3 text-decoration-none"
                    to="/admin-login"
                    >
                        Admin Login
                    </Link>    

                </div>

            </div>

        </nav>

    )

}


export default Navbar;