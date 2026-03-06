export default function TargetAudience() {
  return (
    <section id="who-is-this-for" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 leading-tight">
          Who This Service Is For?
        </h2>

        <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg border-2 border-green-100 space-y-6">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            We work with homeowners and property developers planning landscaping projects above 1000 sq ft.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            If you are looking for a complete garden transformation with long-term quality and professional execution, we are the right partner.
          </p>

          <p className="text-base sm:text-lg text-gray-600 italic leading-relaxed">
            We do not undertake small patchwork or minor garden adjustments.
          </p>
        </div>
      </div>
    </section>
  );
}
