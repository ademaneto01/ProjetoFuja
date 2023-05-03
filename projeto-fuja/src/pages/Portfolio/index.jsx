import "./styles.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VideosPortfolio from "../../components/VideosPortfolio";
import DepoimentosSection from "../../components/DepoimentosSection";
import WeWorkWithSection from "../../components/WeWorkWithSection";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function BasicModal() {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box id="boxModal">
            <div className="boxTitleModal">
              <div className="titleModal">Serra Grande</div>
              <div className="btnModal" onClick={handleClose}></div>
            </div>
            <div className="boxVideosModal">
              <div className="boxInternoVideoModal">
                <div className="videoModal" id="videoModal1">
                  <div className="btnPlayModal">
                    <div className="iconPlayModal" />
                  </div>
                </div>
                <div className="textVideoModal">Apoio ao Movimento Grauça</div>
              </div>
              <div className="boxInternoVideoModal">
                <div className="videoModal" id="videoModal2">
                  <div className="btnPlayModal">
                    <div className="iconPlayModal"></div>
                  </div>
                </div>
                <div className="textVideoModal">
                  Intervenção em uma praça de Uruçuca
                </div>
              </div>
              <div className="boxInternoVideoModal">
                <div className="videoModal" id="videoModal3">
                  <div className="btnPlayModal">
                    <div className="iconPlayModal"></div>
                  </div>
                </div>
                <div className="textVideoModal">Conscientização ambiental</div>
              </div>
              <div className="boxInternoVideoModal">
                <div className="videoModal" id="videoModal4">
                  <div className="btnPlayModal">
                    <div className="iconPlayModal"></div>
                  </div>
                </div>
                <div className="textVideoModal">
                  Feira de sábado em Serra Grande
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    );
  }

  return (
    <div className="containerPortfolioFull">
      <Header />
      <div className="containerPortolio">
        <div className="boxImgPortolio"></div>
        <div className="boxInfosPortfolioInicial">
          <div className="boxTextIni">
            <div className="boxTitle">
              <div>
                <p>Portfólio do Fuja</p>
              </div>
            </div>

            <div className="boxTxt">
              <p>
                Como parte fundamental dos valores do Fuja, a participação
                intensa na comunidade local é um dos destaques das produções já
                realizadas pela empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <VideosPortfolio handleOpen={handleOpen} />
      <div className="containerTime">
        <div className="ContainerTitleTime">
          <div className="boxTitleTime">
            <div>
              <p>O time do Fuja</p>
            </div>
          </div>
        </div>
        <div className="boxPicturesTime">
          <div className="boxPicture">
            <div className="pictureTimeMi pictureTime"></div>
            <div className="nameTime">Fred Becker</div>
            <div className="textTime">
              <p>
                Engenheiro de materiais e produtor audiovisual, é o responsável
                no Fuja pela gravação, edição e todo processo de arranjo de
                produção.{" "}
              </p>
            </div>
          </div>
          <div className="boxPicture">
            <div className="pictureTimePrimo pictureTime"></div>
            <div className="nameTime">Rafael Juan</div>
            <div className="textTime">
              Turismólogo de formação, é a mente por trás da direção e arte dos
              conteúdos do Fuja. Atua também construindo a conexão entre o Fuja
              e os projetos de sustentabilidade e responsabilidade
              socioambiental.
            </div>
          </div>
          <div className="boxPicture">
            <div className="pictureTimeMoreno pictureTime"></div>
            <div className="nameTime">Moreno Becker</div>
            <div className="textTime">
              Formado em administração e mestre em Políticas Públicas, é o
              responsável pela gestão e atividades administrativas do Fuja.
            </div>
          </div>
        </div>
      </div>
      <DepoimentosSection />
      <WeWorkWithSection />
      <div id="modalPortfolio">
        <div className="boxModal"></div>
      </div>
      <BasicModal />
      <Footer />
    </div>
  );
}
