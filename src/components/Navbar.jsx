import React from 'react'
import { useState } from 'react'
 
// import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

const Navbar = () => {
	const [activeNav, setActiveNav]=useState('')

  return (
    <div>
      <header className="p-4 bg-white text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<div className="flex">
			{/* <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
				
			</a> */}
			<ul className="items-stretch hidden space-x-3 lg:flex">
				<li className="flex">
					
					<a rel="noopener noreferrer" href="#"  onClick={()=> setActiveNav('#')}  className={activeNav==='#'?"flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400":"flex items-center px-4 -mb-1 border-b-2 border-transparent"} >Home</a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" href="#about" onClick={()=> setActiveNav('about')}   className={activeNav==='about'?"flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400":"flex items-center px-4 -mb-1 border-b-2 border-transparent"}>About</a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" href="#portfolio" onClick={()=> setActiveNav('portfolio')}   className={activeNav==='portfolio'?"flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400":"flex items-center px-4 -mb-1 border-b-2 border-transparent"}>Portfolio</a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" href="#contact" onClick={()=> setActiveNav('contact')} className={activeNav==='contact'?"flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400":"flex items-center px-4 -mb-1 border-b-2 border-transparent"}>Contact</a>
				</li>
			</ul>
		</div>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="px-8 py-3 font-semibold rounded bg-purple-500 hover:bg-purple-600 text-white">Contact Me</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    </div>
  )
}

export default Navbar
