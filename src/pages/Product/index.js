import "./styles.css";

import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, img } = product;

  return (
    <div className="caixa">
      <div className="card">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <p>{name}</p>
        {/* <p>{description}</p> */}
        <h4>R${price}</h4>
        {isRemovable ? (
          <button onClick={() => dispatch(removeFromCartThunk(id))}>
            Remover item
          </button>
        ) : (
          <button onClick={() => dispatch(addToCartThunk(product))}>
            Adicionar item
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
