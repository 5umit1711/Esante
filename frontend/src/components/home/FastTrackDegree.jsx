import { useState } from "react"

const programs = {
  Management: [
    {
      title: "Masters in Business Management",
      image: "/fast-track/management-1.png",
      description:
        "Lorem ipsum opms herist Lorem ipsum opms herist Lorem ipsum opms herist Lorem ipsum herist Lorem ipsuna...",
    },
    {
      title: "Masters in Business Management",
      image: "/fast-track/management-2.png",
      description:
        "Lorem ipsum opms herist Lorem ipsum opms herist Lorem ipsum opms herist Lorem ipsum herist Lorem ipsuna...",
    },
  ],
  Engineering: [],
  Medical: [],
}

const skills = [
  {
    title: "Nurses",
    image: "/fast-track/nurses.png",
  },
  {
    title: "Chefs",
    image: "/fast-track/chefs.png",
  },
  {
    title: "Information Technology",
    image: "/fast-track/it.png",
  },
]

const FastTrackDegree = () => {
  const [activeTab, setActiveTab] = useState("Management")

  return (
    <section className="w-full bg-[#FFFDF6] py-32">
      <div className="w-full px-20">

        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Fast-Track Your <span className="text-orange-500 italic">Degree</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Foundation and diploma programs designed for university success.
          </p>
        </div>

        <div className="flex gap-8 mb-12 text-sm font-medium">
          {Object.keys(programs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 transition ${
                activeTab === tab
                  ? "text-green-900 border-b-2 border-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-28">
          {programs[activeTab].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-[#003C32] text-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-65 object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90 mb-4">
                  {item.description}
                </p>
                <a href="#" className="text-sm underline">
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-900">
            <span className="text-orange-500 italic">Skills</span> in Shortage
          </h2>
          <p className="mt-3 text-gray-600">
            Sectors actively seeking international talent right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-[#003C32] text-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90 mb-4">
                  Lorem ipsum opms herist Lorem ipsum opms herist Lorem ipsum opms
                  herist Lorem ipsum herist Lorem ipsuna...
                </p>
                <a href="#" className="text-sm underline">
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FastTrackDegree
