"use client"
import { CodeXml, LucideIcon, Palette, Rocket } from 'lucide-react';

import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {Inter} from "next/font/google"


// font
const inter = Inter({
  subsets: ['latin']
})

type box = {
    txt: string;
    title: string;
    icon: LucideIcon;
};

const boxes: box[] = [
    { title: 'Web development', txt: 'Building modern, responsive websites with clean code and best practices using the latest technologies.', icon: CodeXml },
    { title: 'UI/UX Design', txt: 'Creating beautiful and intuitive user interfaces that provide exceptional user experiences.', icon: Palette },
    { title: 'Optimization', txt: 'Optimizing web applications for speed, accessibility, and search engine rankings.', icon: Rocket },
]

export default function ActionAreaCard() {
    return (
        <div className="mt-16 flex flex-wrap items-stretch justify-evenly gap-6 *:w-full md:*:w-[45%] lg:*:w-[30%]">
            {boxes.map((item , index) => {
                const Icon = item.icon;

                return (
                    <motion.div
                    key={item.title}
                    initial={{
                        opacity: 0,
                        y:50
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    viewport={{
                        once:true,
                        amount:0.3
                    }}
                    transition={{
                        duration:0.9,
                        delay:index * 0.2
                    }}
                    className='w-full *:h-full'
                    >
                        <Card className={ `p-2 rounded-2xl! group border border-[#ff6a3d6e] hover:border hover:border-[#FF6A3D] hover:-translate-y-2 bg-[#0b1220]! ` } key={item.title}>
                            <CardActionArea>
                                 <CardContent className='*:mb-3'>
                                    <div className="p-4 rounded-xl border border-[#ff6a3da8] bg-[#ff6a3d31] transition-all duration-700 ease-in group-hover:rotate-180 inline-block">
                                        <Icon size={40} className="text-[#FF6A3D]" />
                                    </div>
                                    <Typography gutterBottom variant="h5" component="div" sx={{
                                        // fontFamily: 'bold',
                                        color: "white",
                                        transition: "0.3s",
                                        fontFamily:inter.style.fontFamily,
                                        ".group:hover &": {
                                            color: "#FF6A3D",
                                        },
                                    }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#99A1AF', fontSize: "14px" , fontFamily: inter.style.fontFamily, }}
                                    >
                                        {item.txt}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </motion.div>
                )
            })}
        </div>
    );
}
