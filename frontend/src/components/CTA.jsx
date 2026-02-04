const CTA = () => {
  return (
    <section className="w-full bg-[#FFFDF6] py-24">
      <div className="px-20">
        <div className="
          w-full
          rounded-[40px]
          bg-linear-to-br from-orange-500 via-orange-400 to-orange-600
          py-20 px-10
          text-center
          text-white
        ">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready To Start Your <span className="italic">Australian</span> Journey?
          </h2>

          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
            Let Our Experts In Mumbai And Brisbane Guide You Every
            <br />
            Step Of The Way.
          </p>

          <button className="
            bg-white text-orange-500
            px-8 py-3
            rounded-full
            font-medium
            hover:bg-orange-100
            transition
          ">
            Book Free Call
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
