"use client";
import React, {useEffect} from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

function About() {
  const {ref, inView} = useInView({
    threshold: 0.75
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

  useEffect(()=>{
    if(inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection("About");
}, [inView, setActiveSection])
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
            I am currently pursuing my Master's Degree in {" "}
            <span className="font-medium">Information Technology{" "}</span>
            from the University of Cincinnati with a GPA of 4.0{" "}. With a strong foundation in programming languages such as C/C++, Java, Python, HTML/CSS, JavaScript, React JS, Angular, Next JS, and SQL, I have honed my skills in full-stack development using the MERN and MEAN stacks. My professional experience includes working as a Software Engineer at{" "}
            <span className="underline">EPAM Systems</span>, where I successfully migrated a critical project from 
            <span className="font-medium"> React to Next.js  </span>, resulting in a 30% reduction in load times and improved user experience. 
        </p>
        <p>
            I have developed responsive web components, optimized core web vitals, and managed backend operations using Node.js, contributing to the project's success by maintaining uptime of over 99.9%. Additionally, I interned at EPAM R&D lab, where I acquired advanced skills in Java, design patterns, and contributed to a robust software solution used by over 10,000 employees. I am currently looking for a <span className="font-medium">full-time position</span> as a software developer.
        </p>
        
      
    </motion.section>
  )
}

export default About