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
      skills: [
        "PostgreSQL",
        "Supabase",
        "Typescript",
        "NextJs",
        "Astro",
        "React",
        "AWS",
        "SST",
        "Tailwind",
        "CSS",
        "Figma",
      ],
      description:
        "As the Technical Cofounder of 4RL, I lead the development of solutions to combat the loneliness epidemic by fostering meaningful in-person connections. Through rapid prototyping and user testing, we validated product-market fit, facilitating 300+ in-person connections through our app. By collaborating with local government leaders and business owners, we are enhancing foot traffic to local establishments and community spaces. In addition to driving technical development, I manage fundraising, sales, and operations, ensuring the overall growth and success of this early-stage startup",
    },
    {
      company: "Codestache",
      link: "https://www.codestache.com/",
      badges: ["Remote"],
      title: "Software Engineering Consultant",
      start: "Sep 2022",
      end: "Apr 2024",
      skills: [
        "MySQL",
        "Typescript",
        "Python",
        "NextJs",
        "React",
        "React Native",
        "Electron",
        "AWS",
        "SST",
        "tRPC",
        "Tailwind",
        "CSS",
        "Figma",
      ],
      description:
        "I founded Code Stache to help emerging startups quickly prototype MVPs and turn ideas into viable products. I led the end-to-end development process, ensuring alignment between business objectives and technical execution. One of the products, Modal, a productivity SaaS application, gained significant traction and was featured on Product Hunt",
    },
    {
      company: "Epic",
      link: "https://www.epic.com/",
      badges: ["Madison, WI"],
      title: "Software Engineer Team Lead",
      start: "Sep 2019",
      end: "Jul 2022",
      skills: [
        "Javascript",
        "Typescript",
        "React",
        "C#",
        "M",
        "CSS",
        "Sass/Scss",
        "Balsamiq",
      ],
      description:
        "At Epic, I built and led a team responsible for scaling a new healthcare application, which contributed to significant new sales and customer acquisition. I mentored engineers and managed staff. Before becoming a manager, I played a crucial role in migrating the legacy codebase to a web-based stack using React, scaling patient records exchanges to over 250 million per month",
    },
    {
      company: "UVA",
      link: "https://www.mindtrails.virginia.edu/",
      badges: ["Charlottesville, VA"],
      title: "Machine Learning Researcher",
      start: "Aug 2018",
      end: "May 2019",
      skills: ["Python", "NumPy", "Pandas", "scikit-learn", "SQL"],
      description:
        "As a Machine Learning Researcher at the University of Virginia, I created a model to identify high-risk anxiety patients in a clinical psychology program. This model was implemented for over 1000 participants. My ongoing work in a part-time/on-demand capacity led to co-authorship on a paper accepted by the Journal of Medical Internet Research (Jun 2024) and inclusion in the upcoming ABCT Symposium (Nov 2024)",
    },
    {
      company: "Epic",
      link: "https://www.epic.com/",
      badges: ["Madison, WI"],
      title: "Software Engineer Intern",
      start: "May 2018",
      end: "Aug 2018",
      skills: ["Javascript", "C#", "MSSQL"],
      description:
        "During my internship at Epic, I developed a data visualization tool that enabled detailed analysis of social determinants of health for researchers. This tool facilitated a better understanding of patient backgrounds and improved healthcare delivery. My work involved creating a star-schema data model and an ETL process using MSSQL and the M language, with visualization done using JavaScript",
    },
  ],
  projects: [
    {
      title: "Digital Icebreaker",
      techStack: [
        "Nextjs",
        "Tailwind",
        "SQL",
        "Supabase",
        "AWS (SST)",
        "Drizzle",
      ],
      description:
        "An early prototype for 4RL that could be used in person for events, conferences, and meetups.",
      link: "https://beta.4rlapp.com/",
    },
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
        "Built for the campus maintenance team at my university. The search engine allowed workers to search sensor data from IoT devices to monitor things like temperature and CO2.",
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
        "Bookish is a semantic search engine that finds books based on the semantic meaning of your query. Typical AI apps make LLMs the UI, but I was interested in other ways of using LLMs to personalize content.",
      link: "https://github.com/third-systems/book-search",
    },
    {
      title: "Dex",
      techStack: ["SoldJS", "Go", "Tailwindcss", "AWS (SST)"],
      description:
        "Personal contacts manager to keep track of networking connections",
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
