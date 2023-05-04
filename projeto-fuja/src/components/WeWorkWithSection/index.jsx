import "./styles.css";

function WeWorkWithSection() {
  const parcerias = [
    {
      id: 1,
      url: "/img/ParquedasDunas.svg",
      className: "ImgParcerias1",
    },
    {
      id: 2,
      url: "/img/BaleiaJubarte.svg",
      className: "ImgParcerias1",
    },
    {
      id: 3,
      url: "/img/Klaus.svg",
      className: "ImgParcerias1",
    },
    {
      id: 4,
      url: "/img/ECOA-removebg-preview1.svg",
      className: "ImgParcerias1",
    },
    {
      id: 5,
      url: "/img/Tamar.svg",
      className: "ImgParcerias1",
    },
    {
      id: 6,
      url: "/img/Sapiranga.svg",
      className: "ImgParcerias1",
    },
    {
      id: 7,
      url: "/img/TerraMirim.svg",
      className: "ImgParcerias1",
    },
    {
      id: 8,
      url: "/img/globo.svg",
      className: "ImgParcerias2",
    },
    {
      id: 9,
      url: "/img/RPPNLontra.svg",
      className: "ImgParcerias2",
    },
    {
      id: 10,
      url: "/img/RBMATransparente.svg",
      className: "ImgParcerias2",
    },
    {
      id: 11,
      url: "/img/logo_final_taboa.svg",
      className: "ImgParcerias2",
    },
    {
      id: 12,
      url: "/img/ParquedaMAta.svg",
      className: "ImgParcerias2",
    },
    {
      id: 13,
      url: "/img/bracell_logo_FA.svg",
      className: "ImgParcerias2",
    },
  ];

  return (
    <div className="containerParcerias">
      <div className="boxImgParcerias">
        <div className="ContainerTitleParcerias">
          <div className="boxTitleParcerias">
            <div>
              <p>Já trabalhamos com</p>
            </div>
          </div>
        </div>
        <div className="containerImgParcerias">
          {parcerias.map((parceria) => (
            <div
              className={`ImgParcerias ${parceria.className}`}
              key={parceria.id}
            >
              <img src={parceria.url} alt={`Parceria ${parceria.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeWorkWithSection;
