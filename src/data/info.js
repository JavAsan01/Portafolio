import project3 from "../assets/images/GSV Ventas.gif";
import project1 from "../assets/images/Vitmap.png";
import project2 from "../assets/images/certyget.gif";
import project4 from "../assets/images/PCG_web.gif";
import project5 from "../assets/images/software_developer_illustration.png";
import project6 from "../assets/images/tuLaptop.png";

import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

export const AboutMe = {
  title_primary: "",
  title_secondary: "",
  about_me: ["description 1", "description 2"],
};

export const Experiences = [
  {
    id: 1,
    date: "2024 - Actualidad",
    location: "Ecuador",
    company: "ESTUDIO JURÍDICO ROMERO D’ & ASOCIADOS",
    level: "Junior",
    position: "Desarrollador Junior de Software",
    functions:
      "Desarrollo y mantenimiento de soluciones de software para el sector jurídico, automatización de procesos internos y soporte técnico a usuarios.",
    technology: ["JavaScript", "Node.js", "SQL"],
    contact: {
      phone: "02-5000160",
      email: "dsalazar@romerodyasociados.com"
    }
  },
  {
    id: 2,
    date: "2024 (6 meses)",
    location: "Ecuador",
    company: "GRUPO-VELÁSTEGUI S.A.S.",
    level: "Prácticas",
    position: "Ingeniero en Área de Sistemas",
    functions:
      "Soporte y gestión de sistemas informáticos, implementación de mejoras y atención a incidencias técnicas.",
    technology: ["Windows Server", "Redes", "Soporte Técnico"],
    contact: {
      phone: "+593 95 888 0278",
      email: "dario.velastegui@grupovelastegui.com"
    }
  },
  {
    id: 3,
    date: "2023 (6 meses)",
    location: "Ecuador",
    company: "SISCOM Sistemas y Comunicaciones S.A.S.",
    level: "Prácticas",
    position: "Prácticas Pre-Profesionales",
    functions:
      "Apoyo en proyectos de telecomunicaciones, configuración de equipos y asistencia en tareas de soporte técnico.",
    technology: ["Redes", "Soporte Técnico", "Telecomunicaciones"],
    contact: {
      phone: "0987949633",
      email: "infor@siscom.ec"
    }
  },
  {
    id: 4,
    date: "2024 - 2025",
    location: "España (online)",
    company: "UOC 'Universitat Oberta de Catalunya'",
    level: "Posgrado",
    position: "Máster en Ciberseguridad y Privacidad",
    functions: "Formación de posgrado en ciberseguridad, privacidad y protección de datos.",
    technology: ["Ciberseguridad", "Privacidad", "Protección de datos"]
  },
  {
    id: 5,
    date: "2019 - 2024",
    location: "Ecuador",
    company: "Universidad Técnica de Cotopaxi",
    level: "Grado",
    position: "Ingeniero en Sistemas de Información",
    functions: "Formación universitaria en sistemas de información, desarrollo de software y gestión de proyectos.",
    technology: ["Sistemas de Información", "Desarrollo de Software", "Gestión de Proyectos"]
  },
];

export const Projects = [
  {
    id: 1,
    title: "VitMap ",
    description: "Aplicación movil para localizar doctores ",
    position: "Desarrollador backend",
    url_img: project1,
    url_page: "",
    url_github: "https://github.com/MarcoOrtiz333/VitMapBackend/tree/develop",
    tools: ["React Native", "Nodejs", "Firebase"],
  },
  {
    id: 2,
    title: "Certyget ",
    description: "Sistema web para la generación y consulta de certificados",
    position: "Desarrollador Fullstack",
    url_img: project2,
    url_page: "",
    url_github: "https://github.com/JavinCayo10/Certyget_Bakend",
    tools: ["Angular", "Nodejs", "MySQL"],
  },
  {
    id: 3,
    title: "Gestor de ventas",
    description: "Aplicativo web para la gestión de ventas.",
    position: "Desarrollador Fullstack",

    url_img: project3,

    url_page: "",
    url_github: "https://github.com/JavinCayo10/proyecto_ventas",
    tools: ["Angular", "Bootstrap", "Nodejs", "MongoDB"],
  },
  {
    id: 4,
    title: "Sitio web PCG ",
    description:
      "Sitio web informativo para el producto PCG Web de Empresarial Díaz & Bonilla S. A.",
    position: "Desarrollador Frontend ",
    url_img: project4,
    url_page: "https://almogascialtda.com/",
    url_github: "https://github.com/JavinCayo10/bot_emp_bd/tree/develop",
    tools: ["Codeigniter", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "Portafolio ",
    description:
      "Página web donde encontraras mis proyectos y aprenderas más sobre mí.",
    position: "Desarrollador Frontend",

    url_img: project5,
    url_page: "https://portfolio-Javdev.vercel.app/",
    url_github: "https://github.com/JavinCayo10/portfolio_Javdev",
    tools: ["Reactjs", "Tailwindcss", "Framer Motion"],
  },
  {
    id: 6,
    title: "tuLaptop ",
    description:
      "Sistema de recomendación para productos tecnológicos utilizando web scraping",
    position: "Desarrollador Fullstack",

    url_img: project6,
    url_page: "utatec.pro",
    url_github: "https://github.com/JavinCayo10/UtaLapRec",
    tools: ["Reactjs", "Tailwindcss", "DaisyUI", "Flask", "Selenium", "Scrapy"],
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/carlos-asanza-8a7817209/",
  },
  {
    id: 2,
    icon: FiGithub,
    url: "https://github.com/JavAsan01",
  },
  {
    id: 3,
    icon: FiInstagram,
    url: "https://www.instagram.com/JavAsan01/",
  },
  {
    id: 4,
    icon: FiMail,
    url: "mailto:javasan.dev@gmail.com",
  },
];

export const Menu = [
  {
    id: 1,
    title: "Inicio",
    url: "#top",
  },
  {
    id: 2,
    title: "Experiencia",
    url: "#experience",
  },
  {
    id: 3,
    title: "Acerca de mí",
    url: "#aboutme",
  },
  {
    id: 4,
    title: "Proyectos",
    url: "#projects",
  },
  {
    id: 5,
    title: "Contacto",
    url: "#contactme",
  },
];

export const skills = [
  {
    id: 1,
    name: "Reactjs",
  },
  {
    id: 2,
    name: "Angular",
  },
  {
    id: 3,
    name: "Nodejs",
  },
  {
    id: 4,
    name: "Express",
  },
  {
    id: 5,
    name: "Socket.IO",
  },
  {
    id: 6,
    name: "SQL",
  },
  {
    id: 7,
    name: "Python",
  },
  {
    id: 8,
    name: "Selenium WebDriver",
  },
  {
    id: 9,
    name: "Git",
  },
  {
    id: 10,
    name: "GCloud",
  },
];
