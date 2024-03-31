import { Link } from 'react-router-dom';

import './style.scss';

const Logo = () => {
  return (
    <Link className="logo" to="/">
      Qpick
    </Link>
  );
};

export default Logo;
