import Link from "next/link"
import {Button, buttonVariants} from "./ui/button"
import {Download, Send} from "lucide-react"

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from "react-icons/ri";
import Devimg from "./Devimg";
import Badge from "./Badge"
import Socials from  "./Socials"
const Hero = () => {

    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                        <h1 className="h1 mb-4">Hello, my name is Abdul-Aziz Ouaiji </h1>
                        <p className="subtitle max-w-[498px] mx-auto xl:mx-0">Brief description with insights into myself, my vocational journey, and what I engage in professionally.</p>
                        <div className="flex flex-com gap-y-3 items-center md:flex-row md:gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="/contact" >
                                <Button className="flex items-center gap-x-2">Contact me <Send size={12} /></Button>
                            </Link>
                            <Button variant="outline" className="flex items-center gap-x-2">Download CV <Download size={12} /></Button>
                        </div>
                        <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconStyles="text-foreground text-[22px] hover:text-primary transition-all" />
                    </div>
                    <div className="hidden xl:flex relative">
                        <Badge containerStyles="absolute top-[24%] -left-[5rem]" endCountNum={3} badgeText="Years of experience" icon={<RiBriefcase4Fill />} />
                        <Badge containerStyles="absolute top-[80%] -left-[1rem]" endCountNum={6} endCountText="K" badgeText="Finished Projects" icon={<RiTodoFill />} />
                        <Badge containerStyles="absolute top-[55%] -right-8" endCountNum={9} endCountText="K" badgeText="Happy Clients" icon={<RiTeamFill />} />
                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                        <Devimg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc="/hero/developer.png" />
                    </div>
                </div>
                <div className="hidden md:flex absolute left-2/4 bottom-14 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    )
}

export default Hero;