import React from "react";
import Pet from "./pet.jsx";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? <h1>No Pets Found</h1> : <h1>Pets FOUND!</h1>}
    </div>
  );
};

export default Results;
