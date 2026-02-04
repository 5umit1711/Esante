const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-orange-500 text-white text-sm">
        <div className="w-full px-12 py-2 flex justify-between items-center">
          
          <a
            href="mailto:info@esante.com.au"
            className="flex items-center gap-2 text-white/90 hover:text-white transition"
          >
            <span className="opacity-80">✉</span>
            <span className="hover:underline underline-offset-4">
              info@esante.com.au
            </span>
          </a>

          <a
            href="tel:+441234567890"
            className="flex items-center gap-2 text-white/90 hover:text-white transition"
          >
            <span className="opacity-80">📞</span>
            <span className="hover:underline underline-offset-4">
              +44 1234 5678 90
            </span>
          </a>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-black/90 text-white">
        <div className="w-full px-12 py-4 flex items-center justify-between">

          <a
            href="/"
            className="text-3xl font-bold text-orange-500 hover:opacity-90 transition"
          >
            esante
          </a>

          <nav className="hidden md:flex gap-10 text-sm">
            <a href="/about-us" className="text-white/80 hover:text-orange-500 transition">About Us</a>
            <a href="/services" className="text-white/80 hover:text-orange-500 transition">Our Services</a>
            <a href="/australia" className="text-white/80 hover:text-orange-500 transition">Why Australia</a>
            <a href="/resources" className="text-white/80 hover:text-orange-500 transition">Tools & Resources</a>
          </nav>

          <button className="bg-green-600 hover:bg-green-700 hover:-translate-y-px transition-all px-6 py-2 rounded-md text-sm font-medium">
            Book 1:1 Counselling
          </button>

        </div>
      </div>
    </header>
  )
}

export default Header
