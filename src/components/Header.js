"use client"
import React, {useState, useEffect} from "react"
import ThemeToggler from "./ThemeToggler";
import AppLogo from "@/components/AppLogo";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";

const Header = () =>{
    return(
        <header>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <AppLogo />
                    <div className="flex items-center gap-x-6">
                        <Navbar containerStyles="hidden lg:flex gap-x-8 items-center" />
                        <ThemeToggler />
                        <div className="xl:hidden">
                            <MobileNavbar />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;