import React, { useEffect, useState } from "react";

const PromiseComponent = (props) => {

  const { handleClicked } =  props

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [selected, setSelected] = useState("audi");

  useEffect(() => {
    //  Cuando el componente Cargo
    if (refresh) {
      const getUsers = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          const data = await response.json();
          setUsers(data);
          setLoading(false);
          console.log(data);
          setRefresh(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
          setRefresh(false);
        }
      };
      getUsers();
    }

    return () => {
      // setUsers([])
      // setRefresh(true)
      // componente se destruyo
    };
  }, [refresh]); // en los corchetes va , de lo que dependera el cambio

  return (
    <>
      <div>
        <h1>Bubbling</h1>
        <div
          onClick={() => console.log("se clickeo 1er div")}
          style={{ padding: "50px", border: "1px solid red" }}
        >
          <div
            onClick={() => console.log("se clickeo 2do div")}
            style={{ padding: "50px", border: "1px solid green" }}
          >
            <div
              onClick={() => console.log("se clickeo 3er div")}
              style={{ padding: "50px", border: "1px solid blue" }}
            >
              <button onClick={(e) => {
                //e.stopPropagation()
                console.log("click en boton ")
                handleClicked()
              } }>
                Click !
              </button>
            </div>
          </div>
        </div>
      </div>

      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value={""}> Seleccionar</option>
        <option value={"fiat"}> FIAT</option>
        <option value={"citroen"}> CITROEN</option>
        <option value={"audi"}> AUDI</option>
      </select>

      {loading && <h1>Cargando...</h1>}
      {!loading && users.length > 0 && (
        <div>
          <h1>PromiseComponent</h1>

          <div>
            <h1>Usuarios</h1>
            <div>
              {users.length > 0 &&
                users.map((user, index) => <h4 key={index}>{user.name}</h4>)}
            </div>
          </div>

          <div>
            <button onClick={() => setRefresh(true)}>Refrescar Info</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PromiseComponent;
