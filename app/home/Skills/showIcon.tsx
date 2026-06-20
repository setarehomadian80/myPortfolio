"use client";

import { useEffect, useRef, useState } from "react";
import {
    FileCode2,
    Palette,
    Wind,
    Blocks,
    ClipboardCheck,
    Braces,
    Layers,
    Rocket,
    GitBranch,
    Database,
    Workflow,
    Component,
    LucideIcon,
} from "lucide-react"
type IconItem = {
    figc: string;
    img: LucideIcon;
};

const Icons: IconItem[] = [
    { figc: "HTML", img: FileCode2 },
    { figc: "CSS", img: Palette },
    { figc: "TailwindCSS", img: Wind },
    { figc: "MUI", img: Component },
    { figc: "Shadcn", img: Blocks },
    { figc: "Formik", img: ClipboardCheck },
    { figc: "JavaScript", img: Braces },
    { figc: "Bootstrap", img: Component },
    { figc: "Sass", img: Component },
    { figc: "TanStack Query", img: Workflow },
    { figc: "React", img: Layers },
    { figc: "Next.js", img: Rocket },
    { figc: "Git", img: GitBranch },
    { figc: "GitHub", img: Database },
    { figc: "TypeScript", img: FileCode2 },
    { figc: "Zustand", img: Database },
];

export default function ShowIcon() {
    const [activeIndex, setActiveIndex] = useState(-1);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        //  این API مرورگر است
        //  وظیفه‌اش: تشخیص اینکه یک element دیده شده یا نه
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    setActiveIndex(-1);

                    Icons.forEach((_, index) => {
                        setTimeout(() => {
                            setActiveIndex(index);
                        }, index * 120);
                    });
                }
            },
            {
                threshold: 0.25,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="w-full  grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 lg:grid-rows-2 gap-y-6 py-10 border-b border-[#FF6A3D] border-t mt-20 lg:mt-32"
        >
            {Icons.map((icon, index) => {
                const Icon = icon.img;

                return (
                    <figure
                        key={icon.figc}
                        className={`
              flex flex-col items-center
              transition-all duration-500 ease-out
              ${index <= activeIndex
                                ? " opacity-100 scale-105"
                                : " opacity-0 scale-100"
                            }
              hover:text-[#FF6A3D]
              hover:scale-125
            `}
                    >
                        <Icon size={26} />
                        <figcaption className="text-[10px] lg:text-[14px]">{icon.figc}</figcaption>
                    </figure>
                );
            })}
        </div>
    );
}