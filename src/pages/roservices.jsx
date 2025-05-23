import React from 'react';

const ROFilterServices = () => {
  const servicesData = [
    {
      image: "https://www.kent.co.in/images/water-purifiers/uv/uv-water-purifiers-main-banner.png",
      title: "RO Installation",
      description: "Professional installation of RO water purifiers, ensuring clean and safe drinking water with expert setup.",
      time: "2-4 hours",
      price: "₹3,000 - ₹7,000",
      features: ["Free water quality test", "1-year installation warranty", "Expert setup"],
      rating: 4.8,
      reviews: 142,
    },
    {
      image: "https://www.scrapcareindia.com/ro/images/ro-installation2.webp",
      title: "RO Repair",
      description: "Quick and reliable repair services for all RO system issues, restoring pure water flow with guaranteed results.",
      time: "1-2 hours",
      price: "₹1,000 - ₹4,000",
      features: ["Same-day repair", "Comprehensive diagnostics", "Genuine parts"],
      rating: 4.6,
      reviews: 95,
    },
    {
      image: "https://img3.exportersindia.com/product_images/bc-full/2021/1/6673917/ro-maintenance-service-1611396089-5699907.jpeg",
      title: "RO Maintenance",
      description: "Thorough maintenance to keep your RO system running efficiently, ensuring long-term performance and water purity.",
      time: "1-3 hours",
      price: "₹800 - ₹2,500",
      features: ["Filter replacement", "System cleaning", "Performance check"],
      rating: 4.9,
      reviews: 178,
    },

    {
      image: "https://www.cdc.gov/drinking-water/media/images/2024/04/replacing-filter-GettyImages-1372970832-16x9-1.jpg?_=57707",
      title: "Filter Replacement",
      description: "Expert replacement of RO filters to maintain water quality and system efficiency, using high-quality components.",
      time: "1-2 hours",
      price: "₹500 - ₹1,500",
      features: ["Genuine filter replacement", "Water quality check", "Quick service"],
      rating: 4.7,
      reviews: 82,
    },

  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-gray-100 h-100vh">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-8">
          Our Exceptional RO Filter Services
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Experience top-tier RO water purifier solutions for clean, safe drinking water in Pune, Delhi, and Mumbai. Trust us for unmatched quality and service.
        </p>

        <div className="h-screen overflow-hidden">
          <div className="h-full overflow-y-auto pr-2 flex flex-col gap-8">
            {servicesData.map((service, index) => (
              <React.Fragment key={index}>
                <div
                  className="relative bg-white rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-start border-2 border-blue-200 transition-transform duration-500 hover:-translate-y-3 hover:shadow-3xl"
                  style={{
                    animation: `fadeInSlideUp 0.5s ease-in-out forwards`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    className="w-full md:w-1/3 h-72 object-cover rounded-lg mb-6 md:mb-0 md:mr-8"
                  />
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-extrabold text-blue-800">{service.title}</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(service.rating) ? 'text-yellow-400' : i < service.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">({service.reviews} reviews)</span>
                      </div>
                    </div>
                    <p className="text-base text-gray-600 mb-4">{service.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="font-semibold text-gray-800">Estimated Time: </span>
                        <span className="font-bold text-blue-600">{service.time}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Price Range: </span>
                        <span className="font-bold text-blue-600">{service.price}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="font-semibold text-gray-800">Key Features:</span>
                      <ul className="mt-2 space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button positioned bottom right */}
                    <div className="mt-auto self-end">
                      <a
                        href={`https://wa.me/917900225025?text=Hello,%20I’d%20like%20to%20book%20an%20RO%20${service.title}%20service`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:animate-pulse"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
                {index < servicesData.length - 1 && <hr className="border-t border-gray-300 my-8" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInSlideUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default ROFilterServices;