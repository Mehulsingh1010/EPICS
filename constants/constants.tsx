import { getAllProjects } from "../lib/mdx";


const allProjects = getAllProjects();

// Find projects by name
const first = allProjects.find(project => project.name === "emgsignals.mdx") || null;
const second = allProjects.find(project => project.name === "example2.mdx") || null;
const third = allProjects.find(project => project.name === "filteranalysis.mdx") || null;
const fourth = allProjects.find(project => project.name === "introtoemg.mdx") || null;
const fifth = allProjects.find(project => project.name === "signalaquisition.mdx") || null;

export const topProjectSlugs = {
  featured: "introtoemg",
  top2: "emgsignals",
  top3: "filteranalysis",
};

export const allProjectsList = [
  first, second, third, fourth, fifth
].filter(Boolean);