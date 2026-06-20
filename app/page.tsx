import Image from "next/image";
import { Code2, Globe, Palette } from "lucide-react";
import Services from "./Services/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";
import Footer from "./components/Footer/Footer";
import Home from './home/page'
import About from "./AboutMe/page";

export default function Main() {
  return (
    <div className="flex overflow-x-hidden flex-1 w-full text-white bg-[#0B1220]">
      <main className="w-full 2xl:container mx-auto mt-16 lg:mt-18 px-4">
        {/* home section */}
        <section id="Home" className="scroll-mt-33">
          <Home />
        </section>
        {/* About me section  */}
        <section id="About" className="scroll-mt-33">
          <About />
        </section>
        {/* Services section */}
        <section id="ُServices" className="scroll-mt-33">
            <Services />
        </section>
        {/* Project section */}
        <section id="Project" className="scroll-mt-33">
            <Projects />
        </section>
        {/*  Contact section */}
        <section id="Contact" className="scroll-mt-33">
            <Contact />
        </section>
        {/* footer section*/}
        <footer>
          <section>
              <Footer />
          </section>
        </footer>
      </main>
    </div>
  );
}
