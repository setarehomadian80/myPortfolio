import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Image from 'next/image';
import { div } from 'framer-motion/m';
import { Button, Stack } from '@mui/material';
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google"


////font
const inter = Inter({
    subsets: ['latin']
})


type card = {
    title: string,
    des: string,
    img: string,
    id: number,
    Ldemo: string
}

const cards: card[] = [
    { id: 1, title: ' Tapsi Landing Page Design', des: 'his project is a group collaboration aimed at practicing responsive web design using Tailwind CSS a popular ride-hailing platform in Iran.', img: '/images/Tabsi.png', Ldemo: 'https://hoseinmohammadi-dev.github.io/tapsi/' },

    { id: 2, title: ' To-Do List App', des: 'A simple and clean To-Do List application built with HTML, CSS, and JavaScript.', img: '/images/TodoList.png', Ldemo: 'https://hoseinmohammadi-dev.github.io/toDoList/' },

    {
        id: 3, title: 'Drag & Drop Phone Color Changer', des: 'A fun and interactive project where users can drag color blocks and drop them onto a phone image.', img: '/images/DragAndDrop.png',
        Ldemo: 'https://hoseinmohammadi-dev.github.io/dragAndDrop/'
    },

    { id: 4, title: 'Login & Registration Form', des: 'A form project with client-side validation, password visibility toggle, password strength indicator, and random password generator.', img: '/images/Form.png', Ldemo: 'https://setarehomadian80.github.io/Form/' },

    { id: 5, title: 'Music Player', des: 'A simple interactive Music Player built using HTML, CSS, and JavaScript.', img: '/images/musicPlayer.png', Ldemo: 'https://setarehomadian80.github.io/MusicPlayer/' },

    { id: 6, title: ' Gissah Website Clone', des: 'A fully responsive landing page built using Tailwind CSS that mimics the luxurious style of Gissah Perfume digital presence.', img: '/images/GissahPerfume.png', Ldemo: ' https://setarehomadian80.github.io/Tailwind-Project/' }
]



export default function ActionAreaCardProject() {
    return (
        <div className='mt-16 px-4 lg:px-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr'>
            {
                cards.map((item) => (
                    <motion.div
                        key={item.id}

                        initial={{
                            opacity: 0,
                            y: 50
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.9
                        }}
                        className='*:h-full'
                    >
                        <Card className='group transition-all duration-700 ease-in rounded-2xl! border border-[#ff6a3d6e] hover:border-[#FF6A3D] bg-[#111827]!'>
                            <CardActionArea>
                                <div className="relative w-full h-45">
                                    <Image src={item.img} fill alt='cardPic'
                                        className='object-cover transition-transform
                                        duration-700
                                        ease-in-out
                                        group-hover:scale-110
                                         group-hover:opacity-15'
                                    />
                                    <div
                                        className="
                                        absolute inset-0
                                        transition-all duration-500"
                                    />
                                    {/* Buttons */}
                                    <div
                                        className="
                                        absolute inset-0 
                                        flex items-center justify-center!
                                        opacity-0
                                         group-hover:opacity-100
                                         transition-all duration-500"
                                    >
                                        <Stack spacing={2}
                                            direction="row" className='*:w-37.5! *:rounded-md! *:p-3! flex justify-center'>
                                            <Button
                                                sx={{ backgroundColor: '#FF6A3D' }}
                                                variant="contained"
                                                href="https://github.com/setarehomadian80"
                                                target="_blank"
                                            >
                                                <FaGithub size={24} className='w-6! mr-1' />
                                                GitHub

                                            </Button>

                                            <Button
                                                sx={{ color: '#FF6A3D', border: '1px solid #FF6A3D', }}
                                                variant="outlined"
                                                href={item.Ldemo}
                                                target="_blank"
                                            >
                                                <ExternalLink size={24} className='w-6! mr-1' />
                                                Live Demo
                                            </Button>
                                        </Stack>
                                    </div>
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div"
                                        className={` ${inter.className} text-[16px]! text-white font-bold!
                                        transition-all duration-200 ease-in
                                        group-hover:text-[#FF6A3D]`}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        className={`${inter.className} text-[#99A1AF] text-[14px]!`}
                                        variant="body2" >
                                        {item.des}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </motion.div>
                ))
            }

        </div>

    );
}
