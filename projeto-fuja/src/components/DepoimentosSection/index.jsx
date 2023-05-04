import "./styles.css";

function DepoimentosSection(params) {
  return (
    <div className="containerDepoimentos">
      <div className="ContainerTitleDepoimento">
        <p>Depoimentos</p>
      </div>
      <div className="containerInfoDepoimentos">
        <div className="boxDepoimentos">
          <div className="textDepoimentos">
            <p>
              “A equipe do Fuja não só filma, mas vivencia a questão ambiental.
              Trazem imagens não só belas, mas emocionantes mesmo.”
            </p>
          </div>
          <div className="boxNomeDepoimento">
            <div className="nomeDepoimento">Clayton Lino</div>
            <div className="descriDepoimento">
              <p>Presidente da Reserva da Biosfera da Mata Atlântica</p>
            </div>
          </div>
          <div className="pictureDepoimento">
            <img src="/img/Ellipse14.svg" alt="" />
          </div>
        </div>
        <div className="boxDepoimentos">
          <div className="textDepoimentos">
            <p>
              “A live realizada com o Fuja foi linda. <br />
              Muita gente assistiu e amou!”
            </p>
          </div>
          <div className="boxNomeDepoimento">
            <div className="nomeDepoimento">Minah Almeida</div>
            <div className="descriDepoimento">
              <p>Fundação Terra Mirim</p>
            </div>
          </div>
          <div className="pictureDepoimento">
            <img src="/img/Ellipse13.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepoimentosSection;
