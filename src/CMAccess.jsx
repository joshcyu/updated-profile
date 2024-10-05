import React, { useState } from 'react'

export default function CMAccess(props) {
  let {handleAdminAccess, children, handleContent} = props
  let [code, setCode] = useState()


  return (
    <div className='fixed flex justify-center items-center w-[100%] h-[100%] top-0 left-0 right-0 bottom-0 bg-gray-500/25 z-[2] text-copythirtiary'>
      <div className='w-[90%] sm:w-[30%] h-[300px] sm:h-[200px] bg-grape flex flex-col gap-4 justify-center items-center rounded-sm'>
        <p className='text-2xl text-center'>Content Management Access</p>
        <input type='text' placeholder='Enter Admin Code' className='bg-transparent focus:outline-none border-b-2' onChange={(e) => {
          const newCode = e.target.value
          setCode(newCode)
        }}/>
        <button className='px-4 py-2 bg-grape2 rounded-lg duration-200 hover:opacity-80' onClick={() => {
          handleAdminAccess(code)
          handleContent()
        }}>Submit</button>

        <p className=''>{children}</p>
      </div>
    </div>
  )
}
