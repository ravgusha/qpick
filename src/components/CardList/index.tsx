import Card from '../Card';

import './style.scss';

interface ICard {
  img: string;
  title: string;
  price: string;
  rate: string;
}

interface ICardlist {
  elements: ICard[];
}

const CardList = ({ elements }: ICardlist) => {
  return (
    <div className="cardlist">
      <h2>Наушники</h2>
      <div className="card-container">
        {elements.map((element: ICard) => (
          <Card
            img={element.img}
            title={element.title}
            price={element.price}
            rate={element.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
