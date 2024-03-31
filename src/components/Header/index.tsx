import { Link } from 'react-router-dom';
import Logo from '../Logo';

import './style.scss';
import { useSelector } from 'react-redux';

const Header = () => {
  const count = useSelector((state) => state.cart.amount)

  return (
    <header>
      <div className="header-container">
        <Logo />
        <div className="header-right">
          <button className="btn-favs"></button>
          <Link to="/cart"  className="btn-cart">
            <span className="cart-count">{count}</span>
            <button></button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
