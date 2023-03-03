import React, { useState } from "react";
import "./Galeria.scss";
import image1 from "../../assets/img/imgsGaleria/DJI_0666.JPG";
import image2 from "../../assets/img/imgsGaleria/DJI_0680.JPG";
import image3 from "../../assets/img/imgsGaleria/DJI_0678.JPG";
import image4 from "../../assets/img/imgsGaleria/DJI_0694.JPG";
import image5 from "../../assets/img/imgsGaleria/DJI_0718.JPG";
import image6 from "../../assets/img/imgsGaleria/DJI_0719.JPG";
import image7 from "../../assets/img/imgsGaleria/DJI_0722.JPG";
import image8 from "../../assets/img/imgsGaleria/DJI_0724.JPG";
import image9 from "../../assets/img/imgsGaleria/DJI_0731.JPG";
import image10 from "../../assets/img/imgsGaleria/DJI_0744.JPG";
import image11 from "../../assets/img/imgsGaleria/DJI_0750.JPG";
import image12 from "../../assets/img/imgsGaleria/DJI_0713.JPG";
import image1mini from "../../assets/img/minisGaleria/DJI_0666mini.jpg";
import image2mini from "../../assets/img/minisGaleria/DJI_0680mini.jpg";
import image3mini from "../../assets/img/minisGaleria/DJI_0678mini.jpg";
import image4mini from "../../assets/img/minisGaleria/DJI_0694mini.jpg";
import image5mini from "../../assets/img/minisGaleria/DJI_0718mini.jpg";
import image6mini from "../../assets/img/minisGaleria/DJI_0719mini.jpg";
import image7mini from "../../assets/img/minisGaleria/DJI_0722mini.jpg";
import image8mini from "../../assets/img/minisGaleria/DJI_0724mini.jpg";
import image9mini from "../../assets/img/minisGaleria/DJI_0731mini.jpg";
import image10mini from "../../assets/img/minisGaleria/DJI_0744mini.jpg";
import image11mini from "../../assets/img/minisGaleria/DJI_0750mini.jpg";
import image12mini from "../../assets/img/minisGaleria/DJI_0713mini.jpg";
import { ModalGaleria } from "./ModalGaleria";

const Galeria = () => {
  const [showModal, setShowModal] = useState(false);
  const [imgOnModal, setImgOnModal] = useState(null);
  const [imgOnModalIndex, setImgOnModalIndex] = useState(null);

  const handleClose = () => setShowModal(false);

  const handleShow = (i, img) => {
    setImgOnModal(img);
    setImgOnModalIndex(i);
    setShowModal(true);
  };

  const images = [
    {
      img: image1,
      mini: image1mini,
    },
    {
      img: image2,
      mini: image2mini,
    },
    {
      img: image3,
      mini: image3mini,
    },
    {
      img: image4,
      mini: image4mini,
    },
    {
      img: image5,
      mini: image5mini,
    },
    {
      img: image6,
      mini: image6mini,
    },
    {
      img: image7,
      mini: image7mini,
    },
    {
      img: image8,
      mini: image8mini,
    },
    {
      img: image9,
      mini: image9mini,
    },
    {
      img: image10,
      mini: image10mini,
    },
    {
      img: image11,
      mini: image11mini,
    },
    {
      img: image12,
      mini: image12mini,
    },
  ];

  return (
    <section id="galeria" className="container">
      <ModalGaleria
        show={showModal}
        imgsArray={images}
        actualImageIndex={imgOnModalIndex}
        actualImage={imgOnModal}
        handleClose={handleClose}
      />
      <h2 id="title">Galería del Proyecto</h2>
      <div id="containerGaleria">
        {images.map((img, i) => (
          <img
            onClick={() => handleShow(i, img.img)}
            key={i}
            src={img.mini}
            className="fluid galleryImage"
            alt="img"
          />
        ))}
      </div>
    </section>
  );
};

export { Galeria };
