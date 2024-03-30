import './style.scss';

interface IItem {
  img: string;
  title: string;
  price: string;
  rate: string;
}

const CartItem = ({ img, price, title, rate }: IItem) => {
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
          <button className="increment-btn">&#8722;</button>
          <div className="counter-value">1</div>
          <button className="decrement-btn">+</button>
        </div>
        <p className="cart-item_sum">2927 ₽</p>
      </div>
    </div>
  );
};

export default CartItem;
