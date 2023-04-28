import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y, color }) => {
  return (
    <motion.div className={`flex items-center justify-center rounded-full font-semibold ${color} text-light py-3 px-6 shadow-dark hover:cursor-pointer absolute`} whileHover={{ scale: 1.1 , transition: { duration: 0.4 } }} initial={{ x: 0, y: 0 }} animate={{ x: x, y: y }} transition={{ duration: 1.5 }} viewport={{ once: true }}>{name}</motion.div>
  )
}


const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 mb-10 text-center w-full'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-sky-900 text-light p-8 shadow-dark hover:cursor-pointer' whileHover={{ scale: 1.1 }}>Web</motion.div>
        <Skill name="CSS" x='-12vw' y='-12vh' color='bg-sky-500'/>
        <Skill name="HTML" x='12vw' y='-12vh' color='bg-orange-500'/>
        <Skill name="C#" x='-22vw' y='-2vh' color='bg-violet-500'/>
        <Skill name="Git" x='22vw' y='-2vh' color='bg-orange-700'/>
        <Skill name="Firebase" x='-23vw' y='-23vh' color='bg-yellow-500'/>
        <Skill name="Java" x='23vw' y='-23vh' color='bg-sky-600'/>
        <Skill name="Java EE" x='-35vw' y='-18vh' color='bg-sky-900'/>
        <Skill name="MySQL" x='35vw' y='-18vh' color='bg-gray-700'/>
        <Skill name="React" x='-18vw' y='-40vh' color='bg-blue-900'/>
        <Skill name="SQL Server" x='18vw' y='-40vh' color='bg-red-500'/>
        <Skill name="JavaScript" x='0vw' y='-46vh' color='bg-yellow-300'/>
        <Skill name="MongoDB" x='-8vw' y='-26vh' color='bg-lime-400'/>
        <Skill name="SAS" x='8vw' y='-26vh' color='bg-blue-400'/>
        <Skill name="Next" x='-8vw' y='26vh' color='bg-gray-600'/>
        <Skill name="Node" x='8vw' y='26vh' color='bg-green-500'/>
        <Skill name="Oracle PL/SQL" x='-12vw' y='12vh' color='bg-red-700'/>
        <Skill name="Prisma" x='12vw' y='12vh' color='bg-sky-800'/>
        <Skill name="Python" x='-23vw' y='23vh' color='bg-yellow-400'/>
        <Skill name="Spring Boot" x='23vw' y='23vh' color='bg-green-700'/>
        <Skill name="T3" x='-35vw' y='18vh' color='bg-violet-300'/>
        <Skill name="Three.js" x='35vw' y='18vh' color='bg-gray-500'/>
        <Skill name="tRPC" x='-18vw' y='40vh' color='bg-blue-300'/>
        <Skill name="VBA" x='18vw' y='40vh' color='bg-green-400'/>
        <Skill name="TypeScript" x='0vw' y='46vh' color='bg-blue-600'/>
        <Skill name=".Net" x='0vw' y='-18vh' color='bg-purple-500'/>
        <Skill name="Express" x='0vw' y='18vh' color='bg-gray-900'/>
      </div>
    </>
  )
}

export default Skills