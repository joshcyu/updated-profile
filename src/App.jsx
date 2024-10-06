import Home from "./Home"
import { useEffect, useState } from "react"
import React from "react"
import Portfolio from "./Portfolio"
import Projects from "./Projects"
import ManageContent from "./ManageContent"
import CMAccess from "./CMAccess"

function App() {

  let titlesNav = ["Home", "Portfolio", "Project/s Info"]
  let [navStore, setnavStore] = useState('Home')
  let [theme, setTheme] = useState(false)
  let [themeSelect, setthemeSelect] = useState('dark')
  let [content, setContent] = useState(false)
  let [contentItems, setcontentItems] = useState([
    {description
      : 
      "A minimal crochet gallery with content management to upload recent crocheted works.",
      photoUrl
      : 
      "https://res.cloudinary.com/da93vlump/image/upload/v1728122823/jffi2jw8ixrpks2czmaz.jpg",
      stacks
      : 
      "Vanilla JS, HTML, CSS, JSON",
      status
      : 
      "On going",
      title
      : 
      "Crochet Gallery"}, 
      {description
        : 
        "A simple movie gallery using OMDb API. Developed using React JS. The website allows the user to search for specific movies that they desire, and see some info from the API like the movie title, released year, and the status of the movie.",
        photoUrl
        : 
        "https://res.cloudinary.com/da93vlump/image/upload/v1728123435/q0hhdpndou17w0ky5wzo.jpg",
        stacks
        : 
        "ReactJS, OMDb API",
        status
        : 
        "Finished",
        title
        : 
        "Movie Gallery OMDb API"},
        {description
          : 
          "A thesis project aimed to help the citizens of Binangonan Rizal that resides across the nearby and isolated islands. The project adapts the concept of Beep Card, aside from cashless transactions, the passenger's info are also stored in the card. When the card is scanned on the scanner, the passenger's information will be logged and recorded on the website. Both hardware and software are developed to reduce the passenger line during manual(writing on log book) logging, and also to monitor the number of passengers on the boat to prevent overloading. It will also record the arrival time of the passengers at the destination for safety purposes.",
          photoUrl
          : 
          "https://res.cloudinary.com/da93vlump/image/upload/v1728182542/hi1wybuslrmvlsj0auqp.jpg",
          stacks
          : 
          "PHP, MySQL, Bootstrap, Vanilla JS, HTML CSS",
          status
          : 
          "Completed",
          title
          : 
          "Boat Station Thesis"}, 
          {description
            : 
            "A simple Gym App, built in ReactJS, TailwindCSS, and data from SmolJames. Where a user can target specific body parts, and target their goal such as cardiovascular endurance, growth hypertrophy, or strength training. The app will provide an efficient set of workouts depending on the input parameters. The user can also increment or update the set counts whenever they finish a set.",
            photoUrl
            : 
            "https://res.cloudinary.com/da93vlump/image/upload/v1728184055/qqsw4kkhzlgp6m3kli4u.jpg",
            stacks
            : 
            "ReactJS, TailwindCSS",
            status
            : 
            "Completed",
            title
            : 
            "React Gym App"}, 
            {description
              : 
              " The first website I created ever since I graduated. A simple static web profile that displays information about my self. It has a toggle between light and dark mode.",
              photoUrl
              : 
              "https://res.cloudinary.com/da93vlump/image/upload/v1728184122/nqqtp7bdmkdhfjw2hj0e.jpg",
              stacks
              : 
              "HTML, CSS, JS",
              status
              : 
              "Completed",
              title
              : 
              "Personal Web Profile"}
  ])
  let [pageState, setPageState] = useState(true)
  let [defaultPage, setDefaultPage] = useState(true)
  let [password, setPassword] = useState('')
  let [adminAccess, setAdminAccess] = useState(false)
  let [adminDisplay, setAdminDisplay] = useState(false)
  let [adminUser , setAdminUser] = useState(false)
  let [responsive, setResponsive] = useState(false)
  const [mypass, setmyPass] = useState('112898')


 function handleContent() {

  if (password !== mypass) 
  {
    setAdminUser(!adminUser)
    return
  }
 
  setContent(!content)
 }
 
 function handleHeader() {
  setResponsive(!responsive)
 }

 function handlePageState() {
  setPageState(!pageState)
 }

 function handleAdminAccess(code) {
    setPassword(code)
    console.log(password)
 }

 function handleDeleteContent(index) {
  const newContents = contentItems.filter((contents,contentIndex)=> {
    return contentIndex !== index
  })
  setcontentItems(newContents)
  localStorage.setItem('item', JSON.stringify(newContents))
 }

 useEffect(() => {
  if(localStorage === null) {
    return
  }
  

 }, [])


  return (
    <>
      <body className={"bg-grape " + (themeSelect === 'dark' ? 'dark' : themeSelect === 'light' ? 'light' : themeSelect === 'aqua' ? 'aqua' : themeSelect === 'beige' ? 'beige' : 'aqua')} >
        <div className="flex  ">
         <input id="navIcon" className="hidden checkBox" type="checkbox"/>
          <label className="flex flex-col w-3 gap-2 m-4 fixed sm:hidden z-20 checkBoxLabel" htmlFor="navIcon" onClick={() => {
            handleHeader()
          }}>
              <div className="py-1 px-4 duration-200 bg-copythirtiary rounded-md checkBoxIcon1"></div>
              <div className="py-1 px-4 duration-200 bg-copythirtiary rounded-md checkBoxIcon2"></div>
          </label>
        <div className="fixed hidden w-vh h-vh top-0 left-0 right-0 bottom-0 bg-slate-500 z-10">
        </div>
        <header className={"h-dvh fixed w-[50%] sm:w-[11%] sm:flex z-10 bg-grape " + (responsive? 'flex' : 'hidden')}>
          <nav className="flex flex-col w-[100%] justify-between">
          <div className="text-4xl flex sm:hidden text-copythirtiary self-end" ></div>
            <ul className="flex flex-col items-center gap-0 justify-center w-[100%] ">
              {titlesNav.map((titleNav,titleIndex) => {
                return (
                  <li className={"py-10 pl-5 border-b border-line w-48 text-xl sm:text-1xl text-copyprimary   md:text-2xl " + (navStore.includes(titleNav) ? "text-copythirtiary duration-200 font-semibold" : 'bg-grape2 duration-200')} key={titleIndex} onClick={() => {
                    setnavStore(titleNav)
                    setPageState(true)
                  }}><button>{titleNav}</button></li>
                )
              })}
            </ul>
            <section className="bg-grape justify-self-end text-3xl text-copyprimary">
              <button className="p-10 duration-200 hover:text-copythirtiary" onClick={() => {
                handleContent()
              }}><i className="fa-solid fa-user-tie"></i>
              </button>
              <button className="duration-200 hover:text-copythirtiary" onClick={() => {
                setTheme(!theme)
              }} ><i className="fa-solid fa-palette"></i></button>
              
            </section>
          </nav>
          <div className={"w-[50%] sm:w-[9%] h-[90%] fixed bg-grape2 rounded-xl text-black p-4 ml-10 mb-72 flex flex-col items-center border border-line gap-4 duration-200 " + (theme === false ? 'hidden' : 'flex')} >
            <h1 className="my-2 font-semibold text-copyprimary border border-solid border-grape text-center">Theme Selection</h1>
            <div className="bg-blue-300 w-[90%] h-10 cursor-pointer hover:opacity-70" onClick={() => {
              setthemeSelect('aqua')
            }}></div>
            <div className="bg-black w-[90%] h-10 cursor-pointer hover:opacity-70" onClick={() => {
              setthemeSelect('dark')
            }}></div>
            <div className="bg-white w-[90%] h-10 cursor-pointer hover:opacity-70" onClick={() => {
              setthemeSelect('light')
            }}></div>
            <div className="bg-[beige] w-[90%] h-10 cursor-pointer hover:opacity-70" onClick={() => {
              setthemeSelect('beige')
            }}></div>
          </div>
        </header>

        <main onClick={() => {
          setTheme(false)
        }} className="ml-0 sm:ml-[130px] mt mt-7 sm:mt-0">
        {(pageState ? (navStore === 'Home'?
           <Home/>: navStore === 'Portfolio' ? 
           <Portfolio  contentItems={contentItems}/> : navStore === 'Project/s Info' ? 
           <Projects mypass={mypass} password={password} handleDeleteContent={handleDeleteContent} handlePageState={handlePageState} setDefaultPage={setDefaultPage}  contentItems={contentItems}/>:  defaultPage?
            <ProjectDets /> : null) : defaultPage)}
            

            <footer>
              <div className="h-[160px] sm:h-[60px] flex flex-col sm:flex-row text-grape mt-[10%] gap-6 justify-evenly items-center bg-gradient-to-r from-grape2 to-copysecondary" >
                <p>Cotact Me@</p>
                <p>+63 97653567899</p>
                <p>joshuafermin003@gmail.com</p>
              </div>
            </footer>
        </main> 


        {/*Overlays*/}
        {adminUser ? <CMAccess handleContent={handleContent} handleAdminAccess={handleAdminAccess} setcontentItems={setcontentItems}>{password !== mypass? <p>Enter Correct Passcode</p> : <p>Access Granted</p>}</CMAccess> : null }
        {content ? <ManageContent handleContent={handleContent} /> : null}
        
        

        </div >
      </body>
    </>
  )
}
export default App

