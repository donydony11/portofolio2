import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return( <section className='section' id='about' ref={ref}>
    
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row 
      lg:items-center lg:gap-x-15 lg:gap-y-0 h-screen '>
        {/* img */}
        <motion.div 
        variants={fadeIn('right, 0.3')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1
         bg-about 
         bg-contain
          bg-no-repeat
           h-[640px] 
           mix-blend-lighten
            bg-top'></motion.div>
        {/* text */}
        <motion.div 
        variants={fadeIn('left, 0.5')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm a Front-end Developer with over 1 year of experience. 
          </h3>
          <p className='mb-6'>Hi there! My name is Denis, and I'm a Frontend Developer currently studying Computer Science. With 1 year of experience in web development, I'm excited to share my passion for coding with others.

I'm proficient in HTML, CSS, JavaScript, TypeScript, React, Bootstrap, and Tailwind CSS, and I've put my skills to work on projects like a Netflix clone, a fitness website, and a YouTube clone.

As a very disciplined person, I love spending my time coding and exploring new technologies. I'm constantly seeking out opportunities to learn and grow as a developer.

When I'm not coding, you can find me at the gym or on the basketball court. I believe that staying active is key to maintaining a healthy body and mind.

I'm excited about the future of web development and can't wait to see where my career takes me. Thank you for taking the time to visit my portfolio!</p>
        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
                inView ?
                <CountUp start={0} end={12} duration={3} />: null}
                +
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Months of <br />
              Experience
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
                inView ?
                <CountUp start={0} end={50} duration={3} />: null}
                +
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Projects <br />
              Completed
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
                inView ?
                <CountUp start={0} end={4000} duration={3} />: null}
                +
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Hours Spent <br />
              Coding
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
    
    </section>
  )
}

export default About
