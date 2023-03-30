// Proyects
// import Project1 from "Assets/projects/nextric-card.png";
// import Project2 from "Assets/projects/pokedex-card.png";
// import Project3 from "Assets/projects/weather-card.png";
// import Project4 from "Assets/projects/project-disney.png";

import Project5 from "../../Assets/projects/project-guappjolotas.png";
import Project6 from "../../Assets/projects/project-pokemonapi.png";
import Project7 from "../../Assets/projects/project-notes-app.png";

// import LogoNextjs from "Assets/icons/logo-next-black.svg";
import LogoReactjs from "../../Assets/icons/logo-react.svg";
// import LogoFirebase from "Assets/icons/logo-firebase.svg";
// import LogoRedux from "Assets/icons/logo-redux.svg";
// import LogoHtml from "Assets/icons/logo-html.svg";
// import LogoCss from "Assets/icons/logo-css.svg";
// import LogoJs from "Assets/icons/logo-js.svg";
// import LogoJs2 from "Assets/icons/logo-js2.svg";

export const ListProjects = [
  {
    id: "0",
    nameproyect: "Guappjolotas",
    alt: "Guappjolotas preview",
    img: Project5,
    description:
      "Guappjolotas es una aplicación web, la cual nos vas a permitir poder elegir una diversa cantidad de platillos de México y de esta forma poder realizar una gran variedad de pedidos de cada uno de ellos.",
    code: "https://github.com/DiegoBazanParra/guappjolotas-app",
    demo: "https://diegobazanparra.github.io/guappjolotas-app/#/",
    tecnologies: [
      {
        img: LogoReactjs,
        alt: "Logo React",
      },
    ],
  },
  {
    id: "1",
    nameproyect: "Pokedex",
    alt: "Pokedex preview",
    img: Project6,
    description:
      "Pokedex es un aplicación web, que trae una lista de pokémons de una API Externa (pokeapi.co), para poder ser visualizados en nuestra aplicación y de esta forma poder facilitarnos la búsqueda y ver sus características de cada uno de ellos.",
    code: "https://github.com/richidoes/social-blogging-platform",
    demo: "https://nextric-app.vercel.app/",
    tecnologies: [
      {
        img: LogoReactjs,
        alt: "Logo React",
      },
    ],
  },
  {
    id: "2",
    nameproyect: "NotesApp",
    alt: "NotesApp preview",
    img: Project7,
    description:
      "Notes App es una aplicación web, la cual nos va a permitir crear notas, buscarlas, eliminarlas, modificarlas, para luego poder guardarlas en nuestro navegador y de esta forma poder ayudarnos con algunos apuntes tengamos.",
    code: "https://github.com/DiegoBazanParra/notes-app",
    demo: "https://diegobazanparra.github.io/notes-app/",
    tecnologies: [
      {
        img: LogoReactjs,
        alt: "Logo React",
      },
    ],
  },
];
