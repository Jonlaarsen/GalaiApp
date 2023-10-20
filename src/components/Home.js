import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="Home-container">
        <div className="top">
          <img
            className="front-img"
            src="./images/galai-logo.jpeg"
            alt="galai-logo"
          />
        </div>
        <div className="button-container">
          <button className="button">
            <Link to="Boka-bord">BOKA BORD</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
