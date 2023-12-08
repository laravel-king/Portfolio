import {GanttChartSquare, Blocks, Gem} from "lucide-react";
import {Card,CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: "Web Development",
        description:"Populo sociosqu sadipscing no propriae eam. Massa sit comprehensam possit harum mattis tantas nullam elitr. Noluisse ius molestiae petentium populo. Invidunt graece nominavi fastidii quod propriae.",
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: "Web Design",
        description:"Tincidunt nulla nullam percipit docendi suscipit scripserit. Habitant dicam vim possit tamquam dicant. Moderatius prompta pulvinar arcu persecuti.",
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: "App Development",
        description:"Dicam minim signiferumque per aliquid pretium fuisset senectus suas. Pro atqui libero congue errem id. Nullam fuisset errem diam nostra persius placerat quo vel.",
    },
]

const Services = () => {
return (
    <section className="mb-12 lg:mb-36">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 lg:mb-24 text-center mx-auto">My Services</h2>
            <div className="grid lg:grid-cols-3 justify-center gap-y-12 lg:gap-y-24 lg:gap-x-8">
                {servicesData.map((service, index) => {
                    return(
                        <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                            <CardHeader className="text-primary absolute -top-[60px]">
                                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{service.icon}</div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="mb-4">{service.title}</CardTitle>
                                <CardDescription className="text-lg">{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
);
}

export default Services;