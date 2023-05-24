import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Fromulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-end",
      corPrimaria: "#82cffa",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6d157",
      corSecundaria: "#F0F8e2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06b69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Ux e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAe9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBAD5",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8429",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (coloborador) => {
    setColaboradores([...colaboradores, coloborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(coloborador) =>
          aoNovoColaboradorAdicionado(coloborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
        />
      ))}
    </div>
  );
}

export default App;
