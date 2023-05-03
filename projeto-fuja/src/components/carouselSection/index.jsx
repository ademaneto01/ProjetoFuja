import "./styles.css";

import React, { useState, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carrouselItems = [
  {
    id: 1,
    url: "/img/img-carrosel-home/img2.svg",
    description: (
      <div className="descriptionCarrousel">
        <p>
          Somos uma equipe de produção audiovisual que aborda e comunica de
          forma inovadora conteúdos relacionados ao meio ambiente, turismo e
          cultura.
        </p>

        <p>
          Na produção audiovisual, trabalhamos com todo o processo: desde a
          roteirização, pré-produção e planejamento do conteúdo, além das
          gravações, direção, edição e pós-produção.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    url: "/img/img-carrosel-home/img1.svg",
    description: (
      <div className="descriptionCarrousel">
        <p>
          O Fuja tem como objetivo encorajar as pessoas a fugirem do
          convencional e a se conectarem com a natureza, por meio de
          experiências transformadoras.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    url: "/img/img-carrosel-home/img3.svg",
    description: (
      <div className="descriptionCarrousel">
        <p>
          O Fuja acredita e trabalha em prol de uma relação profissional
          saudável, com entregas consistentes e que superem positivamente às
          expectativas.
        </p>
      </div>
    ),
  },
];

function Pagination({ swaper, indexCarrouselItem }) {
  const dot = "/img/carrouselDot.svg";
  const dotActivated = "/img/carrouselDotActivated.svg";

  return (
    <div className="carrouselPagination">
      <PrevButton
        className="carrouselPaginationButtons"
        onClick={() => swaper.current.slickPrev()}
      />
      <div>
        <img src={indexCarrouselItem === 0 ? dotActivated : dot} />
        <img src={indexCarrouselItem === 1 ? dotActivated : dot} />
        <img src={indexCarrouselItem === 2 ? dotActivated : dot} />
      </div>
      <NextButton
        className="carrouselPaginationButtons"
        onClick={() => {
          console.log(swaper.current);
          swaper.current.slickNext();
        }}
      />
    </div>
  );
}

function NextButton(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/img/carrouselArrowRight.svg"
      className={className}
      style={{ ...style, cursor: "pointer" }}
      onClick={onClick}
    />
  );
}

function PrevButton(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/img/carrouselArrowLeft.svg"
      className={className}
      style={{ ...style, cursor: "pointer" }}
      onClick={onClick}
    />
  );
}

const CarouselSection = () => {
  const [indexCarrouselItem, setIndexCarrouselItem] = useState(0);
  const swaper = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: function (oldIndex, newIndex) {
      setIndexCarrouselItem(newIndex);
    },
  };

  return (
    <div className="containerCarrousel">
      <div className="infosCarrousel">
        <div className="textCarrousel">
          <div className="headerCarrousel">
            <div className="">
              <p>O Fuja é um estilo de vida.</p>
            </div>
            <div className="headerCarrouselLine2">
              <p>Uma inspiração.</p>
            </div>
            <div className="headerCarrouselLine3">
              <p>É liberdade.</p>
            </div>
          </div>

          {carrouselItems[indexCarrouselItem].description}
        </div>
        <div className="boxCarrousel">
          <div className="slider-container">
            <Slider {...settings} ref={swaper}>
              {carrouselItems.map((item) => (
                <img className="imgCarrousel" key={item.id} src={item.url} />
              ))}
            </Slider>
          </div>
          <Pagination swaper={swaper} indexCarrouselItem={indexCarrouselItem} />
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
