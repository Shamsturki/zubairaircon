import React, { useState, useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import PreviewSection from '../components/PreviewSection';
import Location from '../components/Location';
import Navbar from '../components/Navbar';
const ServiceCard = ({ image, title, description }) => (
  <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-80 mx-4">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      image: "https://www.shutterstock.com/image-photo/hvac-technician-performing-air-conditioner-600nw-2488702851.jpg",
      title: "AC Installation",
      description: "Professional installation of all types of AC units, ensuring optimal performance and longevity."
    },
    {
      image: "https://www.shutterstock.com/image-photo/repairman-fix-air-conditioning-systems-600nw-2463365013.jpg",
      title: "AC Repair",
      description: "Fast and reliable repair services to fix any AC issues, from leaks to poor cooling."
    },
    {
      image: "https://www.shutterstock.com/image-photo/experienced-hvac-technician-performing-maintenance-600nw-2485364943.jpg",
      title: "AC Maintenance",
      description: "Regular maintenance plans to keep your AC running efficiently and prevent breakdowns."
    },
    {
      image: "https://content.jdmagicbox.com/comp/def_content/ac-repair-and-services-videocon/shutterstock-273874790-ac-repair-and-services-videocon-7-ne3ni.jpg",
      title: "Emergency Services",
      description: "24/7 emergency support for urgent AC repairs, ensuring you stay cool any time."
    },
    {
      image: "https://www.shutterstock.com/image-photo/hvac-technician-performing-air-conditioner-600nw-2488702851.jpg",
      title: "AC Installation",
      description: "Professional installation of all types of AC units, ensuring optimal performance and longevity."
    },
    {
      image: "https://www.shutterstock.com/image-photo/repairman-fix-air-conditioning-systems-600nw-2463365013.jpg",
      title: "AC Repair",
      description: "Fast and reliable repair services to fix any AC issues, from leaks to poor cooling."
    },
    {
      image: "https://www.shutterstock.com/image-photo/experienced-hvac-technician-performing-maintenance-600nw-2485364943.jpg",
      title: "AC Maintenance",
      description: "Regular maintenance plans to keep your AC running efficiently and prevent breakdowns."
    },
    {
      image: "https://content.jdmagicbox.com/comp/def_content/ac-repair-and-services-videocon/shutterstock-273874790-ac-repair-and-services-videocon-7-ne3ni.jpg",
      title: "Emergency Services",
      description: "24/7 emergency support for urgent AC repairs, ensuring you stay cool any time."
    }
  ];

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);

  return (
    <div className="relative">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (320 + 32)}px)` }}>
        {services.map((service, index) => (
          <ServiceCard key={index} image={service.image} title={service.title} description={service.description} />
        ))}
      </div>
      <button onClick={prevSlide} className="carousel-button absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button onClick={nextSlide} className="carousel-button absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

const FAQItem = ({ question, answer, isOpen, onToggle, isLast }) => (
  <div className={`mb-2 ${!isLast ? 'border-b border-gray-300' : ''}`}>
    <button className="w-full flex justify-between items-center py-4 text-left focus:outline-none scale-hover" onClick={onToggle}>
      <h3 className="text-xl font-bold text-gray-900">{question}</h3>
      <svg className={`w-6 h-6 chevron text-gray-600 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    <div className={`accordion-content ${isOpen ? 'accordion-content-open' : 'accordion-content-closed'}`}>
      <div className="pb-4 text-gray-600">
        <p className="text-lg">{answer}</p>
      </div>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How often should I service my AC unit?",
      answer: "We recommend servicing your AC unit at least once a year, ideally before the summer season. Regular maintenance ensures optimal performance, prevents breakdowns, and extends the lifespan of your unit."
    },
    {
      question: "What does AC maintenance include?",
      answer: "AC maintenance typically includes cleaning or replacing filters, checking refrigerant levels, inspecting electrical components, cleaning the coils, and ensuring proper airflow. This keeps your AC running efficiently."
    },
    {
      question: "How do I know if my AC needs repairs?",
      answer: "Signs your AC needs repairs include poor cooling, unusual noises, frequent cycling, water leaks, or a sudden increase in energy bills. Contact us immediately if you notice any of these issues."
    },
    {
      question: "What is the best location for installing an AC unit?",
      answer: "The best location depends on your room layout. For split ACs, the indoor unit should be mounted on a wall with good airflow, away from heat sources. Outdoor units need a shaded, well-ventilated spot."
    },
    {
      question: "Can I install an AC unit myself?",
      answer: "We strongly advise against DIY AC installation. Improper installation can lead to inefficiency, leaks, or damage. Our professional technicians ensure safe and correct fitting for optimal performance."
    },
    {
      question: "How long does AC installation take?",
      answer: "A standard AC installation typically takes 3-6 hours, depending on the type of unit and complexity of the setup. Our team works efficiently to minimize disruption."
    },
    {
      question: "What size AC is right for my room?",
      answer: "The right AC size depends on your room’s dimensions, insulation, and usage. A general rule is 1 ton of cooling capacity for every 120-150 square feet. We offer free consultations to help you choose."
    },
    {
      question: "How can I improve my AC’s efficiency?",
      answer: "To improve efficiency, keep filters clean, ensure proper insulation, avoid setting the thermostat too low, and schedule regular maintenance. Also, use curtains to block heat during peak hours."
    },
    {
      question: "What should I do if my AC is leaking water?",
      answer: "Water leaks are often caused by a clogged drain line or low refrigerant. Turn off your AC and contact us immediately. Our technicians will diagnose and fix the issue to prevent further damage."
    },
    {
      question: "Do you offer emergency AC repair services?",
      answer: "Yes, we provide 24/7 emergency repair services. Whether it’s a sudden breakdown or a major issue, our team is ready to help you stay cool and comfortable any time of day."
    }
  ];

  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
<div className="bg-gray-200 py-16 fade-in">
  <div className="w-full lg:w-[60%] mx-auto px-4">
<h2 className="text-4xl md:text-5xl font-extrabold mb-8 pb-4 text-center gradient-text-dark">
  Frequently Asked Questions About AC Maintenance & Fitting
</h2>

    <p className="text-lg text-gray-700 mb-8 text-center font-medium">
      At ZubairAircon, we’re here to answer all your questions about AC maintenance, installation, and proper usage. Here’s what you need to know:
    </p>

    {faqData.map((item, index) => (
      <FAQItem
        key={index}
        question={item.question}
        answer={item.answer}
        isOpen={openIndex === index}
        onToggle={() => handleToggle(index)}
        isLast={index === faqData.length - 1}
      />
    ))}

    <p className="text-lg text-gray-700 mt-8 text-center font-medium">
      ZubairAircon is committed to keeping your home or office comfortable with expert AC maintenance and fitting services. Contact us today for more information!
    </p>
  </div>
</div>

  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: "https://www.hindustantimes.com/ht-img/img/2023/09/13/1600x900/AC_price_1694610505075_1694610521911.jpg" },
    { image: "https://www.daikinindia.com/sites/default/files/diakin.jpg" },
    { image: "https://www.globalheatingairconditioning.com/wp-content/uploads/2023/08/Untitled-design-24.png" }
  ];

  useEffect(() => {
    const showSlide = (index) => {
      setCurrentSlide(index);
    };
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
    showSlide(currentSlide);
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="bg-gray-100 font-sans">
      <style>
        {`
          body { font-family: 'Poppins', sans-serif; }
          .accordion-content { transition: max-height 0.8s ease-in-out, opacity 0.8s ease-in-out; overflow: hidden; }
          .accordion-content-closed { max-height: 0; opacity: 0; }
          .accordion-content-open { max-height: 500px; opacity: 1; }
          .chevron { transition: transform 0.5s ease; }
          .fade-in { animation: fadeIn 1s ease-in-out; }
          @keyframes fadeIn { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
          .scale-hover { transition: transform 0.3s ease; }
          .scale-hover:hover { transform: scale(1.02); }
          .footer-link { transition: color 0.3s ease, transform 0.3s ease; }
          .footer-link:hover { color: #60a5fa; transform: translateX(5px); }
          .social-icon { transition: transform 0.3s ease, color 0.3s ease; }
          .social-icon:hover { transform: scale(1.2); color: #60a5fa; }
          .hero-slideshow { position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; overflow: hidden; background-color: #1e40af; }
          .hero-slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; background-attachment: fixed; opacity: 0; transition: opacity 1s ease-in-out; }
          .hero-slide.active { opacity: 1; }
          .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 1; }
          .hero-content { position: relative; z-index: 2; }
          .hero-text { animation: slideUp 1.2s ease-out; }
          .hero-button { transition: background-color 0.3s ease, transform 0.3s ease; }
          .hero-button:hover { background-color: #2563eb; transform: scale(1.05); }
          @keyframes slideUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
          .stay-cool-bg { background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://www.hindustantimes.com/ht-img/img/2023/09/13/1600x900/AC_price_1694610505075_1694610521911.jpg'); background-size: cover; background-position: center; background-attachment: fixed; }
          .about-image { transition: transform 0.5s ease; }
          .about-image:hover { transform: scale(1.05); }
          .about-text { animation: slideInLeft 1s ease-out; }
          @keyframes slideInLeft { 0% { opacity: 0; transform: translateX(-20px); } 100% { opacity: 1; transform: translateX(0); } }
          .carousel-slide { transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; }
          .carousel-button { transition: background-color 0.3s ease, transform 0.3s ease; }
          .carousel-button:hover { background-color: #2563eb; transform: scale(1.1); }
          .service-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .service-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); }
          .testimonial-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .testimonial-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); }
          .quote-icon { opacity: 0.2; position: absolute; top: 10px; left: 10px; }
          .why-choose-bg { background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1573166364524-3e2f2b6e9d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'); background-size: cover; background-position: center; background-attachment: fixed; }
          .reason-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .reason-card:hover { transform: scale(1.05); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); }
          .reason-icon { transition: transform 0.3s ease; }
          .reason-icon:hover { transform: rotate(15deg); }
          .expertise-bg { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); background-size: 200% 200%; animation: gradientShift 10s ease infinite; }
          @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
          .expertise-card { transition: transform 0.5s ease, box-shadow 0.5s ease; }
          .expertise-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3); }
          .counter { font-size: 2.5rem; font-weight: 800; line-height: 1; color: #ffffff; opacity: 0; animation: fadeInCounter 1.5s ease forwards; }
          @keyframes fadeInCounter { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
          .highlight-text { background: linear-gradient(90deg, #ffffff, #60a5fa); -webkit-background-clip: text; background-clip: text; color: transparent; animation: textGlow 2s ease-in-out infinite; }
          @keyframes textGlow { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.2); } }
          .expertise-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.2); z-index: 0; }
          .commitment-bg { background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://imgs.search.brave.com/tAqplT0J_7elHK6_dFLdtYlsGBha4SAYwVEqtXWsC1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vNVdHdWJh/NUtCa2ZUeXZCaFBI/WjlIVmdGZzBicmlf/Snc2YWQwT0VvQUt4/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk1U/RTQvT1RRNE9EUXpN/Uzl3YUc5MC9ieTkz/YjIxaGJpMTBkWEp1/L2N5MXZiaTEwYUdV/dFlXbHkvTFdOdmJt/UnBkR2x2Ym1WeS9M/V1p5YjIwdGRHaGxM/WEpsL2JXOTBaUzFq/YjI1MGNtOXMvTFhO/cGRIUnBibWN0YjI0/dC9kR2hsTFhOdlpt/RXVhbkJuL1AzTTlO/akV5ZURZeE1pWjMv/UFRBbWF6MHlNQ1pq/UFU5Ry9lV3hFUjFK/UVMzTkZNVXB2L1VW/cFpiMUpxYjA1dmEz/UlAvYzBod1UyNW1U/MGQ0UVY5bi9Za1pN/VFRnOQ'); background-size: cover; background-position: center; background-attachment: fixed; }
          .commitment-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .commitment-card:hover { transform: scale(1.05); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); }
          .commitment-icon { transition: transform 0.3s ease; }
          .commitment-icon:hover { transform: rotate(15deg); }
.gradient-text {
  background: linear-gradient(90deg, #1e3a8a, #1d4ed8); /* dark blue gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
  .gradient-text-dark {
  background: linear-gradient(90deg, #0f172a, #1e3a8a, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

        `}
      </style>



        <Navbar />

<section className="hero-slideshow max-h-[80vh] pt-18 ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        ))}
        <div className="hero-overlay"></div>
        <div className="hero-content container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 hero-text gradient-text">Beat the Heat with ZubairAircon!</h1>
          <p className="text-2xl md:text-4xl font-semibold mb-6 hero-text text-white">
            Premier AC Solutions for Delhi
          </p>
          <p className="text-lg md:text-2xl mb-8 hero-text text-gray-200 max-w-3xl mx-auto">
            Experience unmatched cooling comfort with our expert AC fitting, maintenance, and repair services. Stay cool, all year round, with ZubairAircon – your trusted partner in air conditioning excellence.
          </p>
          <a href="/services" className="hero-button bg-blue-600 text-white font-semibold py-4 px-10 rounded-lg shadow-lg hero-text">
            Get Started Today!
          </a>
        </div>
      </section>






      <section className="expertise-bg py-20 relative text-white">
        <div className="expertise-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center gradient-text">Our Expertise in AC Solutions</h2>
          <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto text-center text-gray-200">
            Over a decade of excellence in delivering top-tier AC services across Pune, Delhi, and Mumbai.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
            <div className="expertise-card bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-center w-full md:w-1/3 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">Comprehensive AC Care</h3>
              <p className="text-gray-200 mb-6">
                From installation to emergency repairs, we provide end-to-end solutions for all AC types.
              </p>
              <svg className="w-12 h-12 mx-auto text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="expertise-card bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-center w-full md:w-1/3 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">Advanced Technology</h3>
              <p className="text-gray-200 mb-6">
                We use cutting-edge tools and techniques to ensure your AC performs at its best.
              </p>
              <svg className="w-12 h-12 mx-auto text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="counter">10</div>
              <p className="text-lg text-gray-200 mt-4">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="counter">5000</div>
              <p className="text-lg text-gray-200 mt-4">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="counter">8000</div>
              <p className="text-lg text-gray-200 mt-4">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>







      <section className="bg-gray-200 py-24 min-h-[40vh] text-gray-900 flex items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center gradient-text-dark">Our Commitment to Excellence</h2>
          <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto text-center">
            At ZubairAircon, we are dedicated to providing exceptional service, sustainability, and customer satisfaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="commitment-card bg-white bg-opacity-90 rounded-lg p-6 text-center shadow-lg">
              <svg className="commitment-icon w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Unmatched Quality</h3>
              <p className="text-gray-700">
                We deliver top-notch AC services with a focus on precision and durability, ensuring your unit lasts longer.
              </p>
            </div>
            <div className="commitment-card bg-white bg-opacity-90 rounded-lg p-6 text-center shadow-lg">
              <svg className="commitment-icon w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 9h18M3 15h18M3 21h18"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-700">
                Your comfort is our priority. We go the extra mile to ensure every customer is delighted with our service.
              </p>
            </div>
            <div className="commitment-card bg-white bg-opacity-90 rounded-lg p-6 text-center shadow-lg">
              <svg className="commitment-icon w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Practices</h3>
              <p className="text-gray-700">
                We adopt sustainable methods to minimize environmental impact while keeping your AC efficient.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="stay-cool-bg h-[70vh] flex items-center justify-center text-center text-white">
        <div className="container mx-auto px-4 my-48">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 hero-text gradient-text">Stay Cool with ZubairAircon</h1>
          <p className="text-lg md:text-2xl mb-8 hero-text text-gray-200 max-w-3xl mx-auto">
            Expert AC fitting, maintenance, and repair services in Pune, Delhi, and Mumbai. ZubairAircon delivers cool comfort solutions, all year round.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/services" className="hero-button bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hero-text">
              Book a Service Now
            </a>
            <a href="/services" className="hero-button bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-lg shadow-lg hero-text hover:bg-blue-600 hover:border-transparent">
              Discover Our Services
            </a>
          </div>
        </div>
      </section>




<PreviewSection/>







<section className='bg-white'>       <Testimonials/>
 </section>






      {/* <section className="expertise-bg py-20 relative text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center gradient-text mb-8">Our Services</h2>
          <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto text-center">
            Discover the range of professional AC services we offer at ZubairAircon to keep your spaces cool and comfortable.
          </p>
          <Carousel />
        </div>
      </section> */}








      <section className="bg-white py-24 min-h-[60vh] text-white flex items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center gradient-text-dark">Why Choose ZubairAircon?</h2>
          <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto text-center text-gray-900">
            With years of expertise and a commitment to excellence, ZubairAircon stands out as your trusted partner for all AC needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reason-card bg-white bg-opacity-90 rounded-lg p-6 text-center shadow-lg">
              <svg className="reason-icon w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast & Reliable Service</h3>
              <p className="text-gray-700">
                We pride ourselves on quick response times and dependable solutions, ensuring your AC issues are resolved promptly.
              </p>
            </div>
            <div className="reason-card bg-white bg-opacity-90 rounded-lg p-6 text-center shadow-lg">
              <svg className="reason-icon w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Technicians</h3>
              <p className="text-gray-700">
                Our certified technicians bring years of experience, ensuring top-quality service for every AC unit.
              </p>
            </div>
            <div className="reason-card bg-white bg-opacity-90 rounded-lg p-6 text-center shadow-lg">
              <svg className="reason-icon w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Affordable Pricing</h3>
              <p className="text-gray-700">
                We offer competitive rates without compromising on quality, making AC care accessible for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>









   




      <section className="py-16 bg-gray-200 text-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://i.ibb.co/Z1hqSZ6c/Screenshot-2025-05-26-222042.png"
                alt="ZubairAircon technician working on AC unit"
                className="w-full h-96 object-cover rounded-lg shadow-lg about-image"
              />
            </div>
            <div className="md:w-1/2 about-text">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text-dark">About ZubairAircon</h2>
              <p className="text-lg text-gray-900 mb-4">
                Since 2015, ZubairAircon has been a leading provider of AC fitting, maintenance, and repair services across Pune, Delhi, and Mumbai. Our mission is to deliver reliable, efficient, and affordable solutions to keep your spaces cool and comfortable.
              </p>
              <p className="text-lg text-gray-900 mb-6">
                With a team of skilled technicians and a customer-first approach, we ensure every AC unit we service runs at peak performance. Trust us to handle all your air conditioning needs with professionalism and care.
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

<Location/>


      <FAQSection />











      <footer className="bg-gray-800 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-4 gradient-text">ZubairAircon</h3>
              <p className="text-gray-400 mb-4">
                ZubairAircon is your trusted partner for AC fitting, maintenance, and repair services. We provide top-notch solutions to keep your home or office cool and comfortable year-round.
              </p>
              <p className="text-gray-400">
                Serving Delhi with excellence since 2015.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="footer-link block text-gray-400">Home</a></li>
                <li><a href="#services" className="footer-link block text-gray-400">Services</a></li>
                <li><a href="#about" className="footer-link block text-gray-400">About Us</a></li>
                <li><a href="#contact" className="footer-link block text-gray-400">Contact Us</a></li>
                <li><a href="#faq" className="footer-link block text-gray-400">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#ac-installation" className="footer-link block text-gray-400">AC Installation</a></li>
                <li><a href="#ac-repair" className="footer-link block text-gray-400">AC Repair</a></li>
                <li><a href="#ac-maintenance" className="footer-link block text-gray-400">AC Maintenance</a></li>
                <li><a href="#gas-filling" className="footer-link block text-gray-400">AC Gas Filling</a></li>
                <li><a href="#emergency-services" className="footer-link block text-gray-400">Emergency Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>zubairaircon600@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>+91 817 898 4969</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Delhi </span>
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#facebook" className="social-icon text-gray-400">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#twitter" className="social-icon text-gray-400">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#instagram" className="social-icon text-gray-400">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.906.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.936 3.584.63 4.373c-.297.766-.498 1.635-.558 2.913C.015 8.566 0 8.983 0 12s.015 3.434.072 4.714c.06 1.278.261 2.147.558 2.913.306.789.717 1.459 1.384 2.126s1.337 1.077 2.126 1.384c.766.297 1.635.498 2.913.558C8.333 23.985 8.74 24 12 24s3.434-.015 4.714-.072c1.278-.06 2.147-.261 2.913-.558.789-.306 1.459-.717 2.126-1.384s1.077-1.337 1.384-2.126c.297-.766.498-1.635.558-2.913.057-1.28.072-1.697.072-4.714s-.015-3.434-.072-4.714c-.06-1.278-.261-2.147-.558-2.913-.306-.789-.717-1.459-1.384-2.126S20.416.936 19.627.63c-.766-.297-1.635-.498-2.913-.558C15.434.015 15.017 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.899s.682.82.899 1.382c.166.422.36 1.057.415 2.227.055 1.265.071 1.647.071 4.85s-.016 3.585-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.899 1.382s-.82.682-1.382.899c-.422.166-1.057.36-2.227.415-1.265.055-1.647.071-4.85.071s-3.585-.016-4.85-.071c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.899s-.682-.82-.899-1.382c-.166-.422-.36-1.057-.415-2.227-.055-1.265-.071-1.647-.071-4.85s.016-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.899-1.382s.82-.682 1.382-.899c.422-.166 1.057-.36 2.227-.415 1.265-.055 1.647-.071 4.85-.071zm0 3.022a6.818 6.818 0 100 13.636 6.818 6.818 0 000-13.636zm0 11.254a4.436 4.436 0 110-8.872 4.436 4.436 0 010 8.872zm5.622-11.652a1.592 1.592 0 11-3.184 0 1.592 1.592 0 013.184 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">© 2025 ZubairAircon. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Coded at night under caffeinne by @Wasi</p>
          </div>
        </div>
      </footer>





    </div>
  );
};

export default Home;