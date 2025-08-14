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
  // === LENGUAJES DE PROGRAMACIÓN ===
  {
    id: 1,
    name: "JavaScript",
    category: "languages"
  },
  {
    id: 2,
    name: "TypeScript",
    category: "languages"
  },
  {
    id: 3,
    name: "Python",
    category: "languages"
  },
  {
    id: 4,
    name: "Java",
    category: "languages"
  },
  {
    id: 5,
    name: "PHP",
    category: "languages"
  },
  {
    id: 6,
    name: "SQL",
    category: "languages"
  },

  // === FRAMEWORKS Y LIBRERÍAS FRONTEND ===
  {
    id: 7,
    name: "React.js",
    category: "frontend"
  },
  {
    id: 8,
    name: "Angular",
    category: "frontend"
  },
  {
    id: 9,
    name: "Vue.js",
    category: "frontend"
  },

  // === FRAMEWORKS Y LIBRERÍAS BACKEND ===
  {
    id: 10,
    name: "Node.js",
    category: "backend"
  },
  {
    id: 11,
    name: "Express.js",
    category: "backend"
  },
  {
    id: 12,
    name: "Django",
    category: "backend"
  },
  {
    id: 13,
    name: "FastAPI",
    category: "backend"
  },
  {
    id: 14,
    name: "Laravel",
    category: "backend"
  },
  {
    id: 15,
    name: "Socket.IO",
    category: "backend"
  },

  // === BASES DE DATOS ===
  {
    id: 16,
    name: "PostgreSQL",
    category: "database"
  },
  {
    id: 17,
    name: "MySQL",
    category: "database"
  },
  {
    id: 18,
    name: "Redis",
    category: "database"
  },

  // === CLOUD Y DEVOPS ===
  {
    id: 19,
    name: "AWS",
    category: "cloud"
  },
  {
    id: 20,
    name: "Google Cloud Platform",
    category: "cloud"
  },
  {
    id: 21,
    name: "Docker",
    category: "devops"
  },
  {
    id: 22,
    name: "Git",
    category: "devops"
  },

  // === HERRAMIENTAS DE DESARROLLO ===
  {
    id: 23,
    name: "Postman",
    category: "tools"
  },
  {
    id: 24,
    name: "Selenium WebDriver",
    category: "tools"
  },
  {
    id: 25,
    name: "RabbitMQ",
    category: "tools"
  },
  {
    id: 26,
    name: "Celery",
    category: "tools"
  },

  // === SISTEMAS OPERATIVOS ===
  {
    id: 27,
    name: "Linux",
    category: "os"
  },
  {
    id: 28,
    name: "Kali Linux",
    category: "os"
  },
  {
    id: 29,
    name: "Parrot OS",
    category: "os"
  },

  // === HERRAMIENTAS DE CIBERSEGURIDAD ===
  {
    id: 30,
    name: "Nmap",
    category: "cybersecurity"
  },
  {
    id: 31,
    name: "Metasploit",
    category: "cybersecurity"
  },
  {
    id: 32,
    name: "Burp Suite",
    category: "cybersecurity"
  },
  {
    id: 33,
    name: "Wireshark",
    category: "cybersecurity"
  },
  {
    id: 34,
    name: "John the Ripper",
    category: "cybersecurity"
  },
  {
    id: 35,
    name: "Hydra",
    category: "cybersecurity"
  },
  {
    id: 36,
    name: "Gobuster",
    category: "cybersecurity"
  },
  {
    id: 37,
    name: "SQLMap",
    category: "cybersecurity"
  },
  {
    id: 38,
    name: "Aircrack-ng",
    category: "cybersecurity"
  },

  // === COMPETENCIAS EN CIBERSEGURIDAD ===
  {
    id: 39,
    name: "Ethical Hacking",
    category: "security_skills"
  },
  {
    id: 40,
    name: "Análisis de Vulnerabilidades",
    category: "security_skills"
  },
  {
    id: 41,
    name: "Pentesting Web y Redes",
    category: "security_skills"
  },
  {
    id: 42,
    name: "Explotación de Servicios",
    category: "security_skills"
  },
  {
    id: 43,
    name: "Respuesta ante Incidentes",
    category: "security_skills"
  },

  // === GESTIÓN Y NORMATIVAS ===
  {
    id: 44,
    name: "ISO/IEC 27001 (SGSI)",
    category: "management"
  },
  {
    id: 45,
    name: "Políticas de Seguridad",
    category: "management"
  },
  {
    id: 46,
    name: "Gestión de Riesgos",
    category: "management"
  },
  {
    id: 47,
    name: "Control de Accesos",
    category: "management"
  },
  {
    id: 48,
    name: "Continuidad de Negocio",
    category: "management"
  },
  {
    id: 49,
    name: "Concienciación de Usuarios",
    category: "management"
  }
];

// Función auxiliar para obtener skills por categoría
export const getSkillsByCategory = (category) => {
  return skills.filter(skill => skill.category === category);
};

// Función auxiliar para obtener todas las categorías
export const getCategories = () => {
  const categories = {
    languages: "Lenguajes de Programación",
    frontend: "Frontend",
    backend: "Backend",
    database: "Bases de Datos",
    cloud: "Cloud Computing",
    devops: "DevOps",
    tools: "Herramientas de Desarrollo",
    os: "Sistemas Operativos",
    cybersecurity: "Herramientas de Ciberseguridad",
    security_skills: "Competencias en Seguridad",
    management: "Gestión y Normativas"
  };
  return categories;
};

// Habilidades técnicas categorizadas
// export const technicalSkills = [
//   {
//     category: "Lenguajes de Programación",
//     icons: ["python", "java", "javascript", "typescript", "php"],
//     names: ["Python", "Java", "JavaScript", "TypeScript", "PHP"],
//   },
//   {
//     category: "Desarrollo Frontend",
//     icons: ["vue", "react"],
//     names: ["Vue.js", "React.js"],
//   },
//   {
//     category: "Desarrollo Backend & APIs",
//     icons: ["nodejs", "django", "fastapi", "laravel"],
//     names: ["Node.js", "Django", "FastAPI", "Laravel"],
//   },
//   {
//     category: "Bases de Datos & Cache",
//     icons: ["postgres", "mysql", "redis"],
//     names: ["PostgreSQL", "MySQL", "Redis"],
//   },
//   {
//     category: "Mensajería & Procesamiento de Tareas",
//     icons: ["rabbitmq"],
//     names: ["RabbitMQ", "Celery (Task Queue en Python)"],
//   },
//   {
//     category: "Cloud & DevOps",
//     icons: ["aws", "gcp", "docker"],
//     names: ["AWS", "Google Cloud Platform", "Docker"],
//   },
//   {
//     category: "Herramientas de Desarrollo",
//     icons: ["git", "postman"],
//     names: ["Git", "Postman"],
//   },
//   {
//     category: "Ciberseguridad & Pentesting",
//     icons: ["linux", "kali"],
//     names: ["Kali Linux", "Parrot OS"],
//     tools: [
//       "Nmap", "Metasploit", "Burp Suite", "Wireshark", "John the Ripper", "Hydra", "Gobuster", "SQLMap", "Aircrack-ng"
//     ],
//     practices: [
//       "Ethical Hacking", "Análisis de vulnerabilidades", "Pruebas de penetración en aplicaciones web y redes", "Explotación de servicios"
//     ],
//     standards: [
//       "Implementación y mantenimiento de SGSI basados en ISO/IEC 27001"
//     ],
//     policies: [
//       "Desarrollo y aplicación de políticas de seguridad", "análisis y gestión de riesgos", "control de accesos", "respuesta ante incidentes", "continuidad de negocio", "concienciación de usuarios"
//     ]
//   }
// ];
