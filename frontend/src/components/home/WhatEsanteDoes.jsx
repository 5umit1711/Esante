const features = [
  {
    title: "Migration Advisors",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    points: [
      "We help in recruit students from all over the world.",
      "We help in recruit students from all over the world.",
      "We help in recruit students from all over the world.",
      "We help in recruit students from all over the world.",
    ],
    image: "/what-we-do/migration.png",
    bg: "bg-[#003C32]",
    titleColor: "text-orange-500",
    button: "bg-orange-500 text-white",
    layout: "content-first",
  },
  {
    title: "Education & Training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    points: [
      "We help in recruit students from all over the world.",
      "We help in recruit students from all over the world.",
      "We help in recruit students from all over the world.",
      "We help in recruit students from all over the world.",
    ],
    image: "/what-we-do/education.png",
    bg: "bg-orange-500",
    titleColor: "text-white",
    button: "bg-white text-black",
    layout: "image-first",
  },
]

const WhatEsanteDoes = () => {
  return (
    <section className="w-full bg-white py-32">
      <div className="w-full px-20">

        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            What <span className="text-orange-500">Esante</span> Does For You?
          </h2>
          <p className="mt-4 text-gray-600">
            A thriving economy, top-tier education, and an unmatched lifestyle await.
          </p>
        </div>

        <div className="rounded-[40px] overflow-hidden">
          {features.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} text-white grid grid-cols-1 lg:grid-cols-2`}
            >
              {item.layout === "image-first" && (
                <div className="p-12 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-105 object-cover rounded-3xl"
                  />
                </div>
              )}

              <div className="p-16 flex flex-col justify-center">
                <h3 className={`text-3xl font-semibold mb-4 ${item.titleColor}`}>
                  {item.title}
                </h3>

                <p className="opacity-90 mb-6 max-w-xl">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`px-6 py-3 rounded-lg w-fit font-medium ${item.button}`}
                >
                  Learn More
                </button>
              </div>

              {item.layout === "content-first" && (
                <div className="p-12 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-105 object-cover rounded-3xl"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhatEsanteDoes
