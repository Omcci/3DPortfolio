import {
  // mobile,
  // backend,
  // creator,
  // web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  // mongodb,
  git,
  figma,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
  // prog,
  // wfc,
  // mariogif,
  // mario,
  // pfolio,
  // pfolio1,
  // creator,
  express,
  mvid,
  Pfolio,
  WFC,
  WFCmp4,
  pfoliomp4,
  Mariomp4,
  hbetsmp4,
  hbetswebm,
  sass
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "Javascript",
    icon: javascript,
  },
  {
    title: "Express",
    icon: express,
  },
  {
    title: "NodeJS",
    icon: nodejs,
  },
  {
    title: "Sass",
    icon: sass,
  },
  {
    title: "TailwindCSS",
    icon: tailwind,
  },
  {
    title: "Redux Toolkit",
    icon: redux,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fitness App",
    description:
      "Une plateforme qui permet aux utilisateurs d'avoir accès à plus de mille exercices physiques différents, en plus de programmes personnalisés pour une variété d'objectifs et une section nutrition proposant des recettes variées de repas. Développé en tant que deuxième projet au sein de la formation à la Wild Code School.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    vidmp4: WFCmp4,
    image: WFC,
    source_code_link: "https://github.com/Omcci/WCS-Projet2",
    deployedproject: "https://wildfitnessclub.netlify.app",
  },
  {
    name: "Food Recipe App",
    description:
      "Ce projet est réalisé dans le cadre d'un test technique pour une entreprise. La contrainte de temps imposée fut de 5jours. L'application permet d'afficher des recettes, d'en ajouter à un menu personnalisé. Il est également possible de réorganiser ses menus dans une page dédiée. Ce projet est réalisé en bi-repo avec React en front et Node en back.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    vidmp4: hbetsmp4,
    image: hbetswebm,
    source_code_link: "https://github.com/Omcci/HubertEat-front/tree/main",
    deployedproject: "",
    routeproject: true
  },
  {
    name: "Portfolio",
    description:
      "Un side project qui met en valeur mes compétences et mon expérience dans le domaine du développement web. Première utilisation de ThreeJS et TailwindCSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    vidmp4: pfoliomp4,
    image: Pfolio,
    source_code_link: "https://github.com/Omcci/3DPortfolio",
    deployedproject: "https://omci-portfolio.netlify.app",
  },
  {
    name: "Fictional CV",
    description:
      "Un site web créé dans le cadre du premier projet du bootcamp de la Wild Code School, où nous devions construire un CV pour un personnage fictif en utilisant uniquement Javascript, HTML et CSS.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    vidmp4: Mariomp4,
    image: mvid,
    source_code_link: "https://github.com/T0MLE/WCS-project1",
    deployedproject: "https://t0mle.github.io/WCS-project1/",
  },
  {
    name: "Tampon Memorial Galery",
    description:
      "Projet 3 au sein de la Wild Code School. Il s'agit d'une gallerie d'art virtuelle, qui relate des travaux d'Hippolyte Charles Napoléon Mortier sur l'usine du Tampon et la vie des travailleurs de l'époque.y En travaux, projet à venir.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    vidmp4: "",
    image: "",
    source_code_link: "",
    deployedproject: "",
  },
];

const buttonHero = [
  {
    title: "Mon CV",
    url: "https://omci-portfolio.netlify.app/dashboard",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/omarmelloulchi/",
  },
  {
    title: "Github",
    url: "https://github.com/Omcci/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  buttonHero,
};
