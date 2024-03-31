import Card from '../Card';

import './style.scss';

interface ICard {
  img: string;
  title: string;
  price: string;
  rate: string;
  id: number;
  amount?: number;
}

interface ICardlist {
  products: ICard[];
  title: string;
}

const CardList = ({ products, title }: ICardlist) => {
  return (
    <div className="cardlist">
      <h2 className="cardlist_title">{title}</h2>
      <div className="card-container">
        {products.map((product: ICard) => (
          <Card
            id={product.id}
            key={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            rate={product.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
