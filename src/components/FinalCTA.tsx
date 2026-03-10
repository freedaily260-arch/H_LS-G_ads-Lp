import { Phone, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FinalCTA() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://i.ibb.co/qYgdNZPT/Whats-App-Image-6-02-26-at-1-36-55-PM-3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          Ready To Transform Your Outdoor Space?
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          Book your free consultation today and speak with our landscaping experts.
        </p>

        <button
          onClick={() => navigate('/booking')}
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 sm:px-14 py-5 sm:py-6 rounded-lg text-lg sm:text-xl transition-all transform hover:scale-105 shadow-2xl mb-6 sm:mb-8 w-full sm:w-auto"
        >
          Schedule Site Visit
        </button>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a href="tel:7228001500" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm sm:text-base transition-all border border-white/30 backdrop-blur-sm w-full sm:w-auto justify-center">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a href="https://wa.me/917228001500" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm sm:text-base transition-all border border-white/30 backdrop-blur-sm w-full sm:w-auto justify-center">
            <MessageCircle className="w-4 h-4" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
