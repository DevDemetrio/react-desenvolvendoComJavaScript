import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
const Formulario = () => {
  const times = [
    "Programação",
    "Fornt-end",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o car do Calaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu Nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem " placeholder="Envie sua imagem" />

        <ListaSuspensa label="time" itens={times}/>
      </form>
    </section>
  );
};

export default Formulario;
