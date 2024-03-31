import CardList from '../../components/CardList';
import CartItem from '../../components/CartItem';
import Total from '../../components/Total';
import './style.scss';

const wireless = [
  {
    img: require('../../assets/4.png'),
    title: 'Apple AirPods',
    price: '9527',
    rate: '4.7',
    id: 9,
  },
  {
    img: require('../../assets/5.png'),
    title: 'GERLAX GH-04',
    price: '6527',
    rate: '4.5',
    id: 98,
  },
  {
    img: require('../../assets/6.png'),
    title: 'BOROFONE BO4',
    price: '7527',
    rate: '4.7',
    id: 987,
  },
];

const Cart = () => {
  return (
    <div className="cart">
      <p className="cart-header">Корзина</p>
      <div className="cart-container">
        <div className="cart-list">
          <CardList products={wireless} />
        </div>
        <Total />
      </div>
    </div>
  );
};

export default Cart;
