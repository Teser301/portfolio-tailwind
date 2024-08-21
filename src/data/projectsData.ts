import { Project } from "../types/project";

// This is responsible for holding data related to projects I have worked on before
export const projects: Project[] = [
    {
        title: "Calashock",
        description: "My first project at Calashock was leading the development of their home website. I built it using WordPress and SCSS, focusing on creating a sleek, responsive design that would attract new clients and showcase the company's portfolio. As my first major project, it was a valuable learning experience in managing deadlines and communicating effectively with clients (Who were my employer). While I'm proud of the final product, in hindsight, I would have approached some aspects differently. For example, I would have challenged certain client requests, as some features were rarely used or quickly altered after launch. Additionally, I would have prioritized adding a dark mode option to reduce eye strain on the bright interface.",
        link: "https://www.calashock.com/",
        image: "/src/assets/calashock.png",
        type: ["PHP"],
        company: "Calashock",
        yearDate: "2020",
    },
    {
        title: "FullyCharged",
        description: "FullyCharged hired us to work on their new website's design for bigcommerce. I handled the majority of the project as its lead and developed most of the widgets that they use. It uses the bog-standard HTML/SCSS with handelbars template that is common for BigCommerce projects.",
        link: "https://www.fullycharged.com/",
        image: "/src/assets/fullycharged.png",
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2021",
    },
    {
        title: "Project One 2",
        description: "A brief description of Project One.",
        link: "https://example.com/project-one",
        image: "/src/assets/kimbo.png",
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2021",
    },
    {
        title: "Project Two",
        description: "A brief description of Project Two.",
        link: "https://example.com/project-two",
        image: "/src/assets/purrform.png",
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2022",
    },
    {
        title: "Project Three",
        description: "A brief description of Project Three.",
        link: "https://example.com/project-three",
        image: "https://via.placeholder.com/300",
        type: ["Handlebars"],
        company: "Company C",
        yearDate: "2023",
    },
];
