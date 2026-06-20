"use client"
import { motion } from "framer-motion";
import ActionAreaCard from "./muiCardService";

export default function Services() {

  return (
    <div className="my-20 lg:my-32 py-14 lg:py-20 bg-[#111827]">
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
            <h1 className="text-4xl font-bold">Services</h1>
            <p className="mt-4">Specialized services tailored to bring your digital vision to life</p>
          </div>
        </motion.div>
        <div>
          <ActionAreaCard />
        </div>
      </div>
  )
}
