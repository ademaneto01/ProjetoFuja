import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import CarouselSection from "../../components/carouselSection";

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
            Trabalhando de forma leve e autêntica, o Fuja une criatividade e{" "}
            <br />
            tecnologia como forma de dar protagonismo às suas produções
          </p>

          <div>
            <a href="https://www.youtube.com/">
              <img src="/img/social-icons/youtube.svg" alt="youtube" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/img/social-icons/insta.svg" alt="insta" />
            </a>
            <a href="https://www.tiktok.com/">
              <img src="/img/social-icons/tiktok.svg" alt="tiktok" />
            </a>
            <a href="https://www.facebook.com/">
              <img src="/img/social-icons/face.svg" alt="face" />
            </a>
          </div>
        </div>
      </div>
      <CarouselSection />

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
              <img
                className="bolProdutcs"
                src="/img/trabalhos/trabalho1.svg"
                alt=""
              />
              <div className="txtProduct">fotos e vídeos em alta resolução</div>
            </div>

            <div id="boxProducts">
              <img
                className="bolProdutcs"
                src="/img/trabalhos/trabalho2.svg"
                alt=""
              />
              <div className="txtProduct">
                tomadas aéreas com drone profissional
              </div>
            </div>

            <div id="boxProducts">
              <img
                className="bolProdutcs"
                src="/img/trabalhos/trabalho3.svg"
                alt=""
              />
              <div className="txtProduct">Vídeo Clip</div>
            </div>

            <div id="boxProducts">
              <img
                className="bolProdutcs"
                src="/img/trabalhos/trabalho4.svg"
                alt=""
              />
              <div className="txtProduct">Produções audiovisuais completas</div>
            </div>

            <div id="boxProducts">
              <img
                className="bolProdutcs"
                src="/img/trabalhos/trabalho5.svg"
                alt=""
              />
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
            O Fuja também possui uma <strong>plataforma integrada</strong> para
            conectar viajantes à natureza.<br></br>
            São mais de <strong>1700 passeios por todo o Brasil</strong> para
            você sair do convencional
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
