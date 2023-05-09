import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Fromulario";

function App() {
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
    </div>
  );
}

export default App;
