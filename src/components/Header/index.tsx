import Logo from '../Logo';

import './style.scss';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Logo />
        <div className="header-right">
          <button className="btn-favs"></button>
          <button className="btn-card"></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
