import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Rajesh Patel',
    rating: 5,
    text: 'Outstanding landscaping work! They transformed our farmhouse completely.',
  },
  {
    name: 'Priya Shah',
    rating: 5,
    text: 'Professional team with excellent attention to detail. Highly recommended!',
  },
  {
    name: 'Amit Desai',
    rating: 5,
    text: 'Best landscaping service in Ahmedabad. Worth every rupee!',
  },
];

export default function TrustSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center leading-tight">
          Why Ahmedabad Homeowners Trust Hyderabadi Nursery & Landscapers
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 text-center leading-relaxed">
          Hyderabadi Nursery Landscapers has delivered professional landscaping solutions across Ahmedabad. Our experienced team manages complete turnkey landscaping projects — from concept design to final execution — using premium materials and structured planning.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 sm:mb-12 text-center font-semibold">
          We focus exclusively on high-quality, large-scale transformations.
        </p>

        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-xl sm:text-2xl font-bold text-gray-900">4.8/5 Rating</span>
          <span className="text-base sm:text-lg text-gray-600">Based on 19 Verified Google Reviews</span>
        </div>

        <div className="relative max-w-3xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-2 border-green-100">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-green-600 w-6 sm:w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
