import Socials from "@/components/Socials";

const Footer = () => {
    return(
        <footer className="bg-secondary dark:bg-black py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between">
                    <Socials containerStyles="flex gap-x-6 mx-auto lg:mx-0 mb-4" iconStyles="text-primary dark:text-white/70 hover:text-black dark:hover:text-white text-[26px] transition-all duration-300 ease-in-out" />
                    <div className="text-muted-foreground">
                        Copyright &copy; Ouaiji Abdul-Aziz. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;