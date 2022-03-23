type Project = {
  height: number;
  width: number;
  src: string;
  title: string;
  description: string;
  emoji: string;
  links: {
    site: string;
    code: string;
  };
};
export const projects: Project[] = [
  {
    height: 747,
    width: 1583,
    src: '/audiophile.png',
    title: 'Audiophile',
    emoji: '🎧',
    description: `Used GraphCMS like a database to store images, create relations
            between data, and test queries. Nest.js to serve as a reverse proxy
            between GraphCMS and the client. Graphql Codegen to generate types
            and create code to make api calls. NX, Next.js, and Styled
            Components to build components and pages.`,
    links: {
      site: 'https://sd-audiophile.netlify.app/',
      code: 'https://github.com/Skidragon/monorepo-portfolio',
    },
  },
  {
    height: 726,
    width: 800,
    src: '/memory.png',
    title: 'Memory',
    emoji: '🤔',
    description: `This project is created with XState, Styled Components, Jest, and
            Next.js. I had to use the actor model and state machines to create
            the logic for the game, and I used radio buttons for the create game
            form for accessibility purposes. This is still a work in progress. I
            plan to add more features such as: a score screen after the game is
            over, a timer and moves display for single player, and using arrow
            buttons to navigate the board. Afterwards build a back-end using
            Nest.js and use websockets to create a real-time experience and
            create lobbies for players to join rooms.`,
    links: {
      site: 'https://sd-memory.netlify.app/',
      code: 'https://github.com/Skidragon/monorepo-portfolio',
    },
  },
  {
    height: 745,
    width: 1093,
    src: '/advice-gen.png',
    title: 'Advice Generator',
    emoji: '🧓',
    description: `This project was made as a challenge based on a design file and is
            part of a monorepo (NX). I used HTML5, along with Styled Components
            (styling), and React Query paired with Axios for Data Fetching.`,
    links: {
      site: 'https://advice-generator-ashen.vercel.app/',
      code: 'https://github.com/Skidragon/monorepo-portfolio',
    },
  },
  {
    height: 531,
    width: 1068,
    src: '/tower-of-hanoi.png',
    title: 'Tower of Hanoi',
    emoji: '🗼',
    description: `Xstate was used to control state which simplified making the game
            compared to the out-of-the-box state management given by React. Used
            Typescript to document the code.`,
    links: {
      site: 'https://tower-of-hanoi-two.vercel.app/',
      code: 'https://github.com/Skidragon/monorepo-portfolio',
    },
  },
  {
    height: 746,
    width: 1070,
    src: '/loopstudios.png',
    title: 'Loopstudios Landing Page',
    emoji: '🎮',
    description: `CSS Grid was used to make most of the site responsive. Next.js to
            make the navigation bar animation run when scrolled past a certain
            point using observers and closing the mobile navigation bar using
            the escape key.`,
    links: {
      site: 'https://loopstudio-nu.vercel.app/',
      code: 'https://github.com/Skidragon/loopstudio',
    },
  },
  {
    height: 556,
    width: 1508,
    src: '/typemaster-keyboard.png',
    emoji: '⌨️',
    title: 'Typemaster Landing Page',
    description: `This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5 while making sure the site was
            accessible and SCSS with flexbox to make it responsive. Snowpack is
            used to create a production build.`,
    links: {
      site: 'https://sd-typemaster-prelaunch-page.vercel.app/',
      code: 'https://github.com/Skidragon/sd-typemaster-prelaunch-page',
    },
  },
];
