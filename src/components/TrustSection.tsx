import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const carouselImages = [
  'https://i.ibb.co/LMMrcMG/Screenshot-6-3-2026-74451.jpg',
  'https://i.ibb.co/B2dMmWN8/Screenshot-6-3-2026-7448.jpg',
  'https://i.ibb.co/TxyNTrhj/Screenshot-6-3-2026-74038.jpg',
  'https://i.ibb.co/Z6CXnmLt/Screenshot-6-3-2026-211137.jpg',
  'https://i.ibb.co/zWdL0mb4/Screenshot-6-3-2026-74759.jpg',
  'https://i.ibb.co/QF2SrMq5/Screenshot-6-3-2026-7437.jpg',
  'https://i.ibb.co/nMgTQfgq/Screenshot-6-3-2026-74029.jpg',
  'https://i.ibb.co/fdrNh5qP/Screenshot-6-3-2026-7399.jpg'
];

export default function TrustSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center leading-tight">
          Why Ahmedabad Homeowners and Businesses Trust Hyderabadi Nursery & Landscaping
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 text-center leading-relaxed">
          Hyderabadi Nursery & Landscaping has delivered professional landscaping solutions across Ahmedabad. Our experienced team manages complete turnkey landscaping projects — from concept design to final execution — using premium materials and structured planning.
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
            {carouselImages.map((imageUrl, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-2 border-green-100">
                  <div className="w-full h-64 sm:h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={`Carousel ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <p className="text-gray-400">Image {index + 1}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {carouselImages.map((_, index) => (
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
