import { useEffect, useState } from "react";

const useCount = (props) => {
  const { counter_default } = props;
  const [contador, setContador] = useState(1);

  useEffect(() => {
    setContador(counter_default);
    return () => {
      setContador(1);
    };
  }, []);

  function sumar(num) {
    setContador(contador + num);
  }

  function restar(num) {
    setContador(contador - num);
  }

  return {
    contador,
    sumar,
    restar
  };
};

export default useCount;
