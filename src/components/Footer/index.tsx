import Logo from '../Logo';

import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer_nav">
        <div className="column">
          <p>Избранное</p>
          <p>Корзина</p>
          <p>Контакты</p>
        </div>
        <div className="column">
          <p>Условия сервиса</p>
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
          {' '}
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
