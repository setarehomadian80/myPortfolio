"use client"
import { motion } from "framer-motion";
import ActionAreaCardProject from "./muiCardProject";




export default function Projects() {
    return (
        <div className="my-20 lg:my-32">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.9
                }}
            >
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Projects</h1>
                    <p className="mt-4">A showcase of my recent work and creative solutions</p>
                </div>
            </motion.div>
            <div>
                <ActionAreaCardProject/>
            </div>
        </div>
    )
}
