import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getProjectData(filename) {
  const filePath = path.join(process.cwd(), 'projects', `${filename}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return { 
    slug: filename,
    metadata: data, 
    content 
  };
}

export function getAllProjects() {
  const projectsDirectory = path.join(process.cwd(), 'projects');
  const filenames = fs.readdirSync(projectsDirectory);
  
  return filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const name = filename.replace(/\.mdx$/, '');
      const { metadata } = getProjectData(name);
      return { name, ...metadata };
    });
}