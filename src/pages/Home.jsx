import { useNavigate } from "react-router-dom";
function Home(){

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    return(

        <>

        {/* Carousel */}

        <div 
        id="eventCarousel" 
        className="carousel slide"
        data-bs-ride="carousel"
        >

            <div className="carousel-inner">


                <div className="carousel-item active">

                    <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                    className="d-block w-100"
                    style={{height:"450px", objectFit:"cover"}}
                    />

                    <div className="carousel-caption">
                        <h2>Campus Events</h2>
                        <p>Participate and create memories</p>
                    </div>

                </div>

                <div className="carousel-item">

                    <img
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
                    className="d-block w-100"
                    style={{height:"450px", objectFit:"cover"}}
                    />

                    <div className="carousel-caption">
                        <h2>Tech Fests</h2>
                        <p>Show your skills and innovation</p>
                    </div>

                </div>

                <div className="carousel-item">

                    <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                    className="d-block w-100"
                    style={{height:"450px", objectFit:"cover"}}
                    />

                    <div className="carousel-caption">
                        <h2>Cultural Events</h2>
                        <p>Celebrate talent and creativity</p>
                    </div>

                </div>


            </div>

            <button 
            className="carousel-control-prev"
            type="button"
            data-bs-target="#eventCarousel"
            data-bs-slide="prev"
            >

                <span className="carousel-control-prev-icon"></span>

            </button>

            <button 
            className="carousel-control-next"
            type="button"
            data-bs-target="#eventCarousel"
            data-bs-slide="next"
            >

                <span className="carousel-control-next-icon"></span>

            </button>

        </div>

        {/* Welcome Section */}

        <div className="container text-center mt-5">

            <h1 className="fw-bold">
                Welcome to Campus Events
            </h1>

            <p className="lead">
                Discover, register and participate in exciting campus activities.
            </p>

            <button
                className="btn btn-primary"
                onClick={() => navigate("/events")}
                >
                Explore Events
            </button>
        </div>

        {/* Footer */}

        <footer className="bg-dark text-white text-center mt-5 p-3">

            <h5>
                Campus Event Portal
            </h5>

            <p className="mb-0">
                © 2026 Campus Events. All Rights Reserved.
            </p>

        </footer>


        </>

    )

}

export default Home;