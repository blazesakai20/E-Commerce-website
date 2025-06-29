import React from "react";
import '../App.css';
const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png"
            alt="Card"
            height={400}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Welcome to Style Heaven</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              "Ready to upgrade your wardrobe? Discover StyleHaven — your ultimate destination for fashion that fits, flatters, and inspires."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
