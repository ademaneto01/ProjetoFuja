import "./styles.css";
import { useNavigate } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = (() => {
    setOpen(true)

  });

  const handleClose = (() => {
    setOpen(false)
    
  });



  function BasicModal() {

  return (
    <div>
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="modalHeader">
          <div className="boxBtnHeader">
          <div className="btnCloseModalHeader" onClick={handleClose}>
            <div className="btnSvg"></div>
          </div>
          </div>
          <div className="boxNavModal">
            <div className="titleModalHeader"  onClick={()=> {navigate("/")}}>Home</div>
            <div className="titleModalHeader"  onClick={()=> {navigate("/portfolio")}}>Portfólio</div>
            <div className="titleModalHeader">Portal de aventuras</div>
            <div className="titleModalHeader"  onClick={()=> {navigate("/contact")}}>Contrate o Fuja</div>
          </div>
          <div className='containerFooterModal'>
                <div className="logoHeader"> </div>
            <div className="textModalFooter">A sua produção audiovisual fora do convencional</div>
        </div>
        </Box>
      </Modal>
    </div>
  );
}

  return(
    <>
  <header className="header" style={{position: open ? 'absolute' : 'fixed'}} >
    <nav onClick={handleOpen}>
     <img src="/img/menu.png" alt="simbolo de menu" className="menu-icon" />
    </nav>

    
      <img src="/img/logoFuja.svg" onClick={()=> {navigate("/")}} alt="logoFuja" className="logo-icon" />
   

    <button onClick={() => {navigate("/contact")}}>Contrate o Fuja</button>
   
  </header>
  <BasicModal/>
  </>
  );
}

export default Header;
