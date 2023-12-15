import React from "react";

const JugadorSection = (props) => {
  const { section_name, content } = props;
  if (!section_name || !content) {
    console.log("Olvidaste pasar title y Content");
    return null;
  }
  return (
    <div>
      <h3>{section_name}</h3>
      <p>{content}</p>
    </div>
  );
};

export default JugadorSection;
