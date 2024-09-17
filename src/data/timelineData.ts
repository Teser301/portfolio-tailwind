import { Timeline } from "../types/timeline";
import ReactLogo from "../assets/icons/react.svg";
import HTMLLogo from "../assets/icons/html5.svg";
import JavaScriptLogo from "../assets/icons/javascript.svg";
import WordpressLogo from "../assets/icons/wordpress.svg";
import SassLogo from "../assets/icons/sass.svg";
import GithubLogo from "../assets/icons/github.svg"
import TypeScriptLogo from "../assets/icons/typescript.svg"
import CssLogo from "../assets/icons/css.svg"
export const experiences: Timeline[] = [
    {
        year: "2015",
        title: "Student front-end developer",
        company: "Tallinna Polütehnikum",
        backgroundImage: "./assets/polu.jpg",
        description:
            "I embarked on my coding journey while studying multimedia at Tallinna Polütehnikum. My focus was on front-end development, where I learnt the very basics of HTML and CSS. Admitedly some of the content was rather easy since the year before I studied to become a front-end developer. Nevertheless, this was the start of something greater.",
        achievements: [
            {
                title: "First Full-Fledged Coding Endeavor",
                content: "This was my initial deep dive into coding. Although the education wasn't at an advanced level, it provided an ideal environment for honing my skills and practicing good coding habits.",
                icon: null
            },
            {
                title: "Learned HTML",
                content: "Through various school projects, we learned the basic fundamentals of HTML",
                icon: HTMLLogo
            },
            {
                title: "Learned CSS",
                content: "Can't learn HTML without also learning a bit of CSS. I would include Javascript aswell but it was rather lackluster at this stage",
                icon: CssLogo
            }
        ]
    },
    {
        year: "2017",
        title: "Junior front-end Developer",
        company: "Webshark",
        backgroundImage: "./assets/standard.jpg",
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
                content: "While on my Linkedin it says that I started in 2017, offically I actually did a early internship starting as early as 2016. This really helped boost my education as I was applying everything I was learning to my real work.",
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
        backgroundImage: "./assets/workland.jpg",
        description:
            "Worked with a proper team to build and maintain e-shops using BigCommerce as the base. Learned the basics of React, Vue and Handlebars. Learned to communicate with clients about their needs and how best to work with their constraints",
        achievements: [
            {
                title: "Working with a fully-fledged team.",
                content: "My previous job didn't have an expansive team, so when I was able to join calashocks remote team that had members from across the world, it was truly something else. Designers, Project managers and our own Sales team. Not to mention more developers to cooperate with.",
                icon: null
            },
            {
                title: "Client Consultation",
                content: "With a fully fledged company, we got to interact with clients and have monthly meetings with them, regarding deadlines, issues, and other needs that we'd see if they needed to be met or were just concerns. It was refreshing being able to see the faces of the people I was working with so closely.",
                icon: null
            },
            {
                title: "Github etiquette",
                content: "With a team of developer, I had to learn how to use github properly. This was long overdue as now, even small projects that I work alone, I make sure to start with a github repo ready to commit to for any changes.",
                icon: GithubLogo
            },
            {
                title: "Learned React",
                content: "While this company primarely focused their attention of Handlebars, there were a few projects where we got to use React. It's a shame that we didnt get enough projects as once I started using react, I wished it could be in every project.",
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
        backgroundImage: "./assets/paavli.jpg",
        description: "Rejoined the company. Was given the opportunity of leading projects and development process's as well as communication. Managed to lead a team for a short time.",
        achievements: [
            {
                title: "Senior Developer",
                content: "Because of my skillset, I was promoted to senior developer. This is where I learned what its like to lead a team and help standardize coding methods.",
                icon: null
            },
            {
                title: "Development Lead",
                content: "This was a time when the company was busy with multiple projects. So much so that it left a hole in the development communications. I put myself forward and helped express ideas, put forward concerns and help eleviate duties.",
                icon: null
            },
        ]
    },
];
