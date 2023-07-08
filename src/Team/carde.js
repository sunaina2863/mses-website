import React from "react";
import "./team.css";
const CardsE = ({ name, designation, url }) => {
  return (
    <>
      <div className="col-sm text-center">
        <div className="card border-support text-center team-support-2">
          <div className="card bg-black team-support-2">
            <img class="card-img-top" src={url} alt="Card" />
            <div
              className="card-body text-center"
              style={{ background: "linear-gradient(#e74c3c,#000000)" }}
            >
              <p className="card-text">{name}</p>
              <span> {designation}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsE;