import { Timeline } from "../types/timeline";
import ReactLogo from "/assets/icons/react.svg";
import HTMLLogo from "/assets/icons/html5.svg";
import JavaScriptLogo from "/assets/icons/javascript.svg";
import WordpressLogo from "/assets/icons/wordpress.svg";
import SassLogo from "/assets/icons/sass.svg";
import GithubLogo from "/assets/icons/github.svg"
import TypeScriptLogo from "/assets/icons/typescript.svg"
import CssLogo from "/assets/icons/css.svg"

import Polu from "/assets/img/polu.jpg"
import Standard from "/assets/img/standard.jpg"
import Workland from "/assets/img/workland.jpg"
import Paavli from "/assets/img/paavli.jpg"

export const experiences: Timeline[] = [
    {
        year: "2015",
        title: "Student front-end developer",
        company: "Tallinna Polütehnikum",
        backgroundImage: Polu,
        description:
            "I embarked on my coding journey while studying multimedia at Tallinna Polütehnikum. My focus was on front-end development, where I learned the very basics of HTML and CSS. Admittedly, some of the content was rather easy since the year before I studied to become a front-end developer. Nonetheless, it marked the beginning of something greater.",
        achievements: [
            {
                title: "First Full-Fledged Coding Endeavor",
                content: "This was my initial deep dive into coding. Although the education wasn't at an advanced level, it provided an ideal environment for honing my skills and practicing good coding habits.",
                icon: null
            },
            {
                title: "Learned HTML",
                content: "Learned the fundamentals of HTML through various school projects.",
                icon: HTMLLogo
            },
            {
                title: "Learned CSS",
                content: "Learned CSS alongside HTML. I would include Javascript although exposure at this stage was minimal.",
                icon: CssLogo
            }
        ]
    },
    {
        year: "2017",
        title: "Junior front-end Developer",
        company: "Webshark",
        backgroundImage: Standard,
        description:
            "Began my career making landing pages and adverts for websites. Mastered the basics of HTML, CSS and a little bit of Javascript. This was also the time I was introduced to PHP and wordpress.",
        achievements: [
            {
                title: "First Real Job",
                content: "This was my first ever job working as a front-end developer, the experience was eye-opening and really let me know that this was the job for me. It might not have been amazing but for a beginner, it was a good stepping stone.",
                icon: null
            },
            {
                title: "Started Early",
                content: "Although my LinkedIn shows that I started in 2017, I actually began an early internship in 2016. This experience significantly enhanced my education, as I was able to apply what I was learning directly to real-world work.",
                icon: null
            },
            {
                title: "Learned Javascript",
                content: "Its at this time I finally got enough projects with Javascript to know it well enough to consider it part of my toolkit.",
                icon: JavaScriptLogo
            },
            {
                title: "Learned Sass",
                content: "As I worked at Webshark, we started to incorporate SCSS into our development process. It wasn't anything fully fledged but at this point, I can't imagine coding CSS without Sass.",
                icon: SassLogo
            },
            {
                title: "Learned Wordpress and SCSS",
                content: "Through working in Webshark, I managed to not only refine my Javascript skills but also pickup some new ones that were needed. I was head of wordpress development.",
                icon: WordpressLogo
            }
        ]
    },
    {
        year: "2021",
        title: "Front-end Developer",
        company: "Calashock",
        backgroundImage: Workland,
        description:
            "Worked with a proper team to build and maintain e-shops using BigCommerce as the base. Learned the basics of React and Handlebars. I also improved my communication skills by working closely with clients to understand their needs and navigate constraints.",
        achievements: [
            {
                title: "Working with a fully-fledged team.",
                content: "My previous job didn't have a large team, so joining Calashock's remote team that had members from across the world, it was truly something else. Working alongside designers, project managers, and a dedicated sales team. Not to mention more developers to cooperate with.",
                icon: null
            },
            {
                title: "Client Consultation",
                content: "With a fully fledged company, we got to interact with clients and have monthly meetings with them, regarding deadlines, issues, and other needs that we'd see if they needed to be met or were just concerns. It was refreshing being able to see the faces of the people I was working with so closely.",
                icon: null
            },
            {
                title: "Github etiquette",
                content: "With a team of developers, I had to learn how to use github properly. This was long overdue as now, even small projects that I work alone, I make sure to start with a github repo ready to commit to for any changes.",
                icon: GithubLogo
            },
            {
                title: "Learned React",
                content: "While this company primarily focused their attention of Handlebars, there were a few projects where we got to use React. It's unfortunate that we didn't get enough React projects, as once I started using it, I wished I could use it in every project.",
                icon: ReactLogo
            },
            {
                title: "Learned Typescript",
                content: "Of the few React Projects, typescript was a big part of the requirements. Learning it is a challenge but once you figure it out, can't live without it.",
                icon: TypeScriptLogo
            }
        ]
    },
    {
        year: "2023",
        title: "Senior front-end Developer",
        company: "Calashock",
        backgroundImage: Paavli,
        description: "Rejoined the company. Was given the opportunity of leading projects and development processes as well as communication. Had the opportunity to lead a development team.",
        achievements: [
            {
                title: "Senior Developer",
                content: "Because of my skillset, I was promoted to senior developer. This is where I learned what it’s like to lead a team and standardize coding practices.",
                icon: null
            },
            {
                title: "Development Lead",
                content: "This was a time when the company was busy with multiple projects. So much so that it left a hole in the development communications. I took the initiative to express ideas, raise concerns, and alleviate duties.",
                icon: null
            },
        ]
    },
];
