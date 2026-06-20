"use client"
import { Heart, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};



export default function Footer() {
    return (
        <div className="my-20 lg:my-32">
            <div className="mx-auto flex justify-center gap-5 ">
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/setarehomadian80">

                    <FaGithub size={26} />
                </Link>
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/setare-homadian-041676362">

                    <FaLinkedin size={26} />
                </Link>
                <Link
                    target="_blank"
                    href='mailto:homadiansetare12@gmail.com'>
                    <Mail size={26} />
                </Link>
            </div>
            <p className="flex  justify-center gap-2 mt-4 text-[12px] md:text-[16px]" >© 2026 Setare Homadian. Built with <Heart size={18} className="text-[#ff6a3d]" /> and React/NextJs</p>
            <div className="flex justify-center mt-4">
                <button
                    onClick={scrolltoTop}
                    className="flex justify-center cursor-pointer
                     gap-1 rounded-4xl border border-[#ff6a3d] text-[#ff6a3d] px-6 py-2">Back to Top <ArrowUp size={18} /></button>
            </div>
        </div>
    )
}
