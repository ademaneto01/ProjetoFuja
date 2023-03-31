import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Header />
      <div className="screamVideo">
        <video
          id="mainVideo"
          src="/img/video-fuja-home.mp4"
          width="100%"
          autoPlay
          muted
          loop
        ></video>
        <div id="boxTextVideoPrincipal">
          <h1>
            Sua produção audiovisual <br></br>fora do convencional
          </h1>
          <p>
            Trabalhando de forma leve e autêntica, o Fuja une criatividade e
            tecnologia <br></br> como forma de dar protagonismo às suas
            produções
          </p>
        </div>
      </div>
      <div className="containerCarrousel">
        <div className="infosCarrousel">
          <div className="textCarrousel">
            <div className="headerCarrousel">
              <div className="">
                <p>O Fuja é um estilo de vida.</p>
              </div>
              <div className="headerCarrouselLine2">
                <p>Uma inspiração.</p>
              </div>
              <div className="headerCarrouselLine3">
                <p>É liberdade.</p>
              </div>
            </div>

            <div className="descriptionCarrousel">
              <p>
                Somos uma equipe de produção audiovisual que aborda e comunica
                de forma inovadora conteúdos relacionados ao meio ambiente,
                turismo e cultura.
              </p>

              <p>
                Na produção audiovisual, trabalhamos com todo o processo: desde
                a roteirização, pré-produção e planejamento do conteúdo, além
                das gravações, direção, edição e pós-produção.
              </p>
            </div>
          </div>
          <div className="boxImgCarrousel">
            <div className="infosImgCarrousel" />
            <div className="boxBtnsCarrousel">
              <button className="btn-icon-right">
                <img src="/img/icon.svg" alt="icon" />
              </button>
              <button className="btn-icon-right">
                <img src="/img/icon.svg" alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="screamVideosFuja">
        <div className="boxPrincipalInfosVideos">
          <h1 className="titleVideos">
            O Fuja é jovem, mas já trabalhou e já teve o seu <br></br> conteúdo
            veiculado em vários locais
          </h1>
          <h2 className="subTitleVideos">
            Seja um vídeo de 5 segundos ou um curta-metragem, a equipe do Fuja
            possui os melhores<br></br> equipamentos para a produção de um
            conteúdo objetivo, diferente e engajador.
          </h2>
          <div className="boxVideos">
            <div className="video">
              <iframe
                id="frameVideo"
                src="https://www.youtube.com/embed/5qNuWjvGkqE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                id="frameVideo"
                src="https://www.youtube.com/embed/pQhf-aswL40"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                id="frameVideo"
                src="https://www.youtube.com/embed/j6jLser3orY"
                title="YouTube video player"
                frameBorder="0"
                allow=" clipboard-write; encrypted-media; gyroscope; picture-in-picture;  web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="boxBtnContrate">
          <button
            id="btnPortfolioHome"
            onClick={() => {
              navigate("/portfolio");
            }}
          >
            Veja nosso portfólio completo
          </button>
        </div>
      </div>
      <div className="screamProducts">
        <div className="containerProducts">
          <div className="headerProducts">
            <div>
              <p>Deixe o Fuja destacar o seu projeto através de</p>
            </div>
            <div>
              <p>produções audiovisuais profissionais</p>
            </div>
          </div>

          <div className="containerBolProducts">
            <div id="boxProducts">
              <div className="bolProdutcs"></div>
              <div className="txtProduct">fotos e vídeos em alta resolução</div>
            </div>
            <div id="boxProducts">
              <div className="bolProdutcs"></div>
              <div className="txtProduct">
                tomadas aéreas com drone profissional
              </div>
            </div>
            <div id="boxProducts">
              <div className="bolProdutcs"></div>
              <div className="txtProduct">Vídeo Clip</div>
            </div>
            <div id="boxProducts">
              <div className="bolProdutcs"></div>
              <div className="txtProduct">Produções audiovisuais completas</div>
            </div>
            <div id="boxProducts">
              <div className="bolProdutcs"></div>
              <div className="txtProduct">Divulgação nas redes sociais</div>
            </div>
          </div>
        </div>
        <div className="boxBtnContrate">
          <button
            id="btnContrate"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contrate o Fuja
          </button>
        </div>
      </div>
      <div className="screamPortalAventuras">
        <div className="infosPortal">
          <h1>Portal de aventuras</h1>
          <p>
            O Fuja também possui uma plataforma integrada para conectar
            viajantes à natureza.<br></br>
            São mais de 1700 passeios por todo o Brasil para você sair do
            convencional
          </p>
          <a id="btnPortalAventuras" href="https://www.fuja.com.br">
            Conheça aqui
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
