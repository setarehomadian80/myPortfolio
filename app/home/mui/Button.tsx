"use client"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Download, MoveRight } from 'lucide-react';
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ['latin']
})

export default function BasicButtons() {

    return (
        <Stack spacing={2} direction="row" className={`${inter.className} *:w-[200PX]`}>
            <Button
                sx={{
                    bgcolor: "#FF6A3D",
                    fontWeight: 'Bold',
                }}
                variant="contained">Got a project? <MoveRight className='w-4 ml-1' /></Button>
            <Button
                sx={{
                    color: '#FF6A3D',
                    border: '1px solid #FF6A3D',
                    fontWeight: 'Bold',
                    paddingBlock:'10px'

                }}
                variant="outlined">My Resume <Download className='w-4 ml-1' /></Button>
        </Stack>
    );
}
