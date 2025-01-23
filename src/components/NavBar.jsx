const NavBar = () => {
    return ( 
        <nav className="mb-20 flex items-center justify-between py-5 absolute border-b-[1px] border-stone-500 text-stone-200 z-20 w-[100%]">
        <div className="flex flex-shrink-0 items-center">
           <h1 className="ml-2 text-6xl">Logo</h1>
        </div>
        <div className="flex items-center justify-center gap-6">
        <div className="text-center tracking-tighter">
         <div className="flex lg:gap-20 text-xl gap-6 mr-20">
           <a href="https://www.linkedin.com/in/nikos-karamaroudis-06676a233/" target="_blank" title="Connect with me on LinkedIn" rel="noopener noreferrer">About</a>
           <a href="https://github.com/karamas13" target="_blank" title="Connect with me on GitHub" rel="noopener noreferrer">Contact</a>
           <a href="https://www.instagram.com/nikos_krms/" target="_blank" title="Connect with me on Instagram" rel="noopener noreferrer">Learn More</a>
           <a href="mailto:nickkaramas@gmail.com" title="Connect with me via Email" rel="noopener noreferrer">Info</a>
          </div>             
     </div>
        </div>
      </nav>
     );
}
 
export default NavBar;