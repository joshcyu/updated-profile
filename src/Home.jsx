import React, { useState } from 'react'

export default function Home() {
  const [showSkill, setShowSkill] = useState(false)
  const [showHobbies, setShowHobbies] = useState(false)

  return (
    <>
      <div className='flex flex-col text-copyprimary'>
        <div className='flex bg-grape ml-8 sm:ml-[60px] h-dvh justify-start sm:justify-center'>
          <div className='flex flex-col p-5 gap-5 h-auto text-copyprimary items-start w-[90%] sm:w-[60%] sm:mt-28 text-copy-secondary duration-500'>
            <h2 className='text-2xl sm:text-2xl md:text-4xl'>Welcome to my Web Profile</h2>
            <h1 className='text-4xl sm:text-4xl md:text-7xl'>I'm <span className='text-copythirtiary'>Joshua</span></h1>
            <p className='text-md sm:text-xl text-copyprimary w-[100%]'>I'm a 23-year-old recent graduate and aspiring software developer with a deep interest in technology.
            While I'm still building my skills and gaining experience, I’m excited to learn and grow in the tech world. From exploring new technologies to working on personal projects, I enjoy anything related to tech and look forward to developing my expertise further.  
            I'm eager to take on new challenges and contribute to meaningful projects in the industry.</p>
            <div>
              <h3 className='text-lg text-copysecondary'>Cotact Me@</h3>
              <div className='flex gap-4 text-copysecondary text-3xl my-6'>
                <button><i className="fa-brands fa-facebook"></i></button>
                <button><i className="fa-brands fa-instagram"></i></button>
              </div>
              <p className='text-copyprimary text-xl sm: 2xl'>(+63)9765356899</p>
              <p className='text-copyprimary text-xl sm: 2xl'>joshuafermin003@gmail.com</p>
            </div>
          </div>
          <div className='hidden sm:flex ml-4 mt-20 bg-grape2 h-96 w-96 border-lg'><img className='w-80 h-auto rounded-md absolute mt-6' src='myprofile.jfif'/></div>
        </div>

        <div className='w-[90%] ml-8 sm:ml-0' >
          <h1 className='ml-[10%] text-2xl mt-[0px] sm:mt-0 sm:text-7xl pb-5 bg-grape gap'>Skills & Interests</h1>
          <div className='w-[85%]  mb-2 bg-gradient-to-r from-grape2 to-copythirtiary ml-0 sm:ml-[10%] rounded-md cursor-pointer  '>
            <div className='flex justify-between p-4 text-copyprimary mb-2 duration-200 hover:opacity-80' onClick={() => {
              setShowSkill(!showSkill)
            }}>
              <p>View Skills</p>
              <p><i className="fa-solid fa-chevron-down"></i></p>
            </div>
            <div>
              <p className={'p-4 hover:opacity-100 hover:text-copyprimary animeShow pt-0 ' + (showSkill? 'flex' : 'hidden') }>
              SOFTWARE DEVELOPMENT TECH STACKS:<br></br>
                ▪ Web developing capability (HTML, CSS, JavaScript), and API(JSON) integration.<br></br>
                ▪ Familiarity with MERN stack, which includes knowledge in MongoDB, ExpressJS, ReactJS, NodeJS.<br></br>
                ▪ Knowledge in SQL scripting and MySQL RDBMS.<br></br>
                ▪ Experience in using Tailwind CSS framework.<br></br>
                ▪ Familiarity with Git.<br></br>
                ▪ Knowledge in C++ and Python for IoT integration.<br></br>
                ▪ Basic software testing and debugging skills.<br></br>
                ▪ Familiarity with Agile and Waterfall software development life cycles (SDLC).<br></br>
              HARDWARE/NETWORKING SKILLS: <br></br>
                ▪ Basic knowledge in microcontrollers, microprocessors, and  telecommunications equipment.<br></br>
                ▪ Basic background in programming languages such as Python and C++(Arduino IDE), with basic experience in circuit design and PCB  layout <br></br>
                ▪ Familiar with test and measurement equipment.<br></br>
                ▪ Networking concepts, IP Configuring along with working physical devices such as routers, switches, etc.<br></br>
              SOFT SKILLS: <br></br>
                ▪ Strong communication skills, including the ability to explain technical information to non-technical  stakeholders <br></br>
                ▪ Flexible and adaptable, with the ability to work effectively in a fast-paced environment <br></br>
                              </p>
            </div>
            <div className='flex justify-between p-4 text-copyprimary border-t-2 duration-200 hover:opacity-80' onClick={() => {
                setShowHobbies(!showHobbies)
            }}>
              <p>View Interests/Hobbies</p>
              <p><i className="fa-solid fa-chevron-down"></i></p>
            </div>
            <div>
              <p className={'p-4 hover:opacity-100 hover:text-copyprimary animeShow pt-0 ' + (showHobbies? 'flex' : 'hidden') }>
              ▪ PC gaming and PC building.<br></br>
              ▪ Coding.<br></br>
              ▪ Drawing specifically portraits.<br></br>
              ▪ Musical instruments.<br></br>
              ▪ Watching movies.
                              </p>
            </div>
          </div>
          

        </div>
      </div>
    </>
  )
}
