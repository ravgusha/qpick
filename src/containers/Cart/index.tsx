import CartItem from '../../components/CartItem';
import Total from '../../components/Total';
import './style.scss';

const Cart = () => {
  return (
    <div className="cart">
      <p className="cart-header">Корзина</p>
      <div className="cart-container">
        <div className="cart-list">
          <CartItem
            key={12340}
            img={require('../../assets/1.png')}
            title={'Apple BYZ S852I'}
            price={'2927'}
            rate={'4.7'}
          />
        </div>
        <Total />
      </div>
    </div>
  );
};

export default Cart;
