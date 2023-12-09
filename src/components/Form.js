"use client"
import {Button} from "./ui/button"
import {Input} from "./ui/input"
import {Textarea} from "./ui/textarea";
import {User, ArrowRightIcon, MessageSquare, MailIcon} from "lucide-react";

const Form = () => {
return (
    <form className="flex flex-col gap-y-4">
        <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="Name" className="pl-16 pr-8" />
            <User className="absolute left-6" size={20} />
        </div>

        <div className="relative flex items-center">
            <Input type="email" id="email" placeholder="Email" className="pl-16 pr-8" />
            <MailIcon className="absolute left-6" size={20} />
        </div>

        <div className="relative flex items-center">
            <Textarea rows={5} id="content" placeholder="Write your thoghts" className="pl-16 pr-8 resize-none" />
            <MessageSquare className="absolute left-6 top-2" size={20} />
        </div>
        <div className="flex justify-end">
            <Button className="flex items-center gap-x-1 w-full max-w-[170px] group">
                Let's Talk
                <ArrowRightIcon className="group-hover:translate-x-2 ease-in-out duration-500 transition-all" size={20} />
            </Button>
        </div>

    </form>
)
}
export default Form;