import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../Logo';
import { IStore } from '../../types';

import './style.scss';

const Header = () => {
  const count = useSelector((state: IStore) => state.cart.amount);

  return (
    <header className="header">
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
