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
          width="100%"
          src="/img/teste.mp4"
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
          <h2 className="subtileVideos">
            Seja um vídeo de 5 segundos ou um curta-metragem, a equipe do Fuja
            possui os melhores<br></br> equipamentos para a produção de um
            conteúdo objetivo, diferente e engajador.
          </h2>
          <div className="boxVideos">
            <div className="video"></div>
            <div className="video"></div>
            <div className="video"></div>
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
      <Footer />
    </div>
  );
}

export default App;
