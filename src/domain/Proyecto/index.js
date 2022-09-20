import React from "react";
import "./Proyecto.scss";
import proyectImage from "../../assets/img/proyecto-image.jpeg";

const Proyecto = () => {
  return (
    <section id="proyecto" className="container">
      <div id="contentContainer">
        <div id="textContainer">
          <h2 id="title">Sobre el proyecto</h2>
          <h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            necessitatibus perferendis expedita enim, ut dicta unde temporibus
            ducimus dignissimos! Animi possimus nulla voluptatibus doloremque
            velit magni minus consectetur cumque distinctio. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Explicabo necessitatibus
            perferendis expedita enim, ut dicta unde temporibus ducimus
            dignissimos! Animi possimus nulla voluptatibus doloremque velit
            magni minus consectetur cumque distinctio. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Explicabo necessitatibus
            perferendis expedita enim, ut dicta unde temporibus ducimus
            dignissimos! Animi possimus nulla voluptatibus doloremque velit
            magni minus consectetur cumque distinctio.
          </h5>
        </div>

        <img id="imagenProyecto" src={proyectImage} alt="imagen-proyecto" />
      </div>
    </section>
  );
};

export { Proyecto };
