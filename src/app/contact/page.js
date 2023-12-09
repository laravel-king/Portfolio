"use Client"
import {MailsIcon, HomeIcon, PhoneCall} from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
return (
    <section >
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 pt-12 lg:h-[480px] mb-6 lg:mb-24">
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                        <span className="w-[30px] h-[2px] bg-primary"></span>
                        Say Hello 👋
                    </div>
                    <h1 className="h1 max-w-md mb-8 capitalize">Let's work together</h1>
                    <p className="subtitle max-w-[400px]">Dicat magna mucius porro mollis. Quas novum ornare meliore appetere cum orci magna aliquid dui. Vivamus luptatum mei maiorum eget veniam lorem.</p>
                </div>
                <div className="hidden lg:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>

            </div>
            <div className="grid lg:grid-cols-2 mb-24 xl:mb-32">
                <div className="flex flex-col gap-y-4 lg:gap-y-14 mb-12 lg:mb-24 text-base lg:text-lg">
                    <div className="flex items-center gap-x-8">
                        <MailsIcon size={18} className="text-primary" />
                        <div>yourmail@gmail.com</div>
                    </div>

                    <div className="flex items-center gap-x-8">
                        <HomeIcon size={18} className="text-primary" />
                        <div>26462 Spencer Cape</div>
                    </div>

                    <div className="flex items-center gap-x-8">
                        <PhoneCall size={18} className="text-primary" />
                        <div>(323) 614-0764</div>
                    </div>
                </div>
                <Form />
            </div>
        </div>
    </section>
)
}

export default Contact;