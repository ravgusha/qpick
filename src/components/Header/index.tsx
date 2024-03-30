import { Link } from 'react-router-dom';
import Logo from '../Logo';

import './style.scss';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Logo />
        <div className="header-right">
          <button className="btn-favs"></button>
          <Link to="/cart">
            <button className="btn-card"></button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
