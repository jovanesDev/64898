import React from "react";
import image from "../assets/404.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img style={{width:'500px'}} src={image} />
      <div>
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
