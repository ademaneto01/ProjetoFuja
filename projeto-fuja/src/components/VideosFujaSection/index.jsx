import "./styles.css";

import { useNavigate } from "react-router-dom";

function VideosFujaSection() {
  const navigate = useNavigate();
  return (
    <div className="screamVideosFuja">
      <h1 className="titleVideos">
        O Fuja é jovem, mas já trabalhou e já teve o seu <br></br> conteúdo
        veiculado em vários locais
      </h1>
      <h2 className="subTitleVideos">
        Seja um vídeo de 5 segundos ou um curta-metragem, a equipe do Fuja
        possui os melhores<br></br> equipamentos para a produção de um conteúdo
        objetivo, diferente e engajador.
      </h2>
      <div className="boxVideos">
        <div className="videoItens">
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
          <p>Produção de minissérie de 8 episódios + 1 curta metragem</p>
        </div>

        <div className="videoItens">
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
          <p>Clipe com a Mariene de Castro e Laura Catarina</p>
        </div>

        <div className="videoItens">
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
          <p>
            Vídeo institucional de fechamento da Campanha Bosques da Memória
          </p>
        </div>
      </div>
      <button
        id="btnPortfolioHome"
        onClick={() => {
          navigate("/portfolio");
        }}
      >
        Veja nosso portfólio completo
      </button>
    </div>
  );
}

export default VideosFujaSection;
