const Footer = () => {
  return (
    <footer className="w-full bg-[#FFFDF6]">
      <div className="w-full px-20 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">

        <div>
          <div className="text-3xl font-bold text-orange-500 mb-4">
            esante.
          </div>
          <p className="text-gray-600 text-base max-w-xs">
            Your all-in-one solution for moving to Australia, from education to employment.
          </p>

          <div className="flex gap-3 mt-6">
            <span className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-base cursor-pointer">f</span>
            <span className="w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center text-base cursor-pointer">📷</span>
            <span className="w-9 h-9 rounded-full bg-sky-400 text-white flex items-center justify-center text-base cursor-pointer">🐦</span>
            <span className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center text-base cursor-pointer">💬</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-orange-500 mb-5 uppercase text-base">
            Study in Australia
          </h4>
          <ul className="space-y-4 text-gray-700 text-base">
            <li>Our Free End-to-End Services</li>
            <li>Accommodation & Job Support</li>
            <li>University & Course Finder</li>
            <li>Student Visa (Subclass 500)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-orange-500 mb-5 uppercase text-base">
            Skilled Migration
          </h4>
          <ul className="space-y-4 text-gray-700 text-base">
            <li>PR Points Calculator</li>
            <li>Skilled Occupation List (SOL)</li>
            <li>Top In-Demand Jobs</li>
            <li>Skilled Visa Pathways</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-orange-500 mb-5 uppercase text-base">
            Company
          </h4>
          <ul className="space-y-4 text-gray-700 text-base">
            <li>Blog</li>
            <li>Success Stories</li>
            <li>Expense Calculator</li>
            <li>Events & Webinars</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-orange-500 mb-5 uppercase text-base">
            Get in Touch
          </h4>
          <ul className="space-y-4 text-gray-700 text-base">
            <li className="flex items-center gap-2">
              📧 info@esante.com.au
            </li>
            <li className="flex items-center gap-2">
              📞 +91 1234 5678 90
            </li>
            <li className="flex items-center gap-2">
              📍 Address
            </li>
          </ul>
        </div>

      </div>

      <div className="bg-[#003C32] text-white text-base px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © 2025 Esante. All Rights Reserved | MARN: 123456789
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms Of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
