import { useDispatch } from 'react-redux';
import './style.scss';
import { addToCart } from '../../cartSlice';


interface ICard {
  img: string;
  title: string;
  price: string;
  rate: string;
  id: number;
}


const Card = ({ img, price, title, rate, id }: ICard) => {
  const dispatch = useDispatch();
  // console.log(product);
  const product = {
    id: id,
    title: title,
    img: img,
    price: price,
    amount: 1,
  };

  return (
    <div className="card">
      <div className="card_image">
        <img src={img} alt="" />
      </div>
      <div className="card_description">
        <p className="card_title">{title}</p>
        <p className="card_price">{price} ₽</p>
        <p className="card_rate">{rate}</p>
        <button
          className="card_buy"
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          Купить
        </button>
      </div>
    </div>
  );
};

export default Card;
