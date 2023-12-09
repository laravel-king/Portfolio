import Link from "next/link"
import Image from "next/image"
import {Card, CardHeader} from "@/components/ui/card";
import { Github, Link2Icon} from "lucide-react";
import {Badge} from "./ui/badge"
const ProjectCard = ({project}) => {
  return (
      <Card className="group overflow-hidden relative">
        <CardHeader className="p-0">
            <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 lg:bg-[110%] lg:bg-no-repeat lg:bg-work_project_bg_light lg:dark:bg-work_project_bg_dark overflow-hidden">
                <Image className="absolute bottom-0 shadow-2xl" src={project.image} alt={project.name} width={247} height={250} priority />
                <div className="flex gap-x-4">
                    <Link href={project.link} className="bg-black text-white w-[32px] h-[32px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-in-out"><Link2Icon /></Link>
                    <Link href={project.github} className="bg-black text-white w-[32px] h-[32px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-in-out"><Github /></Link>
                </div>
            </div>
        </CardHeader>
          <div className="h-full px-8 py-6">
            <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">{project.category}</Badge>
              <h4 className="h4 mb-1">{project.name}</h4>
              <p className="text-muted-foreground text-lg">{project.description}</p>
          </div>
      </Card>
  )
}

export default ProjectCard;