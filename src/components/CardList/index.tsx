import { useSelector } from 'react-redux';
import Card from '../Card';
import CartItem from '../CartItem';

import './style.scss';
import { IStore } from '../Header';

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
  title?: string;
  type?: string;
}

const CardList = ({ products, title, type }: ICardlist) => {
  const { cartItems } = useSelector((state: IStore) => state.cart);

  if (type === 'catalog') {
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
  } else {
    return (
      <div>
        {cartItems.map((product: ICard) => (
          <CartItem
            id={product.id}
            key={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            rate={product.rate}
            amount={product.amount}
          />
        ))}
      </div>
    );
  }
};

export default CardList;
