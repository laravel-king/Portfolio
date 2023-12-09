"use client"
import React, {useState} from "react";
import {Tabs, TabsList, TabsContent, TabsTrigger} from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard";

const projects = [
    {
        image:'/work/4.png',
        category:'Fullstack',
        name: 'Max Stack IO',
        description:'Quem ferri natoque dictas delenit. Orci conclusionemque pertinax duo lacinia.',
        link:'/',
        github: '/'
    },
    {
        image:'/work/3.png',
        category: 'react Js',
        name: 'Texas Website',
        description:'Partiendo possit fugit tation maecenas. Consetetur equidem sagittis tantas porta reque.',
        link:'/',
        github: '/'
    },
    {
        image:'/work/2.png',
        category: 'Php',
        name: 'Safi Project',
        description:'Conceptam nunc ornatus maiorum similique consetetur mnesarchum platea interdum. detraxit.',
        link:'/',
        github: '/'
    },
    {
        image:'/work/1.png',
        category: 'Backend',
        name: 'Max Pex API',
        description:'Quem ferri natoque dictas delenit. Orci conclusionemque pertinax duo lacinia.',
        link:'/',
        github: '/'
    },
]

const uniqueCategories = ['all projects' ,...new Set(projects.map((item) => item.category))];
const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');

    const filteredProjects = projects.filter((project) => {
        return category === 'all projects' ? project : project.category === category
    });
    console.log(filteredProjects);

return <section className="min-h-screen pt-12">
    <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>

        <Tabs defaultValue={category} className="mb-24 lg:mb-48">
            <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[700px] mb-12 mx-auto md:border dark:border-none">
                {categories.map((category, index) => {
                    return <TabsTrigger onClick={()=>setCategory(category)} className="capitalize w-[162px] md:w-auto" value={category} key={index}>{category}</TabsTrigger>
                })}
            </TabsList>
            <div className="text-lg lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => {
                    return(
                        <TabsContent value={category} key={index}>
                            <ProjectCard project={project} />
                        </TabsContent>
                    )
                })}

            </div>

        </Tabs>
    </div>
</section>
}

export default Projects;