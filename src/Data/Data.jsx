// ---------------------------------------------------------------------------------
//                            Définiton des descriptions
// ---------------------------------------------------------------------------------

// ─── Skills ─────────────────────────────────────────────
const SKILLS = [
  { category: "Langages", items: ["HTML / CSS", "JavaScript", "Python"] },
  { category: "Frameworks & Outils", items: ["React", "Git & GitHub", "VS Code"] },
  { category: "Concepts", items: ["POO", "Responsive Design"] },
];
const SKILL_LEVELS = { "HTML / CSS": 80, "JavaScript": 65, "Python": 70, "C / C++": 50, "React": 60, "Git & GitHub": 75, "VS Code": 90, "Linux": 55, "Algorithmique": 65, "POO": 60, "Responsive Design": 75, "SEO": 55 };

// ── Projects ────────────────────────────────────────────
const PROJECTS = [
  {
    title: "Projet 1",
    year: "2025",
    tags: ["Figma"],
    desc: "Réalisation d'un site pour une association d'écologie, visant a nous faire faire de l'éco-conception",
    link: "https://github.com/MelioSousLo/GreenWay",
  },
  {
    title: "Projet 2",
    year: "2026",
    tags: ["Jupyter Notebook", "Python"],
    desc: "Création d'un modèle de prédiction afin de prédire les retard de la SNCF",
    link: "https://github.com/MelioSousLo/Tardis",
  },
    {
    title: "Projet 3",
    year: "2026",
    tags: ["React", "Css", "JavaScript"],
    desc: "Création d'une application pour créer des Todo liste",
    link: "https://github.com/MelioSousLo/TodoYourCarrot",
  },
    {
    title: "Projet 4",
    year: "2026",
    tags: ["JavaScript", "Css"],
    desc: "Création d'une application pour aider les entreprise et les étudiants/chercheur d'emploie à trouver un travail/stage",
    link: "https://github.com/MelioSousLo/MatchBoite",
  },
];

// ── Expériences ──────────────────────────────────────────

const EXPERIENCES = [
  {
    org: "Epitech-Nantes",
    role: "Étudiant en informatique — 1ère année de bachelor",
    period: "2025 — 2026",
    desc: "Formation d'apprentissage informatique en passant par : Web, Cybersécurité, Product design, IA, Data",
  },
  {
    org: "Stage",
    role: "Stagiaire",
    period: "2026",
    desc: "En recherche de stage dans la cybersécurité ou le web sur une durée de 1 mois",
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