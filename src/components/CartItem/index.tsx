import { useDispatch } from 'react-redux';

import { updateCartAmount } from '../../cartSlice';
import { ICard } from '../../types';

import './style.scss';

const CartItem = ({ img, price, title, id, amount }: ICard) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item_block">
        <div className="cart-item_image">
          <img src={img} alt="" />
        </div>
        <div className="cart-item_info">
          <p className="cart-item_title">{title}</p>
          <p className="cart-item_price">{price} ₽</p>
        </div>
      </div>

      <div className="cart-item_block bottom">
        <div className="counter">
          <button
            className="decrement-btn"
            disabled={amount === 1}
            onClick={() =>
              dispatch(updateCartAmount({ id: id, type: 'decrement' }))
            }
          >
            &#8722;
          </button>
          <div className="counter-value">{amount}</div>
          <button
            className="increment-btn"
            onClick={() =>
              dispatch(updateCartAmount({ id: id, type: 'increment' }))
            }
          >
            +
          </button>
        </div>
        <p className="cart-item_sum">{price} ₽</p>
      </div>
    </div>
  );
};

export default CartItem;
