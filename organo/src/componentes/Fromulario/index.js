import CampoTexto from "../CampoTexto";
import "./Formulario.css";
const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o car do Calaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu Nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem " placeholder="Envie sua imagem" />
      </form>
    </section>
  );
};

export default Formulario;
