import React from 'react';

const PreviewSection = () => {
  const acServicesData = [
    {
      image: "https://www.shutterstock.com/image-photo/hvac-technician-performing-air-conditioner-600nw-2488702851.jpg",
      title: "AC Installation",
      description: "Expert installation for peak AC performance with a free consultation.",
      price: "₹1,199+",
    },
    {
      image: "https://www.shutterstock.com/image-photo/repairman-fix-air-conditioning-systems-600nw-2463365013.jpg",
      title: "AC Gas topup ",
      description: "Swift gas filling to restore your AC’s cooling with guaranteed satisfaction.",
      price: "₹1500+",
    },
    {
      image: "https://www.shutterstock.com/image-photo/experienced-hvac-technician-performing-maintenance-600nw-2485364943.jpg",
      title: "AC Maintenance",
      description: "Comprehensive maintenance to boost efficiency and extend AC lifespan.",
      price: "₹399+",
    },
    {
      image: "https://content.jdmagicbox.com/comp/def_content/ac-repair-and-services-videocon/shutterstock-273874790-ac-repair-and-services-videocon-7-ne3ni.jpg",
      title: "Emergency Services",
      description: "24/7 urgent AC repair support for unexpected breakdowns.",
      price: "₹500+",
    },
  ];

  const roServicesData = [
  {
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1733136610539-3f3e73.jpeg",
    title: "Water Purifier Check-up",
    description: "Complete check-up to identify issues before repair.",
    price: "₹299",
  },
  {
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1733136605585-3c4829.jpeg",
    title: "Water Purifier Filter Check-up",
    description: "Filters & RO membrane checked for performance.",
    price: "₹299",
  },
  {
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1733136615222-84e50b.jpeg",
    title: "Water Purifier Installation",
    description: "Professional installation of water purifiers ensuring clean and safe drinking water.",
    price: "₹399",
  },
  {
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1733136608298-9f1a6d.jpeg",
    title: "Water Purifier Uninstallation",
    description: "Hassle-free uninstallation service for water purifiers with care and safety.",
    price: "₹300",
  },
];


  return (
    <div>
      {/* AC Services Section */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-6">
            Our Top AC Services
          </h2>
          <p className="text-base text-gray-700 mb-8 text-center max-w-2xl mx-auto">
            Discover expert AC solutions for ultimate comfort in Pune, Delhi, and Mumbai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {acServicesData.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  index === 0
                    ? 'relative scale-105 border-2 border-gradient-to-r from-blue-600 to-blue-800 shadow-2xl'
                    : ''
                }`}
                style={{
                  animation: `fadeInSlideUp 0.5s ease-in-out forwards`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <img
                  src={service.image}
                  alt={`${service.title} service`}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                <p className="text-base font-semibold text-blue-600 mb-4">{service.price}</p>
                <a
                  href={`https://wa.me/919756620360?text=Hello,%20I’d%20like%20to%20book%20an%20AC%20${service.title}%20service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        <div className="mt-8 flex justify-center">
  <a
    href="/services"
    className="block bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 max-w-sm w-full text-center text-white font-semibold py-3 px-8 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
  >
    View All AC Services
  </a>
</div>

        </div>
      </section>

      {/* RO Services Section */}
      <section className="py-12 expertise-bg">
        <div className="container mx-auto px-4 max-w-6xl">
<h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">
            Our Top RO Services
          </h2>
          <p className="text-base text-white mb-8 text-center max-w-2xl mx-auto">
            Ensure clean and safe drinking water with our expert RO solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roServicesData.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  index === 0
                    ? 'relative scale-105 border-2 border-gradient-to-r from-blue-600 to-blue-800 shadow-2xl'
                    : ''
                }`}
                style={{
                  animation: `fadeInSlideUp 0.5s ease-in-out forwards`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <img
                  src={service.image}
                  alt={`${service.title} service`}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                <p className="text-base font-semibold text-blue-600 mb-4">{service.price}</p>
                <a
                  href={`https://wa.me/919756620360?text=Hello,%20I’d%20like%20to%20book%20an%20RO%20${service.title}%20service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
      <div className="mt-8 flex justify-center">
  <a
    href="/roservices"
    className="block bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center text-blue-700 font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg"
  >
    View All RO Services
  </a>
</div>

        </div>
      </section>

      <style>
        {`
          @keyframes fadeInSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default PreviewSection;
