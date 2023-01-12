import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <div className="mainVideo">
        <h1>Sua produção audiovisual fora do convencional</h1>
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
      <Footer />
    </div>
  );
}

export default App;
