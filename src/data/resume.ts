// Content authority: July 2026 resume (Resume___Current.pdf). Keep in sync with
// the CV page. Plainspoken register per DESIGN.md Voice — no marketing gloss.

export interface WorkItem {
  company: string;
  context?: string; // the parenthetical framing from the resume
  link?: string;
  location: string;
  title: string;
  start: string;
  end: string;
  bullets: string[];
  skills?: string[]; // mono chips — only where the resume states a stack
}

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  start: string;
  end: string;
}

export const RESUME = {
  name: "Elijah Lewis",
  location: "New York City",
  summary:
    "Software engineer at First Round Capital. I build internal tools for a small investment team, write about software and cooperatives, and did machine-learning research on anxiety interventions at UVA.",
  contact: {
    email: "hello@elijahlewis.dev",
    tel: "703-554-7193",
    linkedin: "https://www.linkedin.com/in/lewiselijah/",
    github: "https://github.com/itsRoze",
    website: "https://elijahlewis.dev",
  },
  work: [
    {
      company: "First Round Capital",
      context: "top-tier seed-stage VC — Uber, Notion, Roblox",
      link: "https://firstround.com/",
      location: "New York City",
      title: "Software Engineer",
      start: "Oct 2024",
      end: "Present",
      bullets: [
        "One of two engineers firm-wide, owning end-to-end design, data, infra, and vendor decisions for the firm's internal product platform; shadow partners during live deal flow meetings to inform product decisions.",
        'Co-shipped "At A Glance," the firm\'s daily-driver deal review tool used by every partner, chief of staff, and investor; described internally as mission-critical and credited with helping the firm review a record-high 10,000+ investment opportunities in a single year.',
        'Co-designed and built "First Source," scanning the open web and third-party APIs (Harmonic, Twitter, etc.) to surface emerging startups; aggregates 200+ AI-enriched signals weekly for structured human review.',
        "Proposed and led adoption of the firm's modern engineering stack for all new systems.",
        "Pioneered AI-first development: first to adopt Claude Code, developed approaches for grounding it in the firm's business context, shipped 100% AI-coded PRs, and established patterns adopted by the team.",
      ],
      skills: ["TypeScript", "AWS serverless", "Postgres", "Supabase"],
    },
    {
      company: "Inner File Software",
      context: "human rights investigations",
      location: "Remote",
      title: "Human Rights Volunteer Software Engineer",
      start: "Jan 2024",
      end: "Present",
      bullets: [
        "Built a public-facing data visualization (museum exhibit, viral on Reddit/TikTok) and internal research tooling that doubled investigator throughput; work has been cited in major human rights reports supporting advocacy and international accountability.",
      ],
    },
    {
      company: "Codestache LLC",
      context: "personal umbrella for independent products and prototyping",
      location: "Remote",
      title: "Founder",
      start: "Sep 2022",
      end: "Present",
      bullets: [
        "Launched Modal (usemodal.com), a productivity SaaS featured on Product Hunt, and Bookish, an AI semantic search engine over 9,000+ books using vector databases, HuggingFace, and LangChain — shipped before semantic search hit the mainstream.",
      ],
      skills: ["Vector databases", "HuggingFace", "LangChain"],
    },
    {
      company: "4RL",
      context: "early-stage social startup combating the loneliness epidemic",
      link: "https://www.4rlapp.com/",
      location: "Washington, D.C.",
      title: "Founding Engineer",
      start: "Apr 2024",
      end: "Oct 2024",
      bullets: [
        "Shipped the initial beta app and marketing site; drove early validation with 300+ in-person connections logged in the beta database; partnered with the founder on accelerator applications.",
      ],
      skills: ["Next.js", "TypeScript", "AWS", "Supabase"],
    },
    {
      company: "Epic",
      context: "Care Everywhere — healthcare interoperability platform",
      link: "https://www.epic.com/",
      location: "Madison, WI",
      title: "Software Engineering Manager (R&D Team Lead)",
      start: "Sep 2019",
      end: "Jul 2022",
      bullets: [
        "Promoted to Medium Team Lead within one year of becoming an IC; managed 5 direct reports as one of two team leads in Care Everywhere's Results division (labs and imaging, ~50 people), setting roadmap and coordinating across adjacent teams.",
        'Drove rollout of "Aura," one of the largest projects in Care Everywhere and still referenced in Epic staff meetings; contributed directly to sales proposals for early customers who became paying customers; represented the platform in sales calls and on-site hospital visits.',
        "Previously as IC, contributed to scaling patient record exchange to 250M+ records/month as part of the legacy migration to React and C#; led UI modernization for clinical training that became Epic's top-performing educational tool of the year by views.",
      ],
      skills: ["React", "C#"],
    },
    {
      company: "University of Virginia",
      context: "Teachman Lab / Barnes Lab, Dept. of Psychology",
      link: "https://www.mindtrails.virginia.edu/",
      location: "Charlottesville, VA",
      title: "Machine Learning Researcher",
      start: "Aug 2018",
      end: "Jun 2024",
      bullets: [
        "Built ML models (random forest, logistic regression) for predicting early dropout from web-based cognitive bias interventions for anxiety; F1 ~0.92 across ~1,200 participants.",
        "Co-authored two peer-reviewed publications: Baee et al., JMIR Mental Health (2024); Eberle et al., Journal of Consulting and Clinical Psychology (APA, 2024). Presented at ABCT 2024.",
      ],
      skills: [
        "Python",
        "scikit-learn",
        "Random forest",
        "Logistic regression",
      ],
    },
  ] satisfies WorkItem[],
  education: [
    {
      school: "University of Virginia",
      degree: "B.A. in Computer Science — awarded High Distinctions",
      location: "Charlottesville, VA",
      start: "Aug 2014",
      end: "May 2019",
    },
  ] satisfies EducationItem[],
  skills: {
    "AI / LLM": [
      "Claude Code",
      "Codex",
      "MCP",
      "Parallel",
      "OpenAI",
      "RAG",
      "Agentic workflows",
      "Prompt engineering",
    ],
    Languages: ["TypeScript", "Python", "JavaScript", "SQL", "C#"],
    "Systems & Tools": [
      "AWS",
      "Postgres",
      "Supabase",
      "pgVector",
      "React",
      "Next.js",
      "Tailwind",
      "Docker",
      "GitHub Actions",
    ],
  },
} as const;
