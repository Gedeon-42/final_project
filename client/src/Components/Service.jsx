import { BarChart3, TrendingUp, Users } from "lucide-react";

function Service() {
  return (
    <div>
      <section
        id="services"
        className="py-20 px-20 bg-gradient-to-r from-green-600 to-emerald-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How We Help Your Miners Thrive
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              From data analysis to expert recommendations, we provide the
              insights you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Time Management
              </h3>
              <p className="text-green-100">
                 To reduce the time it takes for miners and traders to receive
                mineral test results by enabling digital submission and
                retrieval of laboratory reports.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Data Visualization
              </h3>
              <p className="text-green-100">
                 The system safely keeps the miner’s data, and when needed, it
                allows fast and easy access for viewing or sharing.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Transparency
              </h3>
              <p className="text-green-100">
                 To build trust and transparency in the mineral testing process
                by ensuring that only approved laboratories can upload or send
                results through the system
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
