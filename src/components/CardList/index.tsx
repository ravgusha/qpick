import Card from '../Card';
import CartItem from '../CartItem';
import { ICard, ICardlist } from '../../types';

import './style.scss';

const CardList = ({ products, title, type }: ICardlist) => {
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
        {products.map((product: ICard) => (
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
