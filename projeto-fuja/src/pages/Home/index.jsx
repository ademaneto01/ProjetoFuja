import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="screamVideo">
        <video
          id="mainVideo"
          src="/img/teste.mp4"
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
            <h1>
              O Fuja é um estilo de vida.<br></br>Uma inspiração.<br></br> É
              liberdade.
            </h1>
          </div>
          <div className="boxImgCarrousel"></div>
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
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                id="frameVideo"
                src="https://www.youtube.com/embed/pQhf-aswL40"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                id="frameVideo"
                src="https://www.youtube.com/embed/j6jLser3orY"
                title="YouTube video player"
                frameborder="0"
                allow=" clipboard-write; encrypted-media; gyroscope; picture-in-picture;  web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="screamProducts">
        <div className="containerProducts">
          <h1>
            Deixe o Fuja destacar o seu projeto através de<br></br> produções
            audiovisuais profissionais
          </h1>
          <div className="containerBolProducts">
            <div className="boxProducts">
              <div className="bolProdutcs"></div>
              <h3>Drone</h3>
            </div>
            <div className="boxProducts">
              <div className="bolProdutcs"></div>
              <h3>Vídeo</h3>
            </div>
            <div className="boxProducts">
              <div className="bolProdutcs"></div>
              <h3>Fotos</h3>
            </div>
            <div className="boxProducts">
              <div className="bolProdutcs"></div>
              <h3>Produção</h3>
            </div>
            <div className="boxProducts">
              <div className="bolProdutcs"></div>
              <h3>Tanananan</h3>
            </div>
          </div>
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
          <a id="btnPortalAventuras" href="https://www.fuja.com.br/">
            Conheça aqui
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
