export default function Navbar() {
    return (
      <nav className="flex items-center justify-between bg-white px-6 py-3 shadow-md fixed w-full top-0">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src="https://www.redditinc.com/assets/images/site/reddit-logo.png" alt="Reddit" className="h-6" />
          <span className="font-bold text-lg">Reddit</span>
        </div>
  
        {/* Middle: Search */}
        <div className="flex flex-grow max-w-xl mx-4 bg-gray-100 p-2 rounded-full items-center">
          <input
            type="text"
            placeholder="Search Reddit"
            className="bg-transparent flex-grow focus:outline-none px-2"
          />
        </div>
  
        {/* Right: Login Button */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full">Log In</button>
      </nav>
    );
  }
  