import React from 'react'

export default function ProjectDets(props) {
  const {items} = props
  return (
    <>
      <div className='ml-0 sm:ml-[110px] mr-0 sm:mr-[10px] h-screen relative'>
        <img src={items.photoUrl}  className='w-screen h-[100%] md:h-screen opacity-40' /> 
        <div className='absolute top-[38%] sm:top-[25%] left-[20%] right-[20%] sm:right-0 sm:left-[10%] text-black' >
          <p className='text-3xl md:text-3xl font-semibold text-copysecondary capitalize'>{items.title}</p>
        </div>
        <div className='absolute top-[49%]  sm:top-[34%] left-[16%] sm:left-[12%] text-black w-[70%] sm:w-[35%]' >
          <p className='text-xs md:text-lg  text-copyprimary capitalize'> {items.description}</p>
        </div>
        <div className='absolute w-[70%] sm:w-[40%] h-[500px] sm:h-[400px] top-[15%] sm:top-[20%] right-[14%] sm:right-[10%]'>
          <img src={items.photoUrl} className='h-[30%] sm:h-[300px] w-[100%]' alt="" />
        </div>
        <div className='absolute bottom-[6%] sm:bottom-[2%] right-[35%] sm:right-[40%] border border-solid border-copythirtiary p-4 text-copythirtiary'>
          <p className='text-xl md:text-4xl'>Status: {items.status}</p>
        </div>
        


      </div>
    </>
  )
}
