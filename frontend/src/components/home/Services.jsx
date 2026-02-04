const services = [
  {
    title: "For Students",
    subtitle: "World - Class Education",
    video: "/videos/students.mp4",
  },
  {
    title: "For Professionals",
    subtitle: "Advance Your Career",
    video: "/videos/professionals.mp4",
  },
  {
    title: "For Migration",
    subtitle: "Advance Your Career",
    video: "/videos/migration.mp4",
  },
]

const Services = () => {
  return (
    <section className="w-full bg-white py-32">
      <div className="w-full px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Everything You Need for
            <br />
            Your <span className="text-orange-500">Australia Dream</span>
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((item, i) => (
            <div
              key={i}
              className="relative group rounded-3xl overflow-hidden cursor-pointer"
            >
              <video
                src={item.video}
                muted
                loop
                playsInline
                preload="metadata"
                className="
                  w-full h-130 object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-105
                "
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />

              <div className="
                absolute inset-0
                bg-black/40
                transition-colors duration-500
                group-hover:bg-black/60
                pointer-events-none
              " />

              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="inline-block bg-orange-500 text-sm px-3 py-1 rounded-full mb-2">
                  {item.title}
                </span>
                <p className="text-lg font-medium">{item.subtitle}</p>
              </div>

              <div className="
                absolute inset-0 flex items-center justify-center
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                pointer-events-none z-10
              ">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-lg">
                  ▶
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
