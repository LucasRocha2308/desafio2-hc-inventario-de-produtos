import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Product from "../Product";

import "./styles.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();

  const finalizarCompra = () => {
    history.push("/End");
    // window.location.reload();
    // localStorage.clear();
  };

  return (
    <div className="containerCart">
      <h4>Meu carrinho de compras</h4>
      <div className="caixaCart">
        {cart.map((product) => (
          <Product key={product.id} product={product} isRemovable />
        ))}
      </div>
      <div className="valores">
        Total : R$
        {cart
          .reduce((acc, product) => {
            return acc + product.price;
          }, 0)
          .toFixed(2)}
        <Link to="/">
          <button>Voltar as compras</button>
        </Link>
        <button onClick={finalizarCompra}>Finalizar Compra</button>
      </div>
    </div>
  );
};

export default Cart;
