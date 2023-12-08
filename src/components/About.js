import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {User2, Mailbox, PhoneCall, Briefcase, GraduationCap, Calendar, HomeIcon} from "lucide-react"
import Devimg from "@/components/Devimg";

const userInfo = [
    {icon: <User2 size={20} />, info: "Ouaiji Abdul-Aziz" },
    {icon: <Mailbox size={20} />, info: "laravelking@gmail.com" },
    {icon: <PhoneCall size={20} />, info: "+1 889-353-23" },
    {icon: <Calendar size={20} />, info: "19 June 1988" },
    {icon: <GraduationCap size={20} />, info: "Master Degree in Computer Science" },
    {icon: <HomeIcon size={20} />, info: "72 bloc 433 Quarter Riyad USA" },
]

const qualificationData = [
    {
        title: "Education",
        data:[
            {
                university: "Example University",
                qualification: "Bachelor of Science",
                year: "2017-2020"
            },
            {
                university: "Aberdeen University",
                qualification: "Master of Data Structure",
                year: "2020-2022"
            },
            {
                university: "Cambridge University",
                qualification: "Phd of Computer Science",
                year: "2022-2027"
            }
        ]
    },
    {
        title: "Experience",
        data:[
            {
                company: "Marrakech Arts",
                jobTitle: "Software Engineer",
                year: "2018-2020"
            },
            {
                company: "ABC Inc",
                jobTitle: "Senior Developer",
                year: "2020-2022"
            },
            {
                company: "Tech Invo",
                jobTitle: "Lead Developer",
                year: "2022-2027"
            }
        ]
    }
]

const skillData=[
    {
        title: "Skills",
        data:[
            {
                name: "Html, Css",
            },
            {
                name: "PHP, MySql",
            },
            {
                name: "ReactJs, NextJs",
            },
            {
                name: "Front-End Developer",
            },
            {
                name: "Back-End Developer",
            }
        ]
    },
    {
        title: "Tools",
        data:[
            {
                imgPath: "/about/vscode.svg",
            },
            {
                imgPath: "/about/figma.svg",
            },
            {
                imgPath: "/about/notion.svg",
            },
            {
                imgPath: "/about/wordpress.svg",
            }
        ]
    }
]
const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }

    console.log(getData(qualificationData, 'Experience'))
return(
    <section className="xl:h-[860px] py-24 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
            <div className="flex flex-col xl:flex-row">
                <div className="hidden xl:flex flex-1 relative">
                    <Devimg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="/about/developer.png" />

                </div>
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className="w-full grid xl:grid-cols-3 xl:max-2-[520px] xl:border dark:border-none">
                            <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                        </TabsList>
                        <div className="text-lg mt-12 xl:mt-8">
                            <TabsContent value="personal">
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-4">Unmatched Services Quality for Over 10 Years</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.</p>
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {userInfo.map((item, index) => {
                                            return <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                <div>{item.icon}</div>
                                                <div>{item.info}</div>
                                            </div>
                                        })}
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <div className="text-primary">Language Skill</div>
                                        <div className="border-b border-border"></div>
                                        <div>English, French, Spanish, Italian</div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="qualifications">
                                <div>
                                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>

                                    <div>
                                        <div>
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <Briefcase />
                                                <h4 className="font-medium capitalize">
                                                    {getData(qualificationData,"Experience").title}
                                                </h4>
                                            </div>
                                            <div>
                                                {getData(qualificationData, "Experience").data.map((experience,index) => {
                                                    const {company, jobTitle, year} = experience;
                                                    return(
                                                        <div key={index}>
                                                            <div>
                                                                <div>{company}</div>
                                                                <div>{jobTitle}</div>
                                                                <div>{year}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div>education</div>
                                        <div>experience</div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="skills">Skill Info</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
);
}
export default About;