import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Turnkey Landscaping Projects',
    description: 'Complete outdoor transformation for farm houses, villas and large properties. We handle layout planning, material sourcing, structural work and final detailing.',
  },
  {
    title: 'Terrace & Rooftop Gardens',
    description: 'We design and execute structured terrace gardens with proper drainage, waterproofing integration and aesthetic planning.',
  },
  {
    title: 'Vertical Garden Installations',
    description: 'Modern green wall systems for luxury homes and commercial facades designed for durability and elegance.',
  },
  {
    title: 'Premium Garden Maintenance',
    description: 'Ongoing care services for established landscaped properties requiring professional upkeep.',
  },
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-white p-6 sm:p-8 rounded-xl border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button
                onClick={() => navigate('/booking')}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
              >
                Request a Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
