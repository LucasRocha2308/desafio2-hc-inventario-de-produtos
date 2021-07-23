import { useHistory } from "react-router";
import "./styles.css";
const End = () => {
  const history = useHistory();

  const voltarCompra = () => {
    localStorage.clear();

    history.push("/");
    window.location.reload();
  };

  return (
    <div className="caixaEnd">
      <div>
        <span>Compra finalizada</span>
      </div>
      <button onClick={voltarCompra}>voltar a comprar</button>
    </div>
  );
};

export default End;
