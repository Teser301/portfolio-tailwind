import { ProjectType } from "../types/project";
// Importing images to make it easier to apply changes should the need arise
import Podbike from "/assets/img/projects/podbike.jpg"
import Purrform from "/assets/img/projects/purrform.jpg"
import Davidoff from "/assets/img/projects/davidoff.jpg"
import Fisherhawaii from "/assets/img/projects/fisherhawaii.jpg"
import Jockofuel from "/assets/img/projects/jockofuel.jpg"
import Fullycharged from "/assets/img/projects/fullycharged.jpg"
import Quickcrop from "/assets/img/projects/quickcrop.jpg"
import Kimbo from "/assets/img/projects/kimbo.jpg"
import Vanillavalley from "/assets/img/projects/vanillavalley.jpg"
import Petworld from "/assets/img/projects/petworld.jpg"
import Beetbox from "/assets/img/projects/beetbox.jpg"
import Colourbyte from "/assets/img/projects/colourbyte.jpg"
import Goldenband from "/assets/img/projects/goldenband.jpg"
import Calashock from "/assets/img/projects/calashock.jpg"
import Pallas from "/assets/img/projects/pallas.jpg"
import Balbiino from "/assets/img/projects/balbiino.jpg"
import Haigekassa from "/assets/img/projects/haigekassa.jpg"
import If from "/assets/img/projects/if.jpg"
import Duo from "/assets/img/projects/duo.jpg"
import Kalev from "/assets/img/projects/kalev.jpg"
import BannerWork from "/assets/img/projects/bannerwork.jpg"

export const projects: ProjectType[] = [
    {
        title: "Podbike - Bigcommerce",
        description: "Podbike became a BigCommerce project. Earlier over the years, I worked on the WordPress version. As stated, the project eventually transitioned from WordPress to BigCommerce.",
        link: "https://podbike.com/",
        image: Podbike,
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2024",
        status: "Online",
        statusDate: "28/08/2024",
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "Purrform",
        description: "Purrform was a BigCommerce 'rescue' project. This meant that the company had a website in dire need of assistance, as it had been abandoned by the previous agency. Our company swooped in and helped it grow into the functional site it is now, although it still has some issues from that agency. Nevertheless, we managed to fix their styling, correct their maps so they are actually showing, fix their date-picking shipping options, and much more.",
        link: "https://www.purrform.co.uk/",
        image: Purrform,
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2024",
        status: "Online",
        statusDate: "28/08/2024",
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "Davidoff",
        description: "Davidoff was a big project already in development. I was brought on to help resolve bugs and optimize the code. Davidoff specializes in cigars and cigar-related products, and we were tasked with creating a headless project for them. For this, we developed the front-end in React and connected it to the BigCommerce back-end for purchases. Overall, I can’t comment much as I was brought on to help finish it, but we did win a design award for it.",
        link: "https://us.davidoffgeneva.com/",
        image: Davidoff,
        type: ["React", "Handlebars"],
        company: "Calashock",
        yearDate: "2024",
        status: "Online",
        statusDate: "28/08/2024",
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "Fisher Hawaii",
        description: "Fisher Hawaii was a BigCommerce project for a company specializing in office supplies. This was also one of my first projects as a senior developer that I took on myself after returning to the company. This helped re-align my development process and lead to the project being finished however never got published for outside reasons.",
        link: "#",
        image: Fisherhawaii,
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2023",
        status: "Didn't go Live",
        statusDate: null,
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "Jocko Fuel",
        description: "Jocko Fuel was a React project designed for a company specializing in sports supplements. This project was complex as we used a system called 'Storyboards' to build on top of it. To simplify, we coded the components in React TypeScript, then the client could log onto a third party 'storyboard', access the components, and modify them as they wished. When users went to the site to purchase anything, they would be redirected to BigCommerce. The project was ambitious and complicated, but I believe we delivered a competent, albeit experimental, result.",
        link: "https://jockofuel.com/",
        image: Jockofuel,
        type: ["React", "TypeScript", "Handlebars", "Storyboard"],
        company: "Calashock",
        yearDate: "2022",
        status: "Online but changed",
        statusDate: "28/08/2024",
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page", "Storyboard page", "Account subscriptions"],
        highlightTitle: "Too much",
        highlightDescription: "As you can probably tell, even I didn't fully understand the extent of this project. It involved so many people that it spiraled out of control. I'm not even sure if the website in use today is the one we delivered. All I can recall is that we delivered our part, and I was reassigned to a new project. This was a significant lesson in communication, as knowing the full extent of the project could have allowed us to adjust the demands to something simpler. Unfortunately, that was not the case.",
    },
    {
        title: "Fully Charged",
        description: "Fully Charged was a BigCommerce project developed for a company specializing in bicycles and bicycle equipment. This project was quite exhausting, featuring over 20+ widgets that the client could manage and organize to provide the best content without needing coding knowledge.",
        link: "https://www.fullycharged.com/",
        image: Fullycharged,
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2022",
        status: "Online",
        statusDate: "28/08/2024",
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page", "Subpages upon subpages"],
        highlightTitle: "Widgets",
        highlightDescription: "This site featured over 20 widgets, all aimed at allowing clients to build their own 'pages.' The site was heavy with pages, so they needed significant control over each one to maintain distinctiveness. Personally, the only regret I have is proposing a hover navigation bar. I remember bringing this up but didn't press the issue, and in hindsight, it was a poor decision.",
    },
    {
        title: "Quickcrop",
        description: "Quickcrop was a BigCommerce project developed by other team members before I was brought in to finalize a few changes and get it ready for launch. The company handles gardening and gardening accessories.",
        link: "https://www.quickcrop.ie/",
        image: Quickcrop,
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2022",
        status: "Online",
        statusDate: "28/08/2024",
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "Kimbo UK",
        description: "Kimbo was a BigCommerce project developed as a solo endeavor by me. I had previously worked with Kimbo in 2021, helping them with a site transition from WordPress. Once that was done, they returned in 2022 for a proper BigCommerce website. This website was modular, allowing the user to slide and add cards from the UI on the admin panel to create content. It was an enjoyable experience and mirrored some of the techniques used in React development.",
        link: "https://kimbo.co.uk/",
        image: Kimbo,
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2022",
        status: "Online",
        statusDate: "28/08/2024",
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page"],
        highlightTitle: "Modular Content",
        highlightDescription: "As described earlier, this website was built on the idea that users could build a page using BigCommerce's theme editor. The theme editor allowed users to drop widgets and edit their contents. I designed multiple widgets for users to display text and images in different styles, enabling them to create a page from scratch using these widgets.",
    },
    {
        title: "Vanilla Valley",
        description: "Vanilla Valley was a BigCommerce project developed by me and another developer. I admittedly came in late and focused on helping fix JavaScript issues the site had. The company specializes in cakes and related products (e.g., boxes, cake dummies, food coloring, boards, cards). I proposed solutions that helped speed up the process of getting the site live and provided insights to clients and our team about issues with certain plugins, including a search functionality that kept mismatching content from the filter.",
        link: "https://thevanillavalley.co.uk/",
        image: Vanillavalley,
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2022",
        status: "Online",
        statusDate: "28/08/2024",
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "Petworld Direct",
        description: "Petworld Direct was a multi-stage BigCommerce project. The company specialized in various products, with this specific sector focusing on food products for cats. The project was developed by me and another developer and was later reused by the Horkan Group for their other sites, such as 'Horkan's Garden Centre.'",
        link: "https://petworlddirect.ie/",
        image: Petworld,
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2022",
        status: "Online",
        statusDate: "28/08/2024",
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page"],
        highlightTitle: "Re-usable theme",
        highlightDescription: "The company that hired us specializes in numerous other products. When requesting a website, they also requested a few more. To streamline the process, we suggested creating a base theme that all their sites would use, with only minor styling changes for each. This meant the project had to be very sleek and easily modifiable with minimal tweaks.",
    },
    {
        title: "Beetbox",
        description: "Beetbox was one of the first projects where I got to fully utilize React. Beetbox was supposed to be a food delivery website, offering pre-made foods daily so users wouldn’t have to cook and could save money on healthy foods. This required coding reactive elements that could be updated with images, prices, text, etc., on a weekly or monthly basis. Unfortunately, the project never finished. I believe this was due to BigCommerce integration issues and the project’s scope getting out of hand.",
        link: "#",
        image: Beetbox,
        type: ["React", "Handlebars"],
        company: "Calashock",
        yearDate: "2021",
        status: "Didn't go Live",
        statusDate: null,
        features: ["Ordering Page", "Weekly Foods Page", "Modular Components"],
        highlightTitle: "First time with React",
        highlightDescription: "This was the project that finally got me to try out React. With the guidance of a fellow developer, it proved to be a very challenging learning curve, given the project's scope, but I believe it ultimately helped me hone my skills.",
    },
    {
        title: "Podbike - Wordpress",
        description: "Podbike was a WordPress project developed by the company. After finishing their homepage, I was reassigned to handle this project. The website was in a dire state as it had been done by an agency with limited knowledge. Our company hired a few developers to get it afloat. After addressing major issues, I managed to get the site to a semi-functional state. Unfortunately, the company had already declared it a lost cause and later switched to BigCommerce in 2024.",
        link: "#",
        image: Podbike,
        type: ["PHP", "Handlebars"],
        company: "Calashock",
        yearDate: "2021",
        status: "Offline",
        statusDate: null,
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page"],
        highlightTitle: "BigCommerce on Wordpress",
        highlightDescription: "This website was one of the first projects I worked on where it was 'headless.' This typically means it was working with another system in conjunction with BigCommerce. Usually, the new system would handle the front-end while BigCommerce would manage the back-end. This project combined WordPress and BigCommerce. While the functionality was intriguing, it was not officially supported at the time (or if it was, it was severely lacking in documentation). Nevertheless, this was a significant achievement, as the company won an award for this site.",
    },
    {
        title: "Colourbyte",
        description: "Colourbyte, a project underway before my arrival, focused on a company specializing in printers and related products. Although I did not lead this initiative, I contributed by developing a product calculator and implementing a badge system to display product status. I also supported the team by addressing bugs and resolving issues. I helped deliver the website as older team members moved on to newer projects.",
        link: "https://colourbyte.co.uk/",
        image: Colourbyte,
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2021",
        status: "Online",
        statusDate: "28/08/2024",
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "Sharon's Organic Market",
        description: "Sharon's Organic Market, internally known as 'Goldeband,' was a company specializing in food products. This project, one of my initial assignments at Calashock, involved using the BigCommerce Stencil. Unlike my previous roles focused on bug fixes and minor revisions, this was a solo endeavor that I completed in just two weeks.",
        link: "#",
        image: Goldenband,
        type: ["Handlebars"],
        company: "Calashock",
        yearDate: "2021",
        status: "Offline",
        statusDate: null,
        features: ["Product Listing Page", "Product Page", "Blog", "Account Page"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "Calashock",
        description: "My first project at Calashock was leading the development of their home website. I built it using WordPress and SASS, focusing on creating a sleek, responsive design to attract new clients and showcase the company's portfolio. As my first major project, it was a valuable learning experience in managing deadlines and communicating effectively with clients (who were my employer). While I’m proud of the final product, in hindsight, I would have approached some aspects differently. For example, I would have challenged certain client requests, as some features were rarely used or quickly altered after launch. Additionally, I would have prioritized adding a dark mode option to reduce eye strain on the bright interface.",
        link: "https://www.calashock.com/",
        image: Calashock,
        type: ["PHP", "SASS"],
        company: "Calashock",
        yearDate: "2021",
        status: "Online",
        statusDate: "28/08/2024",
        features: ["Portfolio Page", "Blog", "About Us"],
        highlightTitle: "Advanced Custom Fields",
        highlightDescription: "To effectively showcase the company's work, it was essential to create a website that could be easily updated by any representative, regardless of their technical expertise. To achieve this, we utilized the 'Advanced Custom Fields' plugin. This tool allows users to manage and modify website content without requiring technical skills. After developing a few simple templates for this plugin, we had our website.",
    },
    {
        title: "Pallas Art",
        description: "One of the few projects I worked on at Webshark involved making a website with a coworker using WordPress, SASS, and JS. The design was very different from a regular website, intended for an art school. We had to think of how to make the submenu feature work, where going to one page would open a new menu for subpages, and so on. In the end, I think we managed to strike a good balance, but looking back, I think we should have opted for something more usable instead of the esoteric design it now has.",
        link: "https://pallasart.ee/sisseastumine/",
        image: Pallas,
        type: ["PHP", "SASS"],
        company: "Webshark",
        yearDate: "2020",
        status: "Online but changed",
        statusDate: "28/08/2024",
        features: ["Admission Page", "Language Switch", "Search Functionality", "About us"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "Balbiino - Landing Page",
        description: "This was a landing page for a company advertising their summer beach festival. I used HTML, SASS, and basic JS to create it.",
        link: "#",
        image: Balbiino,
        type: ["HTML", "CSS"],
        company: "Webshark",
        yearDate: "2019",
        status: "Offline",
        statusDate: "28/08/2024",
        features: ["Winner Page", "Specific Icecream pages", "Rules"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "Haigekassa",
        description: "This project was for 'Haigekassa,' specifically the Estonian Healthcare agency, which was running a campaign to encourage users to 'move.' This was a duo project with another developer, and we used HTML, CSS, and Bootstrap. It featured a calculator and pages detailing the stories of brave individuals with disabilities who still manage to get out and 'move.' and a few more features",
        link: "#",
        image: Haigekassa,
        type: ["HTML", "CSS", "Bootstrap"],
        company: "Webshark",
        yearDate: "2019",
        status: "Offline",
        statusDate: "28/08/2024",
        features: ["Calculator", "Story Pages", "Language Selector (EST/RUS)"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "IF",
        description: "This was one of the more forgettable projects. If I recall correctly, we were assigned to create a template for an insurance company called 'IF.' There isn’t much to say other than it was a bog-standard website.",
        link: "#",
        image: If,
        type: ["HTML", "SASS"],
        company: "Webshark",
        yearDate: "2018",
        status: "Offline",
        statusDate: "28/08/2024",
        features: ["Insurance page", "Damage Handling", "Contact", "If Plus"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "Duo Lofts",
        description: "One of the first websites we worked on at Webshark was designed for a 'hotel-like' business where they would sell/rent lofts. Unfortunately, this was also the first project where we learned the hard way that we need planning. When I was assigned, I misunderstood the assignment and thought it was another landing page. This was also one of the first projects where I worked with a fellow developer.",
        link: "#",
        image: Duo,
        type: ["HTML", "SASS"],
        company: "Webshark",
        yearDate: "2018",
        status: "Offline",
        statusDate: "28/08/2024",
        features: ["Gallery", "Booking", "Contact", "3D Map"],
        highlightTitle: "3D",
        highlightDescription: "This project was too complex for us, and at the time, they requested that we add a 3D element to represent the hotel and allow users to rotate around it, similar to Google Maps. As you'd expect for a first-time developer, that was nearly impossible. In the end, we managed to create something competent, though I cannot take full credit for it as another developer worked day and night to get it working.",
    },
    {
        title: "Kalev - Landing Page",
        description: "One of the first landing pages I worked on was for an Estonian chocolate company called 'Kalev.' Looking through the code, I can only assume it was one of my first projects because I used Bootstrap for it. It's quite amateur to use a library like Bootstrap for a page as simple as this, but that's the sort of mistake you make when it's your first time.",
        link: "#",
        image: Kalev,
        type: ["HTML", "CSS", "Bootstrap"],
        company: "Webshark",
        yearDate: "2017",
        status: "Offline",
        statusDate: "28/08/2024",
        features: ["Landing Page", "Language Switch"],
        highlightTitle: null,
        highlightDescription: null,
    },
    {
        title: "Banner Work",
        description: "As a junior developer at Webshark, a typical 'job' for me was creating banners and email templates for our clients. This was mostly grunt work that I did over the years, and it was so much that I didn’t want to bloat my projects page with every single banner. Instead, consider this a compilation of my work. From 2016 to 2020, I worked on new banners every month, with websites and landing pages being rare projects in between. This kept the business afloat and taught me a lot about CSS and modular development.",
        link: "#",
        image: BannerWork,
        type: ["HTML", "CSS"],
        company: "Webshark",
        yearDate: "2016",
        status: "Unable to share",
        statusDate: "28/08/2024",
        features: ["Adverts", "Banners"],
        highlightTitle: "Making Banners",
        highlightDescription: "The challenge of making banners involves mastering CSS and understanding animation functions. Each banner was created to loop, so we had to design each animation to end the same way it started. They all also came in different sizes, which presented challenges for a beginner. Near the end of my time at Webshark, I learned how to code modular code that was effective for any size, reducing my workload from coding 28 banners to just a more manageable 4 banners.",
    },
];
