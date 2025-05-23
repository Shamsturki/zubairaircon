import React from 'react';

const ACservices = () => {
  const servicesData = [
    {
      image: "https://www.shutterstock.com/image-photo/hvac-technician-performing-air-conditioner-600nw-2488702851.jpg",
      title: "AC Installation",
      description: "Expert installation of all AC units, ensuring peak performance and long-term reliability with a complimentary consultation.",
      time: "3-6 hours",
      price: "₹5,000 - ₹10,000",
      features: ["Free consultation", "1-year warranty", "Professional setup"],
      rating: 4.7,
      reviews: 156,
    },
    {
      image: "https://www.shutterstock.com/image-photo/repairman-fix-air-conditioning-systems-600nw-2463365013.jpg",
      title: "AC Repair",
      description: "Swift and reliable repairs for all AC issues, restoring cool comfort in no time with guaranteed satisfaction.",
      time: "1-3 hours",
      price: "₹2,000 - ₹6,000",
      features: ["Same-day service", "Diagnostic check", "Quality parts"],
      rating: 4.5,
      reviews: 89,
    },
    {
      image: "https://www.shutterstock.com/image-photo/experienced-hvac-technician-performing-maintenance-600nw-2485364943.jpg",
      title: "AC Maintenance",
      description: "Comprehensive maintenance to keep your AC efficient, preventing costly breakdowns and extending its lifespan.",
      time: "2-4 hours",
      price: "₹1,500 - ₹4,000",
      features: ["Filter cleaning", "Full inspection", "Efficiency boost"],
      rating: 4.8,
      reviews: 203,
    },
    {
      image: "https://content.jdmagicbox.com/comp/def_content/ac-repair-and-services-videocon/shutterstock-273874790-ac-repair-and-services-videocon-7-ne3ni.jpg",
      title: "Emergency Services",
      description: "24/7 urgent AC repair support to ensure you stay cool during unexpected breakdowns, any time of day.",
      time: "1-2 hours",
      price: "₹3,000 - ₹8,000",
      features: ["24/7 availability", "Rapid response", "Priority service"],
      rating: 4.6,
      reviews: 134,
    },
    {
      image: "https://acservice299.com/wp-content/uploads/2024/02/ustad_ac_service-300x200.webp",
      title: "Filter Cleaning",
      description: "Deep cleaning of AC filters to improve air quality and cooling efficiency, ensuring a healthier environment.",
      time: "1-2 hours",
      price: "₹800 - ₹2,000",
      features: ["Deep filter clean", "Air quality check", "Quick service"],
      rating: 4.9,
      reviews: 67,
    },
    {
      image: "https://www.shutterstock.com/image-photo/technician-refilling-air-conditioner-gas-600nw-2314567891.jpg",
      title: "Gas Refilling",
      description: "Safe and precise refrigerant refilling to restore your AC’s cooling power, with eco-friendly gases.",
      time: "1-3 hours",
      price: "₹2,500 - ₹5,000",
      features: ["Eco-friendly gas", "Pressure check", "Leak detection"],
      rating: 4.4,
      reviews: 98,
    },
     {
    image: "https://acservice299.com/wp-content/uploads/2024/02/air-conditioner-cleaning-with-spray-foam-cleaner-300x200.jpg",
    title: "Foam Jet Cleaning (1.5 Ton)",
    description: "Deep foam jet pump cleaning service to enhance the cooling and efficiency of your 1.5 Ton AC.",
    time: "2-3 hours",
    price: "₹599+",
    features: ["Foam jet cleaning", "Increased efficiency", "Hygienic treatment"],
    rating: 4.6,
    reviews: 125,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/ustad_ac_service-300x200.webp",
    title: "Panasonic AC Jet Pump Cleaning (1.5 Ton)",
    description: "Thorough jet pump deep cleaning for your 1.5 Ton Panasonic AC at a great price.",
    time: "2 hours",
    price: "₹499+",
    features: ["Jet pump cleaning", "Panasonic compatible", "Quick service"],
    rating: 4.5,
    reviews: 110,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/01/Deep-Cleaning-of-AC-for-fresh-air-Filter-coils-etc.-cleaned-with-water-Checks-the-elements-properlyc-min-1-300x200.png",
    title: "AC Repair in Delhi (1.5 Ton)",
    description: "Reliable repair and servicing for your 1.5 Ton AC with affordable pricing.",
    time: "1-2 hours",
    price: "₹399+",
    features: ["Basic servicing", "Quick diagnostics", "Trained professionals"],
    rating: 4.4,
    reviews: 90,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/Split-Ac-Service-300x199.webp",
    title: "Gas Top-up (1.5 Ton)",
    description: "Top-up your 1.5 Ton AC's gas for improved cooling performance.",
    time: "1 hour",
    price: "₹1,499+",
    features: ["Gas refill", "Leak check", "Improved cooling"],
    rating: 4.6,
    reviews: 100,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/03/1707668752223_SKU-0013_0-300x300.jpg",
    title: "Complete Gas Filling (1.5 Ton)",
    description: "Full refrigerant refill for your 1.5 Ton AC with complete pressure check.",
    time: "2 hours",
    price: "₹2,499+",
    features: ["Full refill", "Leak testing", "Cooling assurance"],
    rating: 4.7,
    reviews: 92,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/ac-repairing-service-250x250-1.webp",
    title: "AC Installation (1.5 Ton)",
    description: "Expert installation of 1.5 Ton AC units ensuring proper setup and safety.",
    time: "3-5 hours",
    price: "₹1,199+",
    features: ["Wall mounting", "Stabilizer setup", "Safety check"],
    rating: 4.8,
    reviews: 140,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/Ac-Gas-Filling-300x206.jpg",
    title: "AC Uninstallation (1.5 Ton)",
    description: "Hassle-free and safe removal of 1.5 Ton AC units from your premises.",
    time: "1-2 hours",
    price: "₹499+",
    features: ["Safe dismounting", "Wiring removal", "Pipe sealing"],
    rating: 4.5,
    reviews: 80,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/01/AC-SERVICE-299dd7ffff-min-300x200.png",
    title: "AC Repair in Delhi (2 Ton)",
    description: "Affordable repair and servicing solutions for your 2 Ton AC in Delhi.",
    time: "1-2 hours",
    price: "₹499+",
    features: ["Inspection", "Repair", "Free diagnostics"],
    rating: 4.3,
    reviews: 76,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/ustad_ac_service-300x200.webp",
    title: "Foam Jet Cleaning (2 Ton)",
    description: "Revitalize your 2 Ton AC with powerful foam jet pump deep cleaning.",
    time: "2-3 hours",
    price: "₹799+",
    features: ["Deep foam clean", "Cooling improvement", "Odor removal"],
    rating: 4.6,
    reviews: 108,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/air-conditioner-cleaning-with-spray-foam-cleaner-300x200.jpg",
    title: "Panasonic AC Jet Pump Cleaning (2 Ton)",
    description: "Effective jet pump cleaning service for your Panasonic 2 Ton AC.",
    time: "2 hours",
    price: "₹699+",
    features: ["High-pressure cleaning", "Internal part wash", "Brand-specific care"],
    rating: 4.5,
    reviews: 97,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/ustad_ac_service-300x200.webp",
    title: "Gas Top-up (2 Ton)",
    description: "Top-up refrigerant for your 2 Ton AC with performance testing.",
    time: "1-2 hours",
    price: "₹2,499+",
    features: ["Refill", "Leak check", "Quick service"],
    rating: 4.4,
    reviews: 86,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/air-conditioner-cleaning-with-spray-foam-cleaner-300x200.jpg",
    title: "Complete Gas Filling (2 Ton)",
    description: "Comprehensive gas refill for your 2 Ton AC ensuring optimal performance.",
    time: "2-3 hours",
    price: "₹2,999+",
    features: ["Complete refill", "Performance test", "Long-lasting cooling"],
    rating: 4.7,
    reviews: 105,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/ustad_ac_service-300x200.webp",
    title: "AC Installation (2 Ton)",
    description: "Efficient and safe installation of your 2 Ton AC with full setup service.",
    time: "3-6 hours",
    price: "₹1,499+",
    features: ["Pipe setup", "Drain setup", "Wall brackets"],
    rating: 4.8,
    reviews: 138,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/air-conditioner-cleaning-with-spray-foam-cleaner-300x200.jpg",
    title: "AC Uninstallation (2 Ton)",
    description: "Easy and professional uninstallation service for your 2 Ton AC.",
    time: "1-2 hours",
    price: "₹699+",
    features: ["Piping removal", "System sealing", "Unit packing"],
    rating: 4.4,
    reviews: 75,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/ustad_ac_service-300x200.webp",
    title: "Window AC Service (1.5 Ton)",
    description: "Affordable maintenance for your 1.5 Ton window AC including cleaning and filter wash.",
    time: "1-2 hours",
    price: "₹399+",
    features: ["Filter wash", "Condenser cleaning", "Cooling check"],
    rating: 4.3,
    reviews: 67,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/air-conditioner-cleaning-with-spray-foam-cleaner-300x200.jpg",
    title: "Jet Pump Cleaning for Window AC (1.5 Ton)",
    description: "Jet pump deep cleaning for 1.5 Ton window AC to ensure optimal airflow.",
    time: "2 hours",
    price: "₹499+",
    features: ["Jet pump wash", "Improved airflow", "Interior cleaning"],
    rating: 4.4,
    reviews: 69,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/ustad_ac_service-300x200.webp",
    title: "Foam Jet Cleaning for Window AC (1.5 Ton)",
    description: "Foam jet deep cleaning for 1.5 Ton window AC for dust removal and cooling efficiency.",
    time: "2-3 hours",
    price: "₹599+",
    features: ["Foam jet", "Fins cleaning", "Bacteria removal"],
    rating: 4.5,
    reviews: 74,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/air-conditioner-cleaning-with-spray-foam-cleaner-300x200.jpg",
    title: "Cassette AC Service",
    description: "General servicing for cassette AC units to keep them running efficiently.",
    time: "2-3 hours",
    price: "₹999+",
    features: ["Filter clean", "Cooling test", "Basic inspection"],
    rating: 4.4,
    reviews: 60,
  },
  {
    image: "https://acservice299.com/wp-content/uploads/2024/02/ustad_ac_service-300x200.webp",
    title: "Cassette AC Jet Pump Cleaning",
    description: "Deep internal cleaning of cassette AC with powerful jet pump.",
    time: "3 hours",
    price: "₹1,199+",
    features: ["Jet pump wash", "Odor removal", "Cooling efficiency"],
    rating: 4.6,
    reviews: 68,
  },

  ];

  return (
<section className="py-16 bg-gradient-to-b from-blue-50 to-gray-100 h-100vh">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-8">
          Our Exceptional AC Services
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Experience top-tier AC solutions tailored for ultimate comfort in Pune, Delhi, and Mumbai. Trust ZubairAircon for unmatched quality and service.
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
                href={`https://wa.me/917900225025?text=Hello,%20I’d%20like%20to%20book%20an%20AC%20${service.title}%20service`}
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

export default ACservices;