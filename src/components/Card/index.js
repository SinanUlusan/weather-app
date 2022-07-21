import React from "react";

function Card({ item }) {
  return (
    <div className="card-container">
      <h3>{item.day}</h3>
      <div className="icon">
        <img src={item.icon} alt="icon" />
      </div>
      <div className="temp">
        <span className="dayTemp">{item.dayTemp}&#8451;</span>
      </div>
    </div>
  );
}

export default Card;
