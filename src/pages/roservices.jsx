import React from 'react';
import Navbar from '../components/Navbar';
const ROFilterServices = () => {
const servicesData = [
  {
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1733136610539-3f3e73.jpeg",
    title: "Water Purifier Check-up",
    description: "Complete check-up to identify issues before repair.",
    time: "60 mins",
    price: "₹299",
    features: ["Filters & RO membrane checked for performance", "Filter replacement, if needed", "Quick assessment"],
    rating: 4.80,
    reviews: 143000,
  },
  {
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1733136605585-3c4829.jpeg",
    title: "Water Purifier Filter Check-up",
    description: "Filters & RO membrane checked for performance.",
    time: "60 mins",
    price: "₹299",
    features: ["Performance check", "Filter replacement, if needed", "Quick diagnosis"],
    rating: 4.82,
    reviews: 145000,
  },
  {
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1733136615222-84e50b.jpeg",
    title: "Water Purifier Installation",
    description: "Professional installation of water purifiers ensuring clean and safe drinking water.",
    time: "60 mins",
    price: "₹399",
    features: ["Expert setup", "Water quality test", "Installation warranty"],
    rating: 4.83,
    reviews: 67000,
  },
  {
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1733136608298-9f1a6d.jpeg",
    title: "Water Purifier Uninstallation",
    description: "Hassle-free uninstallation service for water purifiers with care and safety.",
    time: "60 mins",
    price: "₹300",
    features: ["Safe removal", "Expert handling", "No extra charges"],
    rating: 4.88,
    reviews: 11000,
  },
];


  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-gray-100 h-100vh">
      <Navbar/>
      <div className="container mx-auto px-4 max-w-5xl mt-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-8">
          Our Exceptional RO Filter Services
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Experience top-tier RO water purifier solutions for clean, safe drinking water in Delhi. Trust us for unmatched quality and service.
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
                        href={`https://wa.me/918178984969?text=Hello,%20I’d%20like%20to%20book%20an%20RO%20${service.title}%20service`}
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
