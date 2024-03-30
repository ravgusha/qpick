import { Link } from 'react-router-dom';
import Logo from '../Logo';

import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer_nav">
        <div className="column">
          <Link to="/">Избранное</Link>
          <Link to="/">Корзина</Link>
          <Link to="/">Контакты</Link>
        </div>
        <div className="column">
        <Link to="/">Условия сервиса</Link>
          <div className="footer_lang">
            <i className="lang-icon"></i>
            <button>Рус</button>
            <button>Eng</button>
          </div>
        </div>
      </div>
      <div className="footer_links">
        <a
          className="footer-social vk"
          href="https://vk.com/neoflex_ru"
          target="_blank"
          rel="noreferrer"
        >
        </a>
        <a
          className="footer-social telegram"
          href="https://t.me/neoflexcareers"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
        </a>
        <a
          className="footer-social whats"
          href="https://whatsapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
