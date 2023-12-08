import { Fragment } from "react";
import Card from "./components/Card";

const jugadores_de_futbol = [
  {
    titulo: "Kun Agüero",
    img: "https://media.tycsports.com/files/2021/11/20/361649/sergio-aguero_1440x810_wmk.jpg?v=1",
    descripcion:
      "En toda su etapa en el club inglés ganó un total de cinco títulos de liga, seis Copas de la Liga, tres Supercopas de Inglaterra y una Copa FA, además de formar parte de la primera final en la UEFA Champions League de la historia del club en 2021.",
      counter_default:1,
  },
  {
    titulo: "Leo  Messi",
    img: "https://imageio.forbes.com/specials-images/imageserve/6488677701f6c0a18a7d5722/Lionel-Messi-will-not-appear-at-the-2026-World-Cup-/960x0.jpg?format=jpg&width=960",
    descripcion:
      "¿Cuántos títulos de la Champions League ha ganado Messi? Messi ha ganado la Champions League en cuatro ocasiones: 2006, 2009, 2011 y 2015 (todas con el Barcelona).",
      counter_default:5,
  },
  {
    titulo: "Luis Suarez",
    img: "https://www.thesun.co.uk/wp-content/uploads/2016/11/nintchdbpict000278470769-e1478004479444.jpg",
    descripcion:
      "Luis Suárez consiguió el 25° título de su carrera.El 9 tiene un palmares increíble, ya que ganó campeonatos en todos los países donde jugó y solo le quedó la espina en su primera salida con el Groningen.",
      counter_default:10,
  },
];

// const saludar = (name) => {

//   const saludarA = name;

//   alert("Saludos para " + saludarA )

//   return saludarA

//   // borro variable saludarA 
// }

// saludar("pepe")
// saludar("toto")
// saludar("fifi")

function App() {
  return (
    <Fragment>
      <div className="d-flex gap-4 p-5">
        {jugadores_de_futbol.map((jugador, index) => {
          return (
            <Card
              key={index}
              {...jugador}
            />
          );
        })}
      </div>
      <div className="mx-5"></div>
    </Fragment>
  );
}

export default App;
