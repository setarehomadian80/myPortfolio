"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const links = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Services", href: "#ُServices" },
  { name: "Projects", href: "#Project" },
  { name: "Contact", href: "#Contact" },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  //   کدوم لینک باید انیمیشن بگیرد
  // -1 یعنی هیچ‌کدام هنوز فعال نشده
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    if (open) {
      setActiveIndex(-1)

      links.forEach((_, index) => {
        setTimeout(() => {
          setActiveIndex(index)
        }, index * 200)
      })
    }
  }, [open])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu style={{
            width: "25px",
            height: "25px",
          }} />
        </Button>
      </SheetTrigger>

      <SheetContent side="top" className="bg-[#0B1220] text-white">
        <SheetTitle className="hidden">
          Navigation Menu
        </SheetTitle>
        <nav className="flex flex-col gap-4 my-6 ml-6">
          {links.map((link, index) => (
            <a
            onClick={() => setOpen(false)}
              key={link.name}
              href={link.href}
              className="transition-transform duration-500 text-lg p-2 hover:text-[#FF6A3D] hover:bg-[#ff6a3d25]"
              style={{
                transform:
                  index <= activeIndex
                    ? "translateX(10px)"
                    : "translateX(0px)",
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}