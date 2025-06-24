

function Hero() {
  return (
<>
   {/* Hero Section */}
   <div className="bg-gray-900">
       <section className="relative opacity-90 bg-[url(/images/project3.jpg)] bg-no-repeat bg-cover flex h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Mineral Result
              <span className="block text-green-600">Made Simple</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Comprehensive Digital Mineral Result system for miners and laboratories 
              
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Explore Features
              </button>
            
            </div>
          </div>
        </div>
      </section>
   </div>
   
</>
  )
}

export default Hero