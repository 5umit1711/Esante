const imagesTop = [
  "/icons/kangaroo.png",
  "/icons/students.png",
  "/icons/city.png",
  "/icons/culture.png",
  "/icons/opera.png",
  "/icons/melbourne.png",
  "/icons/handshake.png",
  "/icons/beach.png",
]

const imagesBottom = [
  "/icons/passport.png",
  "/icons/flag.png",
  "/icons/documents.png",
  "/icons/buildings.png",
  "/icons/taxi.png",
  "/icons/arrow.png",
  "/icons/campus.png",
  "/icons/celebration.png",
]

const Journey = () => {
  return (
    <section className="w-full bg-white pt-32 pb-32 flex flex-col justify-center">
      
      <div className="w-full grid grid-cols-4 gap-x-14 gap-y-16 place-items-center px-20">
        {imagesTop.map((img, i) => (
          <div
            key={i}
            style={{ animationDelay: `${i * 80}ms` }}
            className="
              w-28 h-28 md:w-32 md:h-32
              rounded-2xl overflow-hidden
              opacity-0
              animate-fade-up
              hover:scale-105
              transition-transform duration-300 ease-out
            "
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="text-center my-24 px-6">
        <p className="
          text-2xl md:text-3xl text-gray-700 leading-relaxed
          opacity-0 animate-fade-up
        ">
          <span className="italic">From dreaming in your room</span> to
        </p>
        <p
          className="
            text-2xl md:text-3xl font-semibold text-orange-500 mt-4
            opacity-0 animate-fade-up
          "
          style={{ animationDelay: "200ms" }}
        >
          living in another country.
        </p>
      </div>

      <div className="w-full grid grid-cols-4 gap-x-14 gap-y-16 place-items-center px-20">
        {imagesBottom.map((img, i) => (
          <div
            key={i}
            style={{ animationDelay: `${i * 80 + 200}ms` }}
            className="
              w-28 h-28 md:w-32 md:h-32
              rounded-2xl overflow-hidden
              opacity-0
              animate-fade-up
              hover:scale-105
              transition-transform duration-300 ease-out
            "
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

    </section>
  )
}

export default Journey
