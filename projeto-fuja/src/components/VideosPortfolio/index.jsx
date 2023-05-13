import "./styles.css";

function VideosPortfolio({ handleOpen }) {
  return (
    <div className="boxVideosPortfolio">
      <div className="boxTitleVideos">
        <p>Dentre elas, podemos destacar:</p>
      </div>

      <div className="ContainerMoviePortfolio">
        <div className="boxVideoPortfolio">
          <img className="imgVideoPortfolio" src="img/rec01.svg" alt="" />
        </div>
        <div className="boxInfosVideoPortfolio">
          <div className="txtVideoPortfolio">
            Produção de minissérie de 8 episódios + 1 curta metragem
            apresentando referências em sustentabilidade no litoral norte da
            Bahia
          </div>
          <div className="boxBtnVideo">
            <button
              onClick={() => {
                window.open(
                  "https://www.youtube.com/watch?v=pMemuv46sOc&list=PLID04XLavOGQit9Nuw_LxtLvW1HT0rJjh&index=2&ab_channel=FUJA",
                  "_blank"
                );
              }}
              id="btn1"
            >
              Assistir minissérie
            </button>
          </div>
        </div>
      </div>

      <div className="ContainerMoviePortfolio">
        <div className="boxVideoPortfolio">
          <img className="imgVideoPortfolio" src="img/rec04.svg" alt="" />
        </div>
        <div className="boxInfosVideoPortfolio">
          <div className="txtVideoPortfolio">
            Vídeo roteirizado e produzido para as redes sociais do Fuja contando
            sobre o sentimento "Saudade e a estrada"
          </div>
          <div className="boxBtnVideo">
            <button
              onClick={() => {
                window.open(
                  "https://www.instagram.com/reel/CZ15C2cDhaq/?igshid=YmMyMTA2M2Y=",
                  "_blank"
                );
              }}
              id="btn2"
            >
              Assistir vídeo
            </button>
          </div>
        </div>
      </div>

      <div className="ContainerMoviePortfolio">
        <div className="boxVideoPortfolio">
          <img className="imgVideoPortfolio" src="img/rec3.svg" alt="" />
        </div>
        <div className="boxInfosVideoPortfolio">
          <div className="txtVideoPortfolio">
            Vídeo institucional de fechamento da Campanha Bosques da Memória da
            Reserva da Biosfera da Mata Atlântica
          </div>
          <div className="boxBtnVideo">
            <button
              onClick={() => {
                window.open(
                  "https://www.youtube.com/watch?v=j6jLser3orY&t=27s&ab_channel=FUJA",
                  "_blank"
                );
              }}
              id="btn2"
            >
              Assistir vídeo
            </button>
          </div>
        </div>
      </div>

      <div className="ContainerMoviePortfolio">
        <div className="boxVideoPortfolio">
          <img className="imgVideoPortfolio" src="img/rec2.svg" alt="" />
        </div>
        <div className="boxInfosVideoPortfolio">
          <div className="txtVideoPortfolio">
            Clipe “Do Brasil (Vander Lee)" com a Mariene de Castro e Laura
            Catarina
          </div>
          <div className="boxBtnVideo">
            <button
              onClick={() => {
                window.open(
                  "https://www.youtube.com/watch?v=pQhf-aswL40&ab_channel=LauraCatarina",
                  "_blank"
                );
              }}
              id="btn1"
            >
              Assistir vídeoclipe
            </button>
          </div>
        </div>
      </div>

      <div className="ContainerMoviePortfolio">
        <div className="boxVideoPortfolio">
          <img className="imgVideoPortfolio" src="img/rec05.svg" alt="" />
        </div>
        <div className="boxInfosVideoPortfolio">
          <div className="txtVideoPortfolio">
            Vídeos produzidos na região de Serra Grande a fim de divulgar
            projetos que acreditamos e pautas que são valores do Fuja
          </div>
          <div className="boxBtnVideo">
            <button onClick={() => handleOpen()} id="btn2">
              Assistir vídeos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosPortfolio;
