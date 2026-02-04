const WhyAustralia = () => {
  return (
    <section className="w-full bg-[#FBF9F4] py-32">
      <div className="w-full px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <div>
          <h2 className="
            text-4xl md:text-5xl font-semibold text-gray-900 leading-tight
            opacity-0 animate-fade-up
          ">
            Why <span className="text-orange-500 italic">Australia</span> is the
            <br />
            Global Destination of Choice
          </h2>

          <p
            className="
              mt-6 text-gray-700 leading-relaxed max-w-xl
              opacity-0 animate-fade-up
            "
            style={{ animationDelay: "150ms" }}
          >
            With 42 top universities, studying in Australia offers high-quality
            education, career opportunities, and cultural experience. It is
            known for its globally recognized degrees, research facilities, and
            strong industry connections, making it one of the top destinations
            for international students.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            {[
              { value: "140,000+", text: "skilled and family visas granted" },
              { value: "1.9m+", text: "temporary visas granted" },
              { value: "13,000+", text: "humanitarian visas granted" },
            ].map((item, i) => (
              <div
                key={i}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${300 + i * 120}ms` }}
              >
                <p className="text-3xl font-bold text-orange-500">
                  {item.value}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="
            relative w-full 130 lg:ml-auto group
            opacity-0 animate-fade-up
          "
          style={{ animationDelay: "200ms" }}
        >
          <img
            src="/why-australia.png"
            alt="Why study in Australia"
            className="
              w-full h-full object-cover rounded-3xl shadow-lg
              transition-all duration-500 ease-out
              group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl
            "
          />
          <div className="absolute inset-0 rounded-3xl bg-black/10 pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default WhyAustralia;
