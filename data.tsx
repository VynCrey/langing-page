import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github } from "lucide-react";
import { Database, BarChart, Brain, Settings, Cloud } from "lucide-react";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/cristian-elias-gabriel-monzon/",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/VynCrey",
    }
];



export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    }
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Data Pipeline Engineer",
        subtitle: "Proyecto personal",
        description: "•  Desarrollo de pipeline ETL en Python\n• Extracción de datos desde APIs\n• Limpieza y transformación con Pandas\n• Almacenamiento en base de datos\n• Automatización de procesos de datos",
        date: "DATA PIPELINE ",
    },
    {
        id: 2,
        title: "Data Analyst - Dashboard de Ventas",
        subtitle: "Proyecto práctico",
        description: "• Análisis de datos comerciales\n• Creación de KPIs\n• Visualización con herramientas interactivas\n• Identificación de tendencias y patrones",
        date: "DASHBOARD",
    },
    {
        id: 3,
        title: "Machine Learning Project",
        subtitle: "Proyecto aplicado",
        description: "• Desarrollo de modelo predictivo\n• Feature engineering\n• Evaluación de métricas\n• Implementación de predicción",
        date: "MACHINE LEARNING",
    },
    {
        id: 4,
        title: "Automatización de Datos",
        subtitle: "Proyecto personal",
        description: "• Automatización de procesos de datos\n• Integración con APIs\n• Optimización de flujos de trabajo\n• Monitoreo y mantenimiento de pipelines\n • Generación de reportes automáticos",
        date: "AUTOMATIZACIÓN",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
  {
    icon: <Database />,
    title: "Data Engineering",
    description:
      "Construcción de pipelines ETL en Python, integración con APIs y automatización de flujos de datos para procesamiento eficiente.",
  },
  {
    icon: <BarChart />,
    title: "Data Analysis & Dashboards",
    description:
      "Análisis de datos, limpieza y creación de dashboards interactivos (Python, SQL, Power BI o Streamlit) para toma de decisiones.",
  },
  {
    icon: <Brain />,
    title: "Machine Learning",
    description:
      "Desarrollo de modelos predictivos (clasificación y regresión), feature engineering y evaluación de métricas.",
  },
  {
    icon: <Settings />,
    title: "Automatización de Datos",
    description:
      "Automatización de procesos con Python: scraping, integración de APIs y generación automática de reportes.",
  },
  {
    icon: <Cloud />,
    title: "Integración de Datos",
    description:
      "Conexión y unificación de múltiples fuentes de datos (APIs, bases de datos, archivos) para centralizar la información.",
  },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile3.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile2.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile5.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile4.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];