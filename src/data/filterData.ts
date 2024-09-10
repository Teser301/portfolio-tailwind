
import { Filter } from "../types/filter";
// import ReactLogo from "../assets/icons/react.svg";
import Wordpress from "../assets/icons/wordpress.svg";
import Handlebars from "../assets/icons/handlebars.svg";


export const filters: Filter[] = [
    {
        name: "All",
        icon: null,
        description: "Showing all projects.",
    },
    // {
    //   name: "React",
    //   icon: ReactLogo,
    //   description: "Displaying projects built with React.",
    // },
    {
        name: "PHP",
        icon: Wordpress,
        description:
            "Here are the projects developed using PHP, mainly with Wordpress",
    },
    {
        name: "Handlebars",
        icon: Handlebars,
        description:
            "These projects utilize Handlebars templates, mainly for BigCommerce",
    },
];