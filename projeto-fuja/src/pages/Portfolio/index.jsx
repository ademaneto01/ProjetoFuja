import "./styles.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
              <div className="btnModal"  onClick={handleClose}></div>
            </div>
            <div className="boxVideosModal">
              <div className="boxInternoVideoModal"> 
              <div id="videoModal1">
              <div className="btnPlayModal"></div>
              </div>
              <div className="textVideoModal">Apoio ao Movimento
                        Grauça
                </div>
              </div>
              <div className="boxInternoVideoModal"> 
              <div id="videoModal2">
                <div className="btnPlayModal"></div>
              </div>
              <div className="textVideoModal">Intervenção em uma praça de Uruçuca</div>
              </div>
              <div className="boxInternoVideoModal"> 
              <div id="videoModal3">
              <div className="btnPlayModal"></div>
              </div>
              <div className="textVideoModal">Conscientização ambiental</div>
              </div>
              <div className="boxInternoVideoModal"> 
              <div id="videoModal4">
              <div className="btnPlayModal"></div>
              </div>
              <div className="textVideoModal">Feira de sábado em Serra Grande</div>
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
              <p>Portfólio do Fuja</p>
            </div>
            <div className="boxTxt">
              <p>Como parte fundamental dos valores do Fuja, a participação intensa na comunidade local é um dos destaques das produções já realizadas pela empresa.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="boxVideosPortfolio">
        <div className="boxTitleVideos">
          <p>Dentre elas, podemos destacar:</p>
        </div>

        <div className="ContainerMoviePortfolio">
          <div id="boxVideoPortfolioOne"></div>
          <div id="boxInfosVideoPortfolio">
            <div className="txtVideoPortfolio">
              Produção de minissérie de 8 episódios + 1 curta metragem apresentando referências em sustentabilidade no litoral norte da Bahia
            </div>
            <div className="boxBtnVideo">
              <button id="btn1">Assistir minissérie</button>
            </div>
          </div>
        </div>


        <div className="ContainerMoviePortfolio">
          <div id="boxVideoPortfolioTwo"></div>
        <div id="boxInfosVideoPortfolio">
          <div className="txtVideoPortfolio">
            Vídeo roteirizado e produzido para as redes sociais do Fuja contando sobre o sentimento "Saudade e a estrada"
          </div>
          <div className="boxBtnVideo">
            <button id="btn2">Assistir vídeo</button>
          </div>
        </div>
      </div>

      <div className="ContainerMoviePortfolio">
        <div id="boxVideoPortfolioTree"></div>
        <div id="boxInfosVideoPortfolio">
          <div className="txtVideoPortfolio">
            Vídeo institucional de fechamento da Campanha Bosques da Memória da Reserva da Biosfera da Mata Atlântica
          </div>
          <div className="boxBtnVideo">
            <button id="btn2">Assistir vídeo</button>
          </div>
        </div>
      </div>

      <div className="ContainerMoviePortfolio">
        <div id="boxVideoPortfolioFour"></div>
        <div id="boxInfosVideoPortfolio">
          <div className="txtVideoPortfolio">
            Clipe “Do Brasil (Vander Lee)" com a Mariene de Castro e Laura Catarina
          </div>
          <div className="boxBtnVideo">
            <button id="btn1">Assistir vídeoclipe</button>
          </div>
        </div>
      </div>

      <div className="ContainerMoviePortfolio">
        <div id="boxVideoPortfolioFive"></div>
        <div id="boxInfosVideoPortfolio">
          <div className="txtVideoPortfolio">
            Vídeos produzidos na região de Serra Grande a fim de divulgar projetos que acreditamos e pautas que são valores do Fuja
          </div>
          <div className="boxBtnVideo">
            <button id="btn2" onClick={handleOpen}>Assistir vídeos</button>
          </div>
        </div>
      </div>
    </div>
    <div className="containerTime">
      <div className="ContainerTitleTime">
      <div className="boxTitleTime">
              <p>O time do Fuja</p>
      </div>
      </div>
      <div className="boxPicturesTime">
        <div className="boxPicture">
          <div className="pictureTimeMi"></div>
          <div className="nameTime">Fred Becker</div>
          <div className="textTime"><p>Engenheiro de materiais e produtor audiovisual, é o responsável no Fuja pela gravação, edição e todo processo de arranjo de produção. </p></div>
        </div>
        <div className="boxPicture">
          <div className="pictureTimePrimo"></div>
          <div className="nameTime">Rafael Juan</div>
          <div className="textTime">Turismólogo de formação, é a mente por trás da direção e arte dos conteúdos do Fuja. Atua também construindo a conexão entre o Fuja e os projetos de sustentabilidade e responsabilidade socioambiental.</div>
        </div>
        <div className="boxPicture">
          <div className="pictureTimeMoreno"></div>
          <div className="nameTime">Moreno Becker</div>
          <div className="textTime">Formado em administração e mestre em Políticas Públicas, é o responsável pela gestão e atividades administrativas do Fuja.</div>
        </div>
      </div>
    </div>
    <div className="containerDepoimentos">
    <div className="ContainerTitleDepoimento">
              <p>Depoimentos</p>
      </div>
      <div className="containerInfoDepoimentos">
        <div className="boxDepoimentos">
            <div id="textDepoimentos">
            <p>“A equipe do Fuja não só filma, mas vivencia
                a questão ambiental. Trazem imagens não
                só belas, mas emocionantes mesmo.”</p>
              </div>
            <div className="boxNomeDepoimento">
            <div className="nomeDepoimento">Clayton Lino</div>
            <div id="descriDepoimento">
            <p>Presidente da Reserva da Biosfera da Mata Atlântica</p>
            </div>
            </div>
          <div id="pictureDepoimento1"></div>
        </div>
        <div className="boxDepoimentos">
        <div id="textDepoimentos">
            <p>“A live realizada com o Fuja foi linda. 
                Muita gente assistiu e amou!”</p>
              </div>
            <div className="boxNomeDepoimento">
            <div className="nomeDepoimento">Minah Almeida</div>     
            <div id="descriDepoimento">
            <p>Fundação Terra Mirim</p>
            </div>
            </div>
          <div id="pictureDepoimento2"></div>
        </div>
      </div>
    </div>
    <div className="containerParcerias">
       
        <div className="boxImgParcerias">
        <div className="ContainerTitleParcerias">
            <div className="boxTitleParcerias">
              <p>Já trabalhamos com</p>
            </div>
        </div>  
        <div className="containerImgParcerias">
          <div className="imgsParcerias1">
              <div className="imgTop1">

              </div>
              <div className="imgTop2">

              </div>
              <div className="imgTop3">

              </div>
              <div className="imgTop4">

              </div>
              <div className="imgTop5">

              </div>
              <div className="imgTop6">

              </div>
              <div className="imgTop7">

              </div>
          </div>
          <div className="imgsParcerias1">
            <div className="imgBottom1">

            </div>
            <div className="imgBottom2">

            </div>
            <div className="imgBottom3">

            </div>
            <div className="imgBottom4">

            </div>
            <div className="imgBottom5">

            </div>
            <div className="imgBottom6">

            </div>
          </div>
        </div>
        </div>  
    </div>
    <div id="modalPortfolio">
      <div className="boxModal"></div>
    </div>
    <BasicModal/>
    <Footer/>
    </div>
     
  );
}


