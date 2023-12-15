import useCount from "../hooks/useCount";

const Count = (props) => {
  const { contador, sumar, restar } = useCount(props);
  return (
    <div className="d-flex w-100 px-2 my-4 gap-2">
      <button onClick={() => restar(2)} className="btn btn-secondary btn-sm">
        Restar
      </button>
      <h4 className="fs-5 text-center">Condator : {contador}</h4>
      <button onClick={() => sumar(2)} className="btn btn-secondary btn-sm">
        Sumar
      </button>
    </div>
  );
};

export default Count;
