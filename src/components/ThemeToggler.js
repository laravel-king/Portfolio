"use client"
import {MoonIcon, SunIcon} from "@radix-ui/react-icons"
import {useTheme} from "next-themes";
import {Button, buttonVariants} from "@/components/ui/button";

const ThemeToggler = () => {
    const {theme, setTheme} = useTheme();
    return (
        <>
            <Button variant="outline" size="icon" className="rounded-full" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
        </>
    )

}

export default ThemeToggler;