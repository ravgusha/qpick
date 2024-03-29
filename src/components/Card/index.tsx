import './style.scss';

interface IItem {
  img: string;
  title: string;
  price: string;
  rate: string;
}

const Card = ({ img, price, title, rate }: IItem) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={img} alt="" />
      </div>
      <div className="card_description">
        <p className="card_title">{title}</p>
        <p className="card_price">{price} ₽</p>
        <p className="card_rate">{rate}</p>
        <p className="card_buy">Купить</p>
      </div>
    </div>
  );
};

export default Card;
