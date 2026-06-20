"use client"
import { Code2, Globe, LucideIcon, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";



type IconItem = {
  figc: string;
  img: LucideIcon;
};

const Icons: IconItem[] = [
  { figc: 'Website Development', img: Globe },
  { figc: 'Frontend Development', img: Code2 },
  { figc: 'UI/UX Implementation', img: Palette },

]


export default function IconAndText() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  // flag
  // انیمیشن فقط یه بار انجام میشود 
  const hasAnimated = useRef(false);


  useEffect(() => {
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
      className="grid grid-cols-1 gap-y-6"
    >
      {Icons.map((item, index) => {
        const Icon = item.img;

        return (
          <figure
            key={item.figc}
            className={`
            flex items-center gap-4 
            lg:w-1/2
            group
            transition-all duration-700 ease-out
            cursor-pointer


            ${index <= activeIndex
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
              }
          `}
          >
            <div className="p-4 rounded-xl border border-[#ff6a3da8] bg-[#ff6a3d31] transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110">
              <Icon
                size={30}
                className="text-[#FF6A3D]"
              />
            </div>

            <figcaption className="text-[18px] font-bold transition-all group-hover:text-[#FF6A3D]">
              {item.figc}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
