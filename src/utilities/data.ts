export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  slug: string;
  longDescription?: string;
  features?: string[];
  challenges?: string;
  images?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    title: "Scrollshelf",
    description:
      "A full-stack book management website built with the MERN stack and styled with Tailwind CSS.",
    longDescription:
      "Scrollshelf is a CRUD web application designed to manage a collection of books. Built using the MERN stack (MongoDB, Express, React, Node.js), it allows users to create, read, update, and delete book entries through a responsive and clean interface styled with Tailwind CSS. The app includes form validation, modal interactions, and real-time UI updates for a smooth user experience.",
    features: [
      "Full CRUD operations for book data",
      "Responsive design with Tailwind CSS",
      "Form validation and modal interactions",
      "Dynamic routing and SPA navigation",
      "MongoDB for data storage",
    ],
    challenges:
      "Ensuring seamless UI state synchronization with the database was a core challenge. Handling form input validation, and conditional rendering for different user actions, required careful React state management and component structuring.",
    image: "/scrollshelf.png",
    tech: ["React", "Redux", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
    github: "https://github.com/viqarrr/bookshelf-app",
    live: "https://scrollshelf-achpyf6fa-viqars-projects-a69aa45f.vercel.app/",
    slug: "scrollshelf",
  },
  {
    title: "WorkFinder",
    description:
      "A job search platform built as a Capstone Project for Dicoding Coding Camp powered by DBS Foundation 2025.",
    longDescription:
      "WorkFinder is a collaborative job search platform developed as a Capstone Project for the Dicoding Coding Camp powered by DBS Foundation 2025. The platform aims to help users discover job opportunities efficiently. My main responsibility in this project was developing the backend API using Node.js and Express, integrating with MongoDB for data persistence. I also implemented basic JWT-based authentication to secure user sessions and collaborated with the frontend team to ensure smooth integration.",
    features: [
      "RESTful API development with Express",
      "User authentication with JWT",
      "MongoDB integration for job listings",
      "Backend collaboration in a team environment",
      "Structured API documentation for front-end consumption",
    ],
    challenges:
      "Collaborating in a team required clear API contracts and consistent data models. Managing authentication and securing routes with JWT tokens while ensuring smooth communication between frontend and backend was a key focus.",
    image: "/workfinder.png",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/viqarrr/capstone-project-dbsfcc25",
    live: "https://capstone-project-dbsfcc25.vercel.app/",
    slug: "workfinder",
  },
  {
    title: "Portal Pesantren",
    description:
      "A CRUD web portal for Islamic boarding school data management built with PHP Native and Tailwind CSS.",
    longDescription:
      "Portal Pesantren is a web-based CRUD application developed using PHP Native. It allows administrators to manage student, staff, and activity data efficiently. The UI is styled with Tailwind CSS, offering a modern and responsive design without relying on a framework like Laravel.",
    features: [
      "PHP Native CRUD functionality",
      "Structured MVC folder organization",
      "Responsive UI with Tailwind CSS",
      "Multi-page navigation with session handling",
      "Simple and functional admin dashboard",
    ],
    challenges:
      "Building a clean and maintainable codebase in pure PHP required careful planning of the structure and routing. Styling the interface from scratch with Tailwind CSS also involved fine-tuning responsive behavior and layout consistency.",
    image: "/ponpes.png",
    tech: ["PHP", "MySQL", "Javascript", "Tailwind CSS"],
    github: "https://github.com/viqarrr/portal-pesantren",
    slug: "portal-pesantren",
  },
  {
    title: "Will of the Ancestor (WOTA)",
    description:
      "A 3D open-world fighting game set in an alternate 19th-century Indonesian war scenario.",
    longDescription:
      "Will of the Ancestor (WOTA) is a Unity-powered open-world fighting game where players step into the role of a hero defending Pulanesia—a fictional island inspired by Indonesia. Set in an alternate 19th century, the game combines melee combat, exploration, and narrative storytelling. I worked as a programmer, implementing gameplay mechanics, character control, enemy AI, and event triggers using C#.",
    features: [
      "3D open-world map with navigable terrain",
      "Third-person melee combat system",
      "Enemy AI behavior and combat patterns",
      "Quest and event scripting in C#",
      "Unity animator and state machine integration",
    ],
    challenges:
      "Designing scalable code for large open-world mechanics was complex. Balancing performance while implementing dynamic AI behaviors and trigger-based interactions required optimization and clean Unity event handling.",
    image: "/WOTA.png",
    tech: ["Unity", "C#"],
    live: "https://infinitygameworks.itch.io/will-of-the-anchestor",
    slug: "will-of-the-ancestor",
  },
];
