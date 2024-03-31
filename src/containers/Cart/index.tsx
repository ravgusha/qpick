import { useSelector } from 'react-redux';

import CardList from '../../components/CardList';
import Total from '../../components/Total';
import { IStore } from '../../types';

import './style.scss';

const Cart = () => {
  const { cartItems } = useSelector((state: IStore) => state.cart);

  return (
    <div className="cart">
      <p className="cart-header">Корзина</p>
      <div className="cart-container">
        <div className="cart-list">
          {cartItems && cartItems.length ? (
            <CardList products={cartItems} />
          ) : (
            <p className="empty"> В корзине пока пусто </p>
          )}
        </div>
        <Total />
      </div>
    </div>
  );
};

export default Cart;
