import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaGitSquare,
  FaCss3,
  FaDocker,
} from "react-icons/fa";

import reviewvault from "./assets/ReviewVault.png";
import dinedivide from "./assets/DineDivide.png";
import faraway from "./assets/FarAway.png";
import smartsum from "./assets/SmartSum.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML5",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in HTML5, creating structured and accessible layouts that ensure cross-browser compatibility and responsive design for optimal user experience.",
  },
  {
    id: nanoid(),
    title: "CSS3",
    icon: <FaCss3 className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in CSS3, including Flexbox, Grid, and responsive design techniques, for crafting visually appealing, adaptive layouts and smooth animations.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "GitHub",
    icon: <FaGitSquare className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in version control with Git, maintaining project history, collaborating effectively with teams, and ensuring smooth development workflows.",
  },
  {
    id: nanoid(),
    title: "Docker",
    icon: <FaDocker className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Docker, utilizing containerization to streamline development workflows, ensure environment consistency, and facilitate smooth deployment across various stages of application lifecycle.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: reviewvault,
    url: "https://reviewvault.netlify.app/",
    github: "https://github.com/shubham112013/Movie-Review",
    title: "Review Vault",
    text: "Review Vault is a Single Page Application I designed to enhance the movie-watching experience with easy access to ratings. In Review Vault, users can search for any movie by title to instantly view its IMDb rating and add their personal rating. The app also maintains a personalized “Watched Movie” list, keeping track of all movies rated, making it easy to revisit favorites or explore past recommendations. Built for simplicity and responsiveness, Review Vault offers a smooth and engaging experience across all devices.",
  },
  {
    id: nanoid(),
    img: dinedivide,
    url: "https://dinedivide.netlify.app/",
    github: "https://github.com/shubham112013/eat-n-split",
    title: "Dine Divide",
    text: "Dine Divide is a Single Page Application I developed to simplify the process of splitting bills with friends. With Dine Divide, users can easily add friends to their list and select them to divide the bill between each other. The application maintains a running balance, clearly indicating who owes whom and how much, making it easy to keep track of shared expenses. Designed for repeat use, the balance updates automatically, allowing users to settle future bills seamlessly. This intuitive, user-friendly interface enhances social dining experiences by ensuring fairness and clarity in financial interactions.",
  },
  {
    id: nanoid(),
    img: faraway,
    url: "https://verdant-pegasus-0780de.netlify.app",
    github: "https://github.com/shubham112013/Far-Away",
    title: "Far-Away",
    text: "Far-Away is a Single Page Application I designed to simplify packing for trips by keeping track of everything you need to carry. With Far-Away, users can add items to their packing list, specifying quantities for each. As you pack, the app lets you mark off items you've picked, updating the list in real time. A progress indicator in the footer displays the percentage of packed items, helping ensure nothing important is forgotten. This intuitive, travel-friendly app provides a clear, organized packing experience, making trip preparation easy and stress-free.",
  },
  {
    id: nanoid(),
    img: smartsum,
    url: "https://smartsum.netlify.app/",
    github: "https://github.com/shubham112013/SmartSum",
    title: "Smart Sum",
    text: "Smart Sum is a Single Page Application I designed to make everyday calculations simple and visually appealing. This calculator app features a sleek, user-friendly interface that combines functionality with aesthetics, transforming even routine calculations into a pleasant experience. With Smart Sum, users can perform quick calculations with ease, enjoying a refined design that adds a touch of style to their daily tasks. This project showcases my commitment to both usability and visual appeal, even in the simplest tools.",
  },
];
