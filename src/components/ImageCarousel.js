import React from 'react';
import Slider from 'react-slick';
import './ImageCarousel.css';

// Importar los estilos de slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="/images/image1.jpg" alt="Imagen 1" />
        </div>
        <div>
          <img src="/images/image2.jpg" alt="Imagen 2" />
        </div>
        <div>
          <img src="/images/image3.jpg" alt="Imagen 3" />
        </div>
        <div>
          <img src="/images/image4.jpg" alt="Imagen 3" />
        </div>
        <div>
          <img src="/images/image5.jpg" alt="Imagen 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
