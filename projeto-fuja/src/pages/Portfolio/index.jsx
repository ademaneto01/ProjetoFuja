import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Portfolio() {
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
            <button id="btn2">Assistir vídeo</button>
          </div>
        </div>
      </div>


    </div>
    <Footer/>
    </div>
     
  );
}


