import { useState,useEffect } from "react";

const Count = (props) => {
  const {counter_default} = props;
  const [contador, setContador] = useState(1);

  useEffect(() => {
    setContador(counter_default)
    return () => {
      setContador(1)
    }
  }, []) // => 
  




  function sumar(num) {
        setContador(contador + num)
  }

  function restar(num) {
        setContador(contador - num)
  
    }

    // Carga => Se Actualiza => Se Destruye q

  return (
    <div className="d-flex w-100 px-2 my-4 gap-2">
      <button onClick={() => restar(2)}  className="btn btn-secondary btn-sm">Restar</button>
      <h4 className="fs-5 text-center">Condatod : {contador}</h4>
      <button onClick={() => sumar(2)} className="btn btn-secondary btn-sm">Sumar</button>
    </div>
  );
};

export default Count;
