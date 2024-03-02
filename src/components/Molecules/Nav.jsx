import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const Nav = () => {

  const location = useLocation();

  return (
    <nav className=' flex justify-center items-center gap-x-8'>
           <Link 
            to={"/home"}
            className={ `${ location.pathname === "/home" ? "text-white bg-[#d66f16] p-2 px-6 rounded-md" : "text-white hover:bg-[#d66f16] p-2 px-6 rounded-md cursor-pointer" }` }
           >
            Inicio 
           </Link>
           <Link
           to={ "/perfil"}
            className={ `${ location.pathname === "/perfil" ? "text-white bg-[#d66f16] p-2 px-6 rounded-md" : "text-white hover:bg-[#d66f16] p-2 px-6 rounded-md cursor-pointer" }` }
            
           >
            Perfil 
           </Link>
           <Link
           to={ "/mi-barberia"}
           className={ `${ location.pathname === "/mi-barberia" ? "text-white bg-[#d66f16] p-2 px-6 rounded-md" : "text-white hover:bg-[#d66f16] p-2 px-6 rounded-md cursor-pointer" }` }
           >
           Mi Barberia
           </Link>
    </nav>
  )
}
