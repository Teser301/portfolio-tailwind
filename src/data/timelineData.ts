import { Timeline } from "../types/timeline";
import ReactLogo from "../assets/icons/react.svg";
import HTMLLogo from "../assets/icons/html5.svg";
import JavaScriptLogo from "../assets/icons/javascript.svg";
import WordpressLogo from "../assets/icons/wordpress.svg";
import SassLogo from "../assets/icons/sass.svg";
export const experiences: Timeline[] = [
    {
        year: "2015",
        title: "Student front-end developer",
        company: "Tallinna Polütehnikum",
        backgroundImage: "/src/assets/polu.jpg",
        description:
            "I embarked on my coding journey while studying multimedia at Tallinna Polütehnikum. My focus was on front-end development, where I learnt the very basics of HTML and CSS. Admitedly some of the content was rather easy since the year before I studied to become a front-end developer. Nevertheless, this was the start of something greater.",
        achievements: [
            {
                title: "First Full-Fledged Coding Endeavor:",
                content: "This was my initial deep dive into coding. Although the education wasn't at an advanced level, it provided an ideal environment for honing my skills and practicing good coding habits.",
                icon: null
            },
            {
                title: "Learnt HTML and CSS",
                content: "I learned the fundamentals of HTML and CSS, picking up some JavaScript along the way. While I wasn't yet an expert, this foundation was crucial for my development as a front-end developer.",
                icon: HTMLLogo
            }
        ]
    },
    {
        year: "2017",
        title: "Junior front-end Developer",
        company: "Webshark",
        backgroundImage: "/src/assets/standard.jpg",
        description:
            "Began my career making landing pages and adverts for websites. Mastered the basics of HTML, CSS and a little bit of Javascript. This was also the time I was introduced to PHP and wordpress.",
        achievements: [
            {
                title: "First Real Job",
                content: "This was my first ever job working as a front-end developer, the experience was eye-opening and really let me know that this was the job for me. It might not have been amazing but for a beginner, it was a good stepping stone.",
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
        backgroundImage: "/src/assets/workland.jpg",
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
                title: "Github organization",
                content: "With a team of developer, I had to learn how to use github properly. This was long overdue as now, even small projects that I work alone, I make sure to start with a github repo ready to commit to for any changes.",
                icon: null
            },
            {
                title: "Learned React",
                content: "While this company primarely focused their attention of Handlebars, there were a few projects where we got to use React. It's a shame that we didnt get enough projects as once I started using react, I wished it could be in every project.",
                icon: ReactLogo
            }
        ]
    },
    {
        year: "2023",
        title: "Senior front-end Developer",
        company: "Calashock",
        backgroundImage: "/src/assets/paavli.jpg",
        description: "Rejoined the company. Was given the opportunity of leading projects and development process's as well as communication. Managed to lead a team for a short time.",
        achievements: [
            {
                title: "Senior Developer",
                content: "Because of my skillset, I was promoted to senior developer. This is where I learned what its like to lead a team and help standardize coding methods.",
                icon: null
            }
        ]
    },
];
