<link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
/>
import React from 'react';

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron text-center">
                <h1 className="display-4">Welcome to Tata Martrade International Logistics Limited</h1>
                <p className="lead">We provide the best logistics solutions for your business.</p>
                <hr className="my-4" />
                <p>Explore our services and get to know how we can help you streamline your logistics operations.</p>
                <a className="btn btn-primary btn-lg" href="#services" role="button">Learn more</a>
            </div>
            <div id="services" className="row text-center">
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Freight Forwarding</h5>
                            <p className="card-text">Efficient and reliable freight forwarding services to ensure your goods reach their destination on time.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Customs Clearance</h5>
                            <p className="card-text">Expert customs clearance services to help you navigate complex regulations and avoid delays.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Warehousing</h5>
                            <p className="card-text">Secure and spacious warehousing solutions to store your goods safely and efficiently.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;