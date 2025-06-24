import { BarChart3, Calendar, Leaf, MapPin, Shield, TrendingUp } from 'lucide-react'

function Features() {
  return (
   <>
        <section id="features" className="py-10 px-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Modern Digital Mineral Result
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform allow miners get their results faster
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Analytics</h3>
              <p className="text-gray-600">
                Gain insights into your Mining, optimize operations, and make data-driven decisions.
              </p>
            </div>
            
        
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Calendar className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Notification</h3>
              <p className="text-gray-600">
            	To enhance communication and coordination among miners, laboratories, and government institutions by sending real-time notifications via SMS and email when test results are available
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Delivering</h3>
              <p className="text-gray-600">
                	The system safely keeps the miner’s data, and when needed, it allows fast and easy access for viewing or sharing.
              </p>
            </div>
      
          </div>
        </div>
      </section>
   </>
  )
}

export default Features