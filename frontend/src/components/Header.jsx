const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-orange-500 text-white text-sm">
        <div className="w-full px-12 py-2 flex justify-between items-center">
          
          <a
            href="mailto:info@esante.com.au"
            className="
              flex items-center gap-2 text-white/90
              hover:text-white
              hover:scale-105
              transform-gpu
              transition-all duration-200
            "
          >
            <span className="opacity-80">✉</span>
            <span className="hover:underline underline-offset-4">
              info@esante.com.au
            </span>
          </a>

          <a
            href="tel:+441234567890"
            className="
              flex items-center gap-2 text-white/90
              hover:text-white
              hover:scale-105
              transform-gpu
              transition-all duration-200
            "
          >
            <span className="opacity-80">📞</span>
            <span className="hover:underline underline-offset-4">
              +44 1234 5678 90
            </span>
          </a>

        </div>
      </div>

      <div className="bg-black/90 text-white">
        <div className="w-full px-12 py-4 flex items-center justify-between">

          <a
            href="/"
            className="
              text-3xl font-bold text-orange-500
              hover:opacity-90
              hover:scale-105
              transform-gpu
              transition-all duration-200
            "
          >
            esante
          </a>

          <nav className="hidden md:flex gap-10 text-sm">
            {[
              { href: "/about-us", label: "About Us" },
              { href: "/services", label: "Our Services" },
              { href: "/australia", label: "Why Australia" },
              { href: "/resources", label: "Tools & Resources" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  text-white/80
                  hover:text-orange-500
                  hover:scale-105
                  transform-gpu
                  transition-all duration-200
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="
              bg-green-600 hover:bg-green-700
              hover:scale-105
              hover:-translate-y-px
              transform-gpu
              transition-all duration-200
              px-6 py-2 rounded-md text-sm font-medium
            "
          >
            Book 1:1 Counselling
          </button>

        </div>
      </div>
    </header>
  )
}

export default Header
