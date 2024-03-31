import { Link } from 'react-router-dom';
import Logo from '../Logo';

import './style.scss';
import { useSelector } from 'react-redux';
import { ICard } from '../Card';

export interface IState {
  cartItems: ICard[];
  amount: number;
  total: number;
}

export interface IStore {
  cart: IState;
}

const Header = () => {
  const count = useSelector((state: IStore) => state.cart.amount);

  return (
    <header>
      <div className="header-container">
        <Logo />
        <div className="header-right">
          <button className="btn-favs"></button>
          <Link to="/cart" className="btn-cart">
            {count ? <span className="cart-count">{count}</span> : null}
            <button></button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
