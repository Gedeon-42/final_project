import { Link } from "react-router-dom"


function Navbar() {
  return (
   <>
   {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-2">
             <img className='w-16 h-10 object-cover' src="/images/logo1.jpg" alt="" />
            </div>
            <nav className="hidden md:flex space-x-8">
                       <Link to="/login" className="bg-gradient-to-r from-green-900 to-green-800 rounded-[5px] text-white px-2 py-2">Login</Link>
              {/* <Link  to="/" className="border-1 border-green-900 text-black px-2 py-2 rounded-[5px]">Register</Link> */}

            </nav>
          </div>
        </div>
      </header></>
  )
}

export default Navbar