"use client"
import { useEffect, useRef, useState } from "react";

export default function AboutMeDec() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    // flag
    // انیمیشن فقط یه بار انجام میشود 
    const hasAnimated = useRef(false);
const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

            
                        setTimeout(() => {
                            setShow(true)
                        },  200);
                   
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
            className={`transition-all duration-700 ease-in
                ${ 
                    show
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-10 opacity-0'
                }
                `}
        >
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-[#99A1AF] text-[16px] mt-10 leading-8">I'm a passionate frontend developer with a keen eye for design and a love for creating seamless user experiences. With years of experience in web development, I've honed my skills in building responsive, accessible, and performant applications.</p>
            <p className="text-[#99A1AF] text-[16px] mt-7 leading-8">My journey in web development started with a curiosity for how things work on the web, and it has evolved into a professional career where I constantly push the boundaries of what's possible with modern web technologies.</p>
        </div>
    );
}
