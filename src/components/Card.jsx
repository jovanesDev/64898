/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Count from "./Count";

export default function Card(props) {
  const { titulo, img, descripcion,counter_default } = props;
  console.log(counter_default)
  return (
    <div
      className={"card"}
      style={{ width: "18rem", backgroundColor: titulo ? "#c1c1c1" : "white" }}
    >
      {titulo && <h1 className="text-center">{titulo}</h1>}
      {img && (
        <img
          src={img}
          className={"card-img-top"}
          style={{ height: "200px", objectFit: "cover" }}
          alt={"..."}
        />
      )}
      <div>
        <Count counter_default={counter_default} />
      </div>
      <div className={"card-body"}>
        <p className={"card-text"} style={{ minHeight: "200px" }}>
          {descripcion}
        </p>
        <div className="w-100">
          <button className="btn btn-secondary w-100">Ver Mas !!! </button>
        </div>
      </div>
    </div>
  );
}
