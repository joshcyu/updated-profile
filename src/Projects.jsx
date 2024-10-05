import React from 'react'
import ProjectDets from './ProjectDets'

export default function Projects(props) {
  const {contentItems, handlePageState, 
    setDefaultPage, handleDeleteContent,
    mypass, password} = props

  return (
    <div className='flex flex-col ml-5 sm:ml-[10%] w-screen h-vh gap-10 mt-10'>
      <div className='text-4xl sm:text-7xl text-copythirtiary'>
        <h1>Project/s</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-0 w-screen sm:w-[80%] h-full'>
      { contentItems.map((items, itemIndex) => {
        return (
        <div className='w-[90%] h-[600px] sm:h-[800px] ml-0 hover:cursor-pointer duration-200 hover:opacity-80' key={itemIndex}>
          <div key={itemIndex} className='w-full h-[70%] bg-grape2 flex flex-col justify-center items-center rounded-xl mb-3' >  
            <span className={'self-end mr-2 justify-self-end ' + (mypass === password ? 'flex' : 'hidden')} key={itemIndex} onClick={() => {
              handleDeleteContent(itemIndex)
             
            }}>&times;</span>
            <div className={`w-[70%] h-[60%] gap-2 p-4 text-copythirtiary text-xl relative `} >
              <img src={items.photoUrl} className='w-[100%] h-[100%] duration-200 hover:opacity-80 ' onClick={() => {
                handlePageState()
                setDefaultPage(<ProjectDets key={itemIndex} items={items}/>)
              }}/>
              <div className='absolute bottom-10 left-10'>
                <p  className='text-grape2 bg-copythirtiary text-xs sm:text-xl rounded-md p-2 text-start w-[80%]'>{items.stacks}</p>
                <p className='font-semibold bg-grape2 rounded-md px-2 text-sm sm:text-2xl w-[80%]'>{items.title}</p>
              </div>
            </div>
          </div>
          <h2  className='text-3xl capitalize font-semibold text-copythirtiary'>{items.title}</h2>
        </div>
        )
      })}
        
      </div>
    </div>
  )
}
