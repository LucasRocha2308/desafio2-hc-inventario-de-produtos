import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./styles.css";
const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="containerHeader">
      <h2>Game Shop- Jogos de Tabuleiro</h2>

      <div className="caixaHeader">
        <Link to="/cart">
          {cart.length}
          <TiShoppingCart />
          <span>Carrinho</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
