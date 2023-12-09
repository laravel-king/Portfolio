"use client"
import Link from "next/link";
import {Button} from "./ui/button";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import {Pagination} from "swiper/modules";
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
const Work = ()=>{
    return(
        <section className="relative mb-12 ls:mb-48">
            <div className="container mx-auto">
                <div className="max-w-[400px] mx-auto lg:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center lg:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">Dictas vestibulum consequat nihil hac facilisi. Commune delenit elaboraret facilisis persecuti viris proin.</p>
                    <Link href="/projects">
                        <Button>All Projects</Button>
                    </Link>
                </div>
                
                <div className="lg:max-w-[800px]  lg:absolute right-0 top-0">
                    <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
                        640:{
                            slidesPerView:2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                        {projects.slice(0,4).map((project, index) => {
                            return <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>

            </div>
        </section>
    );
}
export default Work;