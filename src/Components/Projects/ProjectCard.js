import React from "react";
import { ListProjects } from "./Data.js";

function ProjectCard() {
  return (
    <div className="project-wrapper">
      {ListProjects.map((card) => (
        <article className="project-card" key={card.id}>
          <div className="project-card-img">
            <img src={card.img} alt={card.alt} />
          </div>
          <div className="project-card-text">
            <h3 className="project-card-title"> {card.nameproyect}</h3>
            <hr />
            <p className="project-card-descripcion">{card.description}</p>
            <div className="project-card-logos">
              {card.tecnologies.map((item, i) => (
                <img key={item + i} src={item.img} alt={item.alt} />
              ))}
            </div>
            <div className="project-card-links">
              <a href={card.demo} target="_blank" rel="noreferrer">
                Ver Sitio
              </a>
              <a href={card.code} target="_blank" rel="noreferrer">
                Codigo
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectCard;
