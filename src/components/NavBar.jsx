const NavBar = () => {
  return ( 
      <nav className="flex items-center justify-between py-5 bg-stone-950 font-serif">
        <div className="flex flex-shrink-0 items-center px-4">
          <h1 className="text-white text-3xl">Logo</h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-center tracking-tighter">
           <div className="flex justify-center items-center lg:gap-20 lg:text-[1.5em] text-[0.8em] text-white gap-6 lg:mr-20 mr-10">
            <a href="#" className="">About Us</a>
            <a href="#" className="">Contact</a>
            <a href="#" className="">Info</a>
            <a href="#" className="">More</a>
           </div>
          </div>
        </div>
      </nav> 
  );
}
 
export default NavBar;