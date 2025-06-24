import { Sprout } from "lucide-react"


function Footer() {
  return (
  <>
      <footer className="bg-gray-900 px-18 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sprout className="h-8 w-8 text-green-500" />
                <span className="text-xl font-bold">Digital Mineral Result</span>
              </div>
              <p className="text-gray-400">
                Empowering Miners with result tracking management tools and data-driven insights for sustainable development.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Time Management</li>
                <li>Quick Result</li>
                <li>Transparency</li>
                <li></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Data Visualization</li>
                <li>Expert Guidance</li>
                <li>Performance Optimization</li>
                <li>Mineral Tracking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@digital mineral Result.com</li>
                <li>+250780749799</li>
                <li>Kigali, Rwanda</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Digital Mineral Result. All rights reserved.</p>
          </div>
        </div>
      </footer>
  </>
  )
}

export default Footer