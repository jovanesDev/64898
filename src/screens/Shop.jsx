import Card from "../components/Card";
import { jugadores } from "../content/jugadores.info";
const Shop = () => {

  jugadores

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {jugadores.map((jugador, index) => (
        <Card key={index} {...jugador} />
      ))}
    </div>
  );
};

export default Shop;
