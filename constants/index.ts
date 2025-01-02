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
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export const stats = [
  {
    num: 12,
    text: "Years of experience",
  },
  {
    num: 26,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

export const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "I can build a beautiful and scalable SPA using React.js, Next.js, and other modern frameworks.",
    href: "",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "I can develop robust backend applications using Java, Node.js and other popular technologies.",
    href: "",
  },
  {
    num: "03",
    title: "WordPress Development",
    description:
      "I can create custom WordPress websites to help you develop a strong online presence.",
    href: "",
  },
  {
    num: "04",
    title: "SEO & Analytics",
    description:
      "Rank higher on popular search engines like Google through SEO and analyze using Google Analytics.",
    href: "",
  },
];

export const about = {
  title: "About Me",
  description:
    "I am a Junior full stack developer specializing in frontend and backend development. I have more than 02 years of experience in building web applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Steve Kazock",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+49) 176 732 563 73",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "steve-Kazock",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Cameroonian",
    },
    {
      fieldName: "Email",
      fieldValue: "kazockparfait02@gmail.com",
    },
    {
      fieldName: "Address",
      fieldValue: "Bremen, Germany",
    },
    {
      fieldName: "Languages",
      fieldValue: "French, English, German",
    },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked with both small and large teams on various projects with various technologies. Always looking for opportunities to learn and grow.",
  items: [
    {
      company: "CEWE Stiftung & Co. KGaA",
      position: "Java Developer Working Student",
      duration: "2024 - Present",
    },
    {
      company: "IPowerworld",
      position: "Full Stack Developer",
      duration: "2023 - 2024",
    },
    {
      company: "Camencorp ",
      position: "Full Stack Developer Intern",
      duration: "Summer 2022",
    },
    {
      company: "Bildungsinstitut Kamerun",
      position: "Freelance Web Developer",
      duration: "2022 - 2023",
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I'm completing my Bachelor's degree in Computer Science and Engineering from the University of Bremen, Germany.",
  items: [
    {
      institution: "University of Bremen",
      degree: "Bachelor of Science",
      duration: "2024 - 2027",
    },
    {
      institution: "IME Douala",
      degree: "Engineering Diploma in Computer Science - Not Completed",
      duration: "2020 - 2023",
    },
    {
      institution: "FreeCodeCamp",
      degree: "Certification in Responsive Web Design",
      duration: "2022",
    },
    {
      institution: "FreeCodeCamp",
      degree: "Certification in JavaScript Algorithms and Data Structures",
      duration: "2022",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description:
    "I have worked with a range of technologies in the web development world. From frontend to backend, I can bring your ideas to life.",
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
    category: "Frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis tenetur, cumque pariatur saepe repellat.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis tenetur, cumque pariatur saepe repellat.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis tenetur, cumque pariatur saepe repellat.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb3.png",
    live: "",
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
