// ---------------------------------------------------------------------------------
//                            Définiton des descriptions
// ---------------------------------------------------------------------------------

// ─── Skills ─────────────────────────────────────────────
const SKILLS = [
  { category: "Langages", items: ["HTML / CSS", "JavaScript", "Python", "SQL"] },
  { category: "Frameworks & Outils", items: ["React", "Git & GitHub", "VS Code", "BurpSuite"] },
  { category: "Concepts", items: ["POO", "Responsive Design"] },
];
const SKILL_LEVELS = { "HTML / CSS": 80, "JavaScript": 65, "Python": 70, "C / C++": 50, "React": 60, "Git & GitHub": 75, "VS Code": 90, "Linux": 55, "Algorithmique": 65, "POO": 60, "Responsive Design": 75, "SEO": 55, "BurpSuite": 40, "SQL": 60 };

// ── Projects ────────────────────────────────────────────
const PROJECTS = [
  {
    title: "GreenWay",
    year: "2025",
    tags: ["HTML", "CSS", "JavaScript"],
    descKey: "greenway",
    link: "https://github.com/EpitechBachelorPromo2028/B-TBM-100-NAN-1-1-productdesignhackathon-2",
  },
  {
    title: "Tardis",
    year: "2026",
    tags: ["Python", "Git"],
    descKey: "tardis",
    link: "https://github.com/EpitechBachelorPromo2028/B-DAT-200-NAN-2-1-tardis-3",
  },
  {
    title: "Confucius",
    year:"2026",
    tags:["Python", "IA", "Docker"],
    descKey: "confucius",
    link:"https://github.com/EpitechBachelorPromo2028/B-AIA-210-NAN-2-1-eliza-1"
  },
  {
    title: "Pentesting",
    year:"2026",
    tags:["Cybersécurité", "OSWAP", "Pentesting"],
    descKey: "pentesting",
    link:"https://github.com/EpitechBachelorPromo2028/B-SEC-100-NAN-1-1-hack_juice-3/tree/main/Arthur"
  },
    {
    title: "MatchBoîte",
    year:"2026",
    tags:["JavaScript", "CSS", "React"],
    descKey: "matchboite",
    link:"https://github.com/EpitechBachelorPromo2028/B-TBM-100-NAN-1-1-yowl-1"
  },
  {
    title: "NextBuy",
    year:"2026",
    tags:["NoteBook", "Sklearn", "Python"],
    descKey: "nextbuy",
    link:"https://github.com/EpitechBachelorPromo2028/B-DAT-201-NAN-2-1-nextbuy-1"
  },
];

// ── Expériences ──────────────────────────────────────────

const EXPERIENCES = [
  {
    org: "Epitech-Nantes",
    role: "Étudiant en informatique — 1ère année de bachelor",
    period: "2025 — 2026",
    descKey: "epitech",
  },
  {
    org: "Hackaton BPCE",
    role: "Hackaton BPCE 2 jours",
    period: "2026",
    descKey: "hackaton_bpce",
  },
  {
    org: "Stage",
    role: "Stagiaire",
    period: "2026",
    descKey: "stage",
  },
];

// ── Navigation ──────────────────────────────────────────
const NAV = ["À propos", "Compétences", "Projets", "Expériences", "Contact"];
const NAV_IDS = ["about", "competences", "projets", "experiences", "contact"];

// ---------------------------------------------------------------------------------
//                                    Exports
// ---------------------------------------------------------------------------------

export {
  SKILLS,
  SKILL_LEVELS,
  PROJECTS,
  EXPERIENCES,
  NAV,
  NAV_IDS
};