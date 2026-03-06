import { useEffect, useState } from 'react';

const clientLogos = [
'https://i.ibb.co/3mQ2H8wq/images-1.png',
'https://i.ibb.co/DPJmg0F2/Screenshot-6-3-2026-81158.jpg',
'https://i.ibb.co/GQYpJXhc/Screenshot-6-3-2026-81151.jpg',
'https://i.ibb.co/BVHgXDhw/Screenshot-6-3-2026-81146.jpg',
'https://i.ibb.co/MyNhVmCv/Screenshot-6-3-2026-8103.jpg',
'https://i.ibb.co/GZWNNwQ/Screenshot-6-3-2026-8957.jpg',
'https://i.ibb.co/mF13DYTh/Screenshot-6-3-2026-8941.jpg',
'https://i.ibb.co/whxP6p6J/Screenshot-6-3-2026-8926.jpg',
'https://i.ibb.co/fZzqtQf/Screenshot-6-3-2026-8913.jpg',
'https://i.ibb.co/0jV8rtsW/Screenshot-6-3-2026-896.jpg',
'https://i.ibb.co/VY1SQFhz/Screenshot-6-3-2026-8857.jpg',
'https://i.ibb.co/99RrDxLT/Screenshot-6-3-2026-8851-Copy.jpg',
'https://i.ibb.co/pvTfpXPX/Screenshot-6-3-2026-8841-Copy.jpg'
];

export default function ClientLogos() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (clientLogos.length * 150));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 sm:mb-16 text-center leading-tight">
          Our Clients
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex gap-8 sm:gap-12"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: 'transform 0.05s linear',
            }}
          >
            {[...Array(2)].map((_, setIndex) =>
              clientLogos.map((logo, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="flex-shrink-0 w-32 h-24 sm:w-40 sm:h-28 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200"
                >
                  {logo ? (
                    <img
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <p className="text-gray-400 text-sm text-center">Logo {index + 1}</p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
