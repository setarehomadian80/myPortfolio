import Link from 'next/link'
import MobileMenu from '../../Shadcn/Sheet'

export default function Header() {
  return (
    <div className='bg-[#0b1220]/95 text-white sticky top-0 z-50
     backdrop-blur-3xl'>
      <main className='2xl:container mx-auto'>
        <div className='flex justify-between items-center py-2 lg:py-4 px-3'>
          {/* name */}
          <p className=' text-[18px] font-bold pl-1'>Setare Homadian</p>
          {/* sheet file */}
          <div className='lg:hidden'>
            <MobileMenu />
          </div>
          {/* desktop */}
          <div className='hidden lg:block'>
            <ul className='flex *:mx-3 text-[#D1D5DC] *:hover:text-[#FF6A3D]'>
              <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FF6A3D] after:transition-all after:duration-300 hover:after:w-full"><Link href='#Home'>Home</Link></li>
              <li 
              className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FF6A3D] after:transition-all after:duration-300 hover:after:w-full"><Link href='#About'>About</Link></li>
              <li 
              className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FF6A3D] after:transition-all after:duration-300 hover:after:w-full"><Link href='#ُServices'>Services</Link></li>
              <li
              className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FF6A3D] after:transition-all after:duration-300 hover:after:w-full"><Link href='#Project'>Project</Link></li>
              <li
              className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FF6A3D] after:transition-all after:duration-300 hover:after:w-full"><Link href='#Contact'>Contact</Link></li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  )
}
