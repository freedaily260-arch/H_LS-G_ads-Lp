const steps = [
  'Site Visit & Requirement Discussion',
  'Concept Planning & Outlining Design',
  'Material Selection & Cost Estimation',
  'Professional On-Site Execution',
  'Final Handover & Walkthrough',
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10 sm:mb-14 text-center leading-tight">
          Our Landscaping Process
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 sm:gap-6 bg-gradient-to-r from-green-50 to-white p-5 sm:p-6 rounded-xl border-l-4 border-green-600 hover:shadow-lg transition-all">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
                {index + 1}
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 pt-2 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
