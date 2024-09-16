"use client"

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import TranslationMenu from "@/components/TranslationMenu";
import DarkModeButton from "@/components/DarkModeButton";
import MainLayout from "@/components/MainLayout";
import starryBackground from "/public/starry-background.png";

export default function Home() {
    const [isWindowLarge, setIsWindowLarge] = useState(false);

    const t = useTranslations("Home.header.navigation");

    const nav = {
        links: [
            t("about"),
            t("languages"),
            t("projects")
        ],
        ids: [
            "#about",
            "#languages",
            "#projects"
        ]
    }

    useEffect(() => {
        const breakpoint = 1024;

        if (window.innerWidth >= breakpoint) {
            setIsWindowLarge(true);
        }
    }, []);

    return (
        <>
        <header className="h-24 w-full bg-rose-200 dark:bg-licorice drop-shadow-lg flex items-center text-xl">
                <nav className="w-[70rem] px-4 lg:px-0 mx-auto flex justify-between items-center">
                    <div className="flex items-baseline">
                        <TranslationMenu />
                        <DarkModeButton />
                    </div>
                    <div>
                        {nav.links.map((link, index) => (
                            <a
                                key={index}
                                href={nav.ids[index]}
                                className={`
                                    mr-8 hover:text-rose-900 dark:hover:text-rose-200 transition-all duration-300 
                                `}
                            >{link}</a>
                        ))}
                    </div>
                </nav>
            </header>
            <main
                className="h-full flex flex-col items-center justify-between p-0 lg:p-8 lg:p-24"
                style={
                    isWindowLarge === true ? {
                        backgroundImage: `url(${starryBackground.src})`,
                        backgroundRepeat: "repeat-y",
                        backgroundAttachment: "scroll",
                        backgroundPosition: "top",
                        height: "100%"
                    } : {
                        height: "100%"
                    }
                }
            >
                <MainLayout />
            </main>
        </>
    );
}
