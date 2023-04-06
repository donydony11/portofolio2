import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <section
      className="section"
      id="work"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">Take a look at some of my latest projects that showcase my skills in web development. From building responsive layouts to integrating dynamic features, these projects demonstrate my ability to create engaging and functional websites.</p>
            </div>
              <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex flex-col gap-y-10'></motion.div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 roundedx1">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* title */}
              <div
                className="absolute -bottom-full left-12 
          group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-gradient ">Netflix Clone</span>
              </div>
            </div>
          </motion.div>
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* image */}
            <motion.div 
           
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="group relative overflow-hidden border-2 border-white/50 roundedx1">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* title */}
              <div
                className="absolute -bottom-full left-12 
          group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-gradient ">
                  Fitness Exercise App
                </span>
              </div>
            </motion.div>
            {/* image */}
            <motion.div 
           
           variants={fadeIn('left', 0.3)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: false, amount: 0.3 }}
           className="group relative overflow-hidden border-2 border-white/50 roundedx1">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* title */}
              <div
                className="absolute -bottom-full left-12 
          group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-gradient ">YouTube Clone</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Work