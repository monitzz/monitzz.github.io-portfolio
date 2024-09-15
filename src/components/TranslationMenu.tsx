import { useTranslations } from "next-intl";
import { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function TranslationMenu() {
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    const t = useTranslations("Home.header");
    const translationText = t("translations");

    const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

    return (
        <>
            <div
                className="relative"
                onMouseLeave={() => setIsLangMenuOpen(false)}>
                <button
                    className="mr-6 inline-flex items-center"
                    onClick={toggleLangMenu}>
                    <GlobeAltIcon className="mr-1 size-6 text-wine/50 dark:text-bubblegum/50" />
                    {translationText}
                </button>
                <div
                    className={`
                        absolute end-0 flex flex-col 
                        overflow-hidden transition-all duration-300 bg-rose-300 
                        ${isLangMenuOpen ? "max-h-24 p-4": "max-h-0 p-0"}
                    `}
                >
                    <a href="/pt">Português</a>
                    <a href="/en">English</a>
                </div>
            </div>
        </>
    )
}
