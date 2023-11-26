'use client'


import ProjectCard from "@/components/ProjectCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const projectData = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'react js',
    name: 'Solstice Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'Next js',
    name: 'Lumina Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Next js',
    name: 'Evolve Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'Next js',
    name: 'Ignite Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'Next js',
    name: 'Envision Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'fullstack',
    name: 'Serenity Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'fullstack',
    name: 'Nova Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'fullstack',
    name: 'Zenith Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
];

// remove category duplicates
const uniqueCategories = ['all projects', ...new Set(projectData.map((item) => item.category))];

const Projects = () => {

  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter( project => {
    // Si category === 'all projects' devolvemos todos los projects, sino filtramos por categoría
    return category === 'all projects' ? project : project.category === category 
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList 
            className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto
            md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)} 
                  value={category} 
                  key={index}
                  className="capitalize w-[162px] md:w-auto"  
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects