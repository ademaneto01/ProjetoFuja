import "./styles.css";
import { useNavigate, useLocation } from "react-router-dom";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Header = () => {
  const location = useLocation();
  const isPortfolioRoute = location.pathname === "/portfolio";

  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);

  function BasicModal() {
    return (
      <div style={{ display: openModal ? "flex" : "none" }} className="modal">
        <div className="btnSvg">
          <img src="/img/iconWhite.svg" onClick={() => setOpenModal(false)} />
        </div>

        <div className="boxNavModal">
          <div
            className="titleModalHeader"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className="titleModalHeader"
            onClick={() => {
              navigate("/portfolio");
            }}
          >
            Portfólio
          </div>
          <div className="titleModalHeader">Portal de aventuras</div>
          <div
            className="titleModalHeader"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contrate o Fuja
          </div>
        </div>
        <div className="containerFooterModal">
          <img className="footerModalImg" src="/img/sitefuja1.svg" alt="" />
          <div className="textModalFooter">
            A sua produção audiovisual fora do convencional
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <header
        className="header"
        style={{ position: openModal ? "absolute" : "fixed" }}
      >
        <nav
          className={isPortfolioRoute ? "buttonsPortfolio" : "buttonsHome"}
          onClick={() => setOpenModal(true)}
        >
          <img
            src="/img/menu.png"
            alt="simbolo de menu"
            className="menu-icon"
          />
        </nav>

        <img
          src="/img/logoFuja.svg"
          onClick={() => {
            navigate("/");
          }}
          alt="logoFuja"
          className={
            isPortfolioRoute
              ? "logo-icon buttonsPortfolio"
              : "logo-icon buttonsHome"
          }
        />

        <button
          className={isPortfolioRoute ? "buttonsPortfolio" : "buttonsHome"}
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contrate o Fuja
        </button>
      </header>
      <BasicModal />
    </>
  );
};

export default Header;
