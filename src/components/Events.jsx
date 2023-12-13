import React, { useEffect, useState } from "react";

const Events = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value)
    setText(value);
  };
  
  useEffect(() => {

    if(text){
        setText(text[text.length - 1])
    }else {
        setText('')
    }
  
    return () => {
      
    }
  }, [text])
  

  return (
    <div style={{ margin: "30px 0" }}>
      <p></p>
      <input onChange={handleChange} type="text" value={text} />

      <div style={{ margin: "20px 0" }}>
        <h1>{text || "Aun No Escribiste Nada !!!"}</h1>
      </div>
    </div>
  );
};

export default Events;
