import "./styles.css";
const Header = () => (
  <header className="header">
    <nav>
      <img src="/img/menu.png" alt="simbolo de menu" className="menu-icon" />
    </nav>

    <a href="/">
      <img src="/img/logoFuja.svg" alt="logoFuja" className="logo-icon" />
    </a>

    <button>Contrate o Fuja</button>
  </header>
);

export default Header;
