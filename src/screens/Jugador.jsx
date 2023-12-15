import JugadorSection from "../components/JugadorSection";
import Count from "../components/Count";
import Spinner from "../components/Spinner";
import useJugador from "../hooks/useJugador";
import Container from "../layout/Container";
import Alert from "../layout/Alert";

const Jugador = () => {
  const { player, loading, navigate } = useJugador();

  if (loading) {
    return <Spinner />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "100px 0",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={player.img} style={{ width: "300px" }} />
      <h1 className="my-3"> {player.titulo}</h1>
      <h5 className="my-2">
        <b>{player.club}</b>
      </h5>
      <Alert text="Ojo!" extraClasses="alert alert-dark" />
      <Container extraClasses={"px-5 bg-danger container-fluid"}>
        {player.info.map((element, index) => (
          <JugadorSection key={index} {...element} />
        ))}
      </Container>
      {/* <div className=" container px-5"></div> */}
      <div>
        <Count counter_default={1} />
      </div>
      <div>
        <button onClick={() => navigate(-1)} className="btn btn-warning btn-lg">
          Volver
        </button>
      </div>
    </div>
  );
};

export default Jugador;
