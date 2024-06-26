import { GithubIcon, LinkedinIcon } from "lucide-react";

export const RESUME = {
  name: "Elijah Lewis",
  initials: "EL",
  location: "Washington, DC, USA",
  locationLink: "https://www.google.com/maps/place/Washington,+DC",
  about:
    "Product-oriented Full Stack Engineer with expertise in AI, dedicated to creating exceptional user experiences",
  summary:
    "As a Full Stack Engineer, I excel in transforming product concepts into market-ready solutions, building scalable, user-friendly systems, and mentoring talented teams. My solo projects, including a SaaS product featured on Product Hunt, demonstrate my ability to identify market needs and deliver high-quality solutions. My work in machine learning was recognized with High Distinctions from UVA. I am currently exploring new opportunities to leverage my skills in a new venture.",
  avatarUrl:
    "https://media.licdn.com/dms/image/D4E03AQFVuFWdRAycEw/profile-displayphoto-shrink_800_800/0/1683078934283?e=1724889600&v=beta&t=6a8C4MaQmAtUzulDdqXhv4l39KJYbCbYpqPvUjrj2b4",
  personalWebsiteUrl: "https://www.roze.dev/",
  contact: {
    email: "hello@elijahlewis.dev",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/itsRoze/",
        icon: GithubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lewiselijah/",
        icon: LinkedinIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Virginia",
      degree:
        "Bachelor's Degree in Computer Science (Awarded High Distinctions)",
      // start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "4RL",
      link: "https://www.4rlapp.com/",
      badges: ["Washington DC"],
      title: "Technical Cofounder",
      start: "Apr 2024",
      end: "Jun 2024",
      description:
        "Solving the loneliness epidemic through AI-powered social toolkit for locals to find community and friendship. Sole engineer designing mockups and building prototypes. Outside of engineering, as a cofounder, I put on many hats including fundraising, sales, and operations",
    },
    {
      company: "Codestache",
      link: "https://www.codestache.com/",
      badges: ["Remote"],
      title: "Founder & Engineer",
      start: "Sep 2022",
      end: "Apr 2024",
      description:
        "As an independent software engineer, I designed and built Modal which has been featured on Product Hunt. I also prototyped MVPs for early-stage startups.",
    },
    {
      company: "Epic",
      link: "https://www.epic.com/",
      badges: ["Madison, WI"],
      title: "R&D Team Lead",
      start: "Sep 2019",
      end: "Jul 2022",
      description:
        "Led the infrastructure team developing a new app achieving ~20,000 lab orders monthly. Migrated code to React + scaled for ~250 million patient records exchanges per month. Redesigned the app UI to boost clinical training promoting an educational video on advanced features. This initiative resulted in the video becoming the company's fastest-growing educational resource.",
    },
    {
      company: "Epic",
      link: "https://www.epic.com/",
      badges: ["Madison, WI"],
      title: "Software Engineer Intern",
      start: "May 2018",
      end: "Aug 2018",
      description:
        "Developed a backend data visualization feature using MSSQL, C#, JavaScript, and M to enhance medical research on social determinants of health. Designed the entire data model, enabling detailed analysis and insights for researchers",
    },
  ],
  skills: [
    {
      area: "Databases",
      skills: ["SQL", "MySQL", "Postgres", "Mongo", "Vector databases"],
    },
    {
      area: "Web",
      skills: [
        "Javascript",
        "Typescript",
        "NextJS",
        "Astro",
        "SolidJS",
        "React",
        "React Native",
        "Electron",
        "HTML",
        "Amazon AWS",
        "Serverless Stack (SST)",
        "Supabase",
        "REST",
        "RPC",
        "Go",
      ],
    },
    {
      area: "UI",
      skills: ["CSS", "Tailwind", "Sass/Scss", "Bootstrap", "Figma"],
    },
    {
      area: "ML/AI",
      skills: [
        "Python",
        "NumPy",
        "OpenAI",
        "LangChain",
        "Pinecone",
        "HuggingFace",
      ],
    },
  ],
  projects: [
    {
      title: "Attrition Prediction to Reduce Anxious Thinking",
      techStack: ["python", "scikit-learn", "pandas", "NumPy"],
      description:
        "Designed an ML algorithm to identify at-risk anxiety patients needing psychiatric intervention for a UVA psychology research program",
      link: "https://preprints.jmir.org/preprint/51567",
    },
    {
      title: "Modal",
      techStack: [
        "AWS (SST)",
        "NextJS",
        "Drizzle",
        "MySQL",
        "PlanetScale",
        "tRPC",
        "Tailwindcss",
        "Stripe",
      ],
      description:
        "My first SaaS app. I never found a great productivity manager, so I built an opinionated one. Modal was designed with simplicity for the everyday user. Featured on Product Hunt",
      link: "https://usemodal.com/",
    },
    {
      title: "IoT Search Engine",
      techStack: ["SQL", "Angular", "Express"],
      description:
        "Built for the campus maintainance team at my university. The search engine allowed workers to search sensor data from IoT devices to monitor things like temperature and CO2.",
      link: "https://docs.google.com/presentation/d/e/2PACX-1vRaaSJg944iaiN75v8j0G9C7yWL0QFn8OMvCcW_Gm3mjOELJnyPz6ZSR9JMdf8hioSI18LeVj2FNruz/pub?start=false&loop=false&delayms=3000#slide=id.g464c87f956_0_902",
    },
    {
      title: "Bookish",
      techStack: [
        "Pandas",
        "Supabase",
        "pgvector",
        "LangChain",
        "NextJS",
        "Tailwindcss",
        "Drizzle",
      ],
      description:
        "Bookish is a semantic search engine that finds books based on the semantic meaning of your query. Typical AI apps make LLMs that UI, but I was interested in other ways of using LLMs to personalize content.",
      link: "https://github.com/third-systems/book-search",
    },
    {
      title: "Dex",
      techStack: ["SoldJS", "Go", "Tailwindcss", "AWS (SST)"],
      description:
        "Bookish is a semantic search engine that finds books based on the semantic meaning of your query. Typical AI apps make LLMs that UI, but I was interested in other ways of using LLMs to personalize content.",
      link: "https://github.com/itsRoze/dex",
    },
    {
      title: "Immigration Data Visualization",
      techStack: ["Javascript", "D3"],
      description: "Analyzed how US immigration has changed over the years",
      link: "https://immigration-viz.surge.sh/",
    },
  ],
} as const;
