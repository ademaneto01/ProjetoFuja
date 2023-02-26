import "./styles.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return(
  <header className="header">
    <nav>
      <img src="/img/menu.png" alt="simbolo de menu" className="menu-icon" />
    </nav>

   
      <img src="/img/logoFuja.svg" onClick={()=> {navigate("/")}} alt="logoFuja" className="logo-icon" />
   

    <button onClick={() => {navigate("/contact")}}>Contrate o Fuja</button>
  </header>
  );
}

export default Header;
