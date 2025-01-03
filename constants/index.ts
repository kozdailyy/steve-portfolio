import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaWordpress,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMysql,
  SiDocker,
} from "react-icons/si";

export const navLinks = [
  { nameKey: "home", path: "/" },
  { nameKey: "services", path: "/services" },
  { nameKey: "resume", path: "/resume" },
  { nameKey: "work", path: "/work" },
  { nameKey: "contact", path: "/contact" },
];

export const stats = [
  {
    num: 12,
    textKey: "yearsOfExperience",
  },
  {
    num: 26,
    textKey: "projectsCompleted",
  },
  {
    num: 8,
    textKey: "technologiesMastered",
  },
  {
    num: 500,
    textKey: "codeCommits",
  },
];

export const services = [
  {
    num: "01",
    titleKey: "frontend.title",
    descriptionKey: "frontend.description",
    href: "",
  },
  {
    num: "02",
    titleKey: "backend.title",
    descriptionKey: "backend.description",
    href: "",
  },
  {
    num: "03",
    titleKey: "wordpress.title",
    descriptionKey: "wordpress.description",
    href: "",
  },
  {
    num: "04",
    titleKey: "seo.title",
    descriptionKey: "seo.description",
    href: "",
  },
];

export const about = {
  title: "title",
  description: "description",
  info: [
    {
      fieldName: "name",
      fieldValue: "nameVal",
    },
    {
      fieldName: "phone",
      fieldValue: "phoneVal",
    },
    {
      fieldName: "experience",
      fieldValue: "years",
    },
    {
      fieldName: "linkedin",
      fieldValue: "linkedinVal",
    },
    {
      fieldName: "nationality",
      fieldValue: "nationalityVal",
    },
    {
      fieldName: "email",
      fieldValue: "emailVal",
    },
    {
      fieldName: "address",
      fieldValue: "addressVal",
    },
    {
      fieldName: "languages",
      fieldValue: "languagesVal",
    },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  titleKey: "title",
  descriptionKey: "description",
  items: [
    {
      company: "CEWE Stiftung & Co. KGaA",
      position: "cewe.position",
      duration: "cewe.duration",
    },
    {
      company: "IPowerworld",
      position: "ipw.position",
      duration: "ipw.duration",
    },
    {
      company: "Camencorp ",
      position: "camc.position",
      duration: "camc.duration",
    },
    {
      company: "Bildungsinstitut Kamerun",
      position: "bilinst.position",
      duration: "bilinst.duration",
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  titleKey: "title",
  descriptionKey: "description",
  items: [
    {
      institution: "University of Bremen",
      degree: "uniBremen.degree",
      duration: "2024 - 2027",
    },
    {
      institution: "IME Douala",
      degree: "ime.degree",
      duration: "2020 - 2023",
    },
    {
      institution: "FreeCodeCamp",
      degree: "fcc01.degree",
      duration: "2022",
    },
    {
      institution: "FreeCodeCamp",
      degree: "fcc02.degree",
      duration: "2022",
    },
  ],
};

export const skills = {
  titleKey: "title",
  descriptionKey: "description",
  skillList: [
    {
      icon: FaHtml5,
      name: "html5",
    },
    {
      icon: FaCss3,
      name: "css3",
    },
    {
      icon: FaJs,
      name: "javascript",
    },
    {
      icon: FaReact,
      name: "react.js",
    },
    {
      icon: FaJava,
      name: "java",
    },
    {
      icon: FaWordpress,
      name: "wordpress",
    },
    {
      icon: SiTypescript,
      name: "typescript",
    },
    {
      icon: SiNextdotjs,
      name: "next.js",
    },
    {
      icon: SiNodedotjs,
      name: "node.js",
    },
    {
      icon: SiTailwindcss,
      name: "tailwindcss",
    },
    {
      icon: SiMysql,
      name: "mysql",
    },
    {
      icon: SiDocker,
      name: "docker",
    },
  ],
};

export const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Project 1",
    description: "project1",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "TypeScript" },
      { name: "Appwrite" },
    ],
    image: "/assets/work/dashboard.png",
    live: "https://banking-app-three-xi.vercel.app/",
    github: "https://github.com/kozdailyy/banking-app",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Project 2",
    description: "project2",
    stack: [
      { name: "React.js" },
      { name: "MaterialUI" },
      { name: "Youtube APIs" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://kozdailytube.camencorp.com/",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project 3",
    description: "project3",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/work/thumb3.png",
    live: "https://kdschool.netlify.app/",
    github: "https://github.com/kozdailyy/Multipage-Educational-Website",
  },
  {
    num: "04",
    category: "Wordpress",
    title: "Project 4",
    description: "project4",
    stack: [{ name: "Wordpress" }, { name: "Elementor" }, { name: "TutorLMS" }],
    image: "/assets/work/thumb4.png",
    live: "https://xpertacademy.site/",
    github: "",
  },
];

export const info = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    description: "(+49) 176 732 563 73",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    description: "kazockparfait02@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    description: "Schreberstrasse 14, 28327 Bremen, Germany",
  },
];
