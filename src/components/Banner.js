import React from 'react'
import Image from '../assets/avatar.jpg'

import{ FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
 return( 
 <section className='min-h-[85vh] lg:min-h[78vh] flex items-center' id='home'>
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
    <div className='flex-1 text-center font-secondary lg:text-left'>
      <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'}
      viewport={{ once: false, ammount: 0.7}}
      className='text-[55px] font-bold leading-[0.8] lg:text-[110px] pt-[50px]'>STOLNICU <span>DENIS</span>

      </motion.h1>
      <motion.div 
      variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'}
      viewport={{ once: false, ammount: 0.7}}
      className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
<span className='text-white mr-4'>
  I am a
</span>
<TypeAnimation sequence={[
  'Web Developer',
  2000,
  'Student',
  2000,
  'Fitness enthusiast',
  2000,

]} speed={50}
className='text-accent'
wrapper='span'
repeat={Infinity}
/>

      </motion.div>

      <motion.p
      variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'}
      viewport={{ once: false, ammount: 0.7}}
      className='mb-8 max-w-lg mx-auto lg:mx-0'>I am a 16-year-old with a strong passion for coding and a natural talent for web development. I am interested in the Frontend Developer position and have experience in HTML, CSS, JavaScript, TypeScript and various frontend frameworks such as React, Bootstrap and TailWind CSS. I am also proficient in responsive design and have worked with various web development tools and technologies like Git and Github. </motion.p>
    <motion.div 
    variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'}
      viewport={{ once: false, ammount: 0.7}} 
      className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
      <button className='btn btn-lg'><a href='https://linktr.ee/donydony1' target='_blank'>Contact me</a></button>
      <a href='' className='text-gradient btn-link'>My Portofolio </a>
    </motion.div>
    <motion.div 
    variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'}
    viewport={{ once: false, ammount: 0.7}}
     className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
      <a href='https://www.instagram.com/_denisss06_/' target='_blank' rel="noreferrer">
        <FaInstagram/>
      </a>
      <a href='https://github.com/donydony11' target='_blank' rel="noreferrer">
        <FaGithub/>
      </a>
      <a href='https://www.linkedin.com/in/denisstolnicu/' target='_blank' rel="noreferrer">
        <FaLinkedin/>
      </a>
    </motion.div>
    
    
    </div>
    <motion.div 
    variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'}

    className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
    <img src={Image} alt =''/>
    </motion.div>

  </div>
  </div>
  
  </section>
  )
}


export default Banner;
