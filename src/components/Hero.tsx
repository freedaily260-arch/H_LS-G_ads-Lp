import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://i.ibb.co/cXhXrJSR/IMG-200226008-jpg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          Premium Turnkey Landscaping Services in Ahmedabad
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
          We Specialize in Large-Scale Landscaping Projects (1000+ Sq Ft) for Farm Houses, Villas, Bungalows & Luxury Homes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 text-white">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-base sm:text-lg font-semibold">4.8 Rated Landscaping Company</span>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-100 mb-10 sm:mb-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>End-to-End Design & Execution</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>Serving Ahmedabad & Nearby Areas</span>
          </div>
        </div>

        <button
          onClick={() => navigate('/booking')}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-lg text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl"
        >
          Book A Free Site Consultation
        </button>
      </div>
    </section>
  );
}
