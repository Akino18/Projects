import { useEffect } from "react";
import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";



function darkMode (){
    const d = document
    const $body:HTMLBodyElement = d.querySelector("body")!;
    if(!localStorage.getItem("theme")){
      localStorage.setItem("theme","light")

      
      alert("SI")
    }
    else {
      if(localStorage.getItem("theme") == "light") {
      
        $body.classList.remove("dark")
        

      }
      else{
        $body.classList.add("dark")

      }
    }

   // $body.classList.toggle("dark")
    //$body.classList.toggle("bg-VeryDarkBlue") 
}


export default function Header() {
  useEffect(darkMode,[])
  return (
    <header className='bg-White shadow  p-5 dark:bg-DarkBlue transition-all'>
    <div className="max-w-7xl flex justify-between items-center mx-auto">
    <h1 className = "text-normal font-bold dark:text-White lg:text-xl">{<Link to="/">Where in the world?</Link>}</h1>
    <div className="flex items-center cursor-pointer dark:text-White" onClick={()=>{
      if(localStorage.getItem("theme") === "light") localStorage.setItem("theme", "dark")
      else{
        localStorage.setItem("theme","light")
      }
      darkMode()
      

    }}>
    <BsMoon className='mr-2'/>
      <span className='font-semibold'> Dark mode</span>
      </div>
    </div>
  </header>
  )
}
