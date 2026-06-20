import IconAndText from './iconAndText'
import AboutMeDec from './aboutMeDes'
import PercentBox from './percentBox'

export default function About() {

  return (
    <div className="my-20 lg:my-32 lg:flex *:lg:w-1/2 items-center ">
                {/* ///////////////// */}
                <div className="*:text-[18px] *:font-bold *:items-center *:mb-4">
                  <IconAndText />
                </div>
                {/* ///////////////// */}
                <div className="mt-14 lg:mt-0">
                  <AboutMeDec />
                  {/* percent box */}
                  <div>
                    <PercentBox />
                  </div>
                </div>
              </div>
  )
}
