import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    itinker,
    megazebra,
    k8s,
    aws,
    cryptoNexa,
    phoenix,
    company
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "kubernetes",
        icon: k8s
    },
    {
        name: "aws",
        icon: aws
    },
];

const experiences = [
    {
        title: "Full Stack Developer Intern",
        company_name: "Itinker",
        icon: itinker,
        iconBg: "#383E56",
        date: "March 2021 - April 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Itinker",
        icon: itinker,
        iconBg: "#383E56",
        date: "May 2022 - Dec 2022",
        points: [
            "Designed and implemented robust middleware solutions using Docker and Kubernetes improving deployment efficiency by 90%.",
            "Developed and implemented a web application in React for mmtcpamp.com, enhancing user engagement and online sales by 50%.",
            "Implemented performance optimizations for the front end of Itinker Website using React resulting in a 30% improvement in page load times.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Itinker",
        icon: itinker,
        iconBg: "#383E56",
        date: "Jan 2023 - Aug 2024",
        points: [
            "Containerized a PHP backend and automated release pipelines with AWS, Docker, Kubernetes, and Terraform, cutting redundant deployment tasks by 80% for a high-traffic game (MahjongTrails).",
            "Built efficient multi-stage Docker images for Node.js services, integrated into Groovy pipelines to streamline image creation, tagging, and AWS ECR uploads, reducing image build time by 40%.",
            "Built a full-stack web app with React, TypeScript, and Node.js, boosting user engagement and online sales by 50%.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Rencom Networks",
        icon: company,
        iconBg: "#383E56",
        date: "May 2024 - Current",
        points: [
            "Developed a high-performance frontend for a real-time crypto platform using Next.js and TypeScript, enabling seamless tracking of thousands in token swaps and boosting user engagement. (banxchange.com)",
            "Enhanced user experience for ~10k daily users (X) by reducing REST API latency by 47% (Y) through backend load balancing on Azure and frontend optimizations with React Query and server-side rendering.",
            "Improved Node.js performance by 35% by eliminating blocking code and applying async patterns like Promise.all and worker threads.",
            "Designed and deployed 3 Node.js microservices on Azure AKS, integrating real-time data sources via RESTful APIs to enable scalable, low-latency system performance."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "CryptoNexa",
        description:
            "CryptoNexa is an active Django-powered project focused on providing a comprehensive cryptocurrency market data platform. Dive into real-time cryptocurrency insights, market trends, and historical data.",
        tags: [
            {
                name: "django",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: cryptoNexa,
        source_code_link: "https://github.com/CryptoNexa/CryptoNexa",
    },
    {
        name: "Phoenix",
        description:
            "Phoenix is a mobile app focuses on creating an engaging application designed to strengthen familial bonds and boost self-esteem for individuals facing emotional challenges due to physical changes. It offers a creative alternative to foster communication and positive self-perception.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: phoenix,
        source_code_link: "https://github.com/ShauRya765/phoenix-frontend",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export {services, technologies, experiences, testimonials, projects};