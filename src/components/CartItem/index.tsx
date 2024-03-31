import { useDispatch } from 'react-redux';
import { updateCartAmount } from '../../cartSlice';
import './style.scss';

interface IItem {
  img: string;
  title: string;
  price: string;
  rate: string;
  id: number;
  amount?: number;
}

const CartItem = ({ img, price, title, id, amount }: IItem) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="card-item_block">
        <div className="cart-item_image">
          <img src={img} alt="" />
        </div>
        <div className="cart-item_info">
          <p className="cart-item_title">{title}</p>
          <p className="cart-item_price">{price} ₽</p>
        </div>
      </div>

      <div className="card-item_block bottom">
        <div className="counter">
          <button
            className="increment-btn"
            disabled={amount === 1}
            onClick={() =>
              dispatch(updateCartAmount({ id: id, type: 'decrement' }))
            }
          >
            &#8722;
          </button>
          <div className="counter-value">{amount}</div>
          <button
            className="decrement-btn"
            onClick={() =>
              dispatch(updateCartAmount({ id: id, type: 'increment' }))
            }
          >
            +
          </button>
        </div>
        <p className="cart-item_sum">2927 ₽</p>
      </div>
    </div>
  );
};

export default CartItem;
