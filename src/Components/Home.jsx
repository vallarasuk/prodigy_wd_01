import React from "react";
import colorConstants from "../Content/Color.json";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: colorConstants.BackgroundColor }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 pt-5">
            <h3 className="display-4 fw-bold text-white text-center mb-4">
              Prodigy InfoTech
            </h3>
            <p className="fs-5 text-muted text-center">
              Providing World Class E-Learning Experience with Real world
              Internships
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
