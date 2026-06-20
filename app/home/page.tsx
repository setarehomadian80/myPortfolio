import Image from "next/image";
import BasicButtons from "./mui/Button";
import ShowIcon from "./Skills/showIcon";


export default function Home() {
 
  return (
    <div>
      <div className="lg:flex w-full *:lg:w-1/2 ">
        <div className="*:mb-5 flex flex-col justify-evenly">
          {/* hello */}
          <div>
            <span className="text-[#FF6A3D] text-2xl">Hello</span>
          </div>
          {/* name and family */}
          <div className="leading-none">
            <span className="text-[clamp(2rem,3vw,5rem)] font-bold">I'm Setare Homadian</span> <br />
            <span className="text-[clamp(2rem,8vw,5rem)] font-bold"> Frontend <br /> Developer</span>
          </div>
          {/* description text */}
          <div>
            <p className="text-[#99A1AF] w-[80%] text-[16px] font-bold">Frontend Developer passionate about crafting modern web experiences with React, Next.js, and Tailwind CSS. I focus on building responsive, accessible, and high-performance interfaces that deliver real value to users.</p>
          </div>
  
        </div>
        {/* part 2 */}
        {/* circle portfolio image */}
        <div className="flex justify-center mt-4 lg:mt-0">

          <div className="relative rounded-[50%] p-8 flex justify-center items-center group border-2 border-dotted border-[#FF6A3D]">

            <Image className="rounded-[50%] transition-transform ease-in-out duration-500 group-hover:scale-110 border-2 border-[#FF6A3D]" src='/circleimg.jpg' alt="circle" width={400} height={400} />

          </div>
        </div>
      </div>
      {/* programing item */}
      <div>
        <ShowIcon />
      </div>
    </div>
  )
}
