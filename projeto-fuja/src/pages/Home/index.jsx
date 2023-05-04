import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import CarouselSection from "../../components/carouselSection";
import VideosFujaSection from "../../components/VideosFujaSection";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const video = document.getElementById("mainVideo");
    video.play();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="screamVideo">
        <video
          id="mainVideo"
          src="/img/video-fuja-home.mp4"
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div id="boxTextVideoPrincipal">
          <h1>
            Sua produção audiovisual <br></br>fora do convencional
          </h1>
          <p>
            Trabalhando de forma leve e autêntica, o Fuja une criatividade e
            tecnologia como forma de dar protagonismo às suas produções
          </p>

          <div>
            <a href="https://www.youtube.com/@FUJAbr/videos" target="_blank">
              <img src="/img/social-icons/youtube.svg" alt="youtube" />
            </a>
            <a
              href="https://instagram.com/fujabr?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <img src="/img/social-icons/insta.svg" alt="insta" />
            </a>
            <a href=" https://www.tiktok.com/@fuja_br" target="_blank">
              <img src="/img/social-icons/tiktok.svg" alt="tiktok" />
            </a>
            <a href="https://www.facebook.com/fujabr/" target="_blank">
              <img src="/img/social-icons/face.svg" alt="face" />
            </a>
          </div>
        </div>
      </div>
      <CarouselSection />
      <VideosFujaSection />

      <div className="containerProducts">
        {!isMobile ? (
          <div className="headerProducts">
            <div>
              <p>Deixe o Fuja destacar o seu projeto através de</p>
            </div>
            <div>
              <p>produções audiovisuais profissionais</p>
            </div>
          </div>
        ) : (
          <div className="headerProducts">
            <div>
              <p>Deixe o Fuja destacar o seu</p>
            </div>
            <div>
              <p>projeto através de produções</p>
            </div>
            <div>
              <p>audiovisuais profissionais</p>
            </div>
          </div>
        )}

        <div className="containerBolProducts">
          <div className="boxProducts">
            <img
              className="bolProdutcs"
              src="/img/trabalhos/trabalho1.svg"
              alt=""
            />
            <div className="txtProduct">fotos e vídeos em alta resolução</div>
          </div>

          <div className="boxProducts">
            <img
              className="bolProdutcs"
              src="/img/trabalhos/trabalho2.svg"
              alt=""
            />
            <div className="txtProduct">
              tomadas aéreas com drone profissional
            </div>
          </div>

          <div className="boxProducts">
            <img
              className="bolProdutcs"
              src="/img/trabalhos/trabalho3.svg"
              alt=""
            />
            <div className="txtProduct">Vídeo Clip</div>
          </div>

          <div className="boxProducts">
            <img
              className="bolProdutcs"
              src="/img/trabalhos/trabalho4.svg"
              alt=""
            />
            <div className="txtProduct">Produções audiovisuais completas</div>
          </div>

          <div className="boxProducts">
            <img
              className="bolProdutcs"
              src="/img/trabalhos/trabalho5.svg"
              alt=""
            />
            <div className="txtProduct">Divulgação nas redes sociais</div>
          </div>
        </div>
        <button
          id="btnContrate"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contrate o Fuja
        </button>
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
