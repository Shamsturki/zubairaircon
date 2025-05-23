import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      name: 'Priya Sharma',
      location: 'Mumbai',
      quote: 'ZubairAircon installed my AC unit in just a few hours, and it’s been running perfectly ever since. Their team was professional and friendly!',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      name: 'Rahul Verma',
      location: 'Delhi',
      quote: 'I had an emergency breakdown during a heatwave, and ZubairAircon’s 24/7 service saved the day. Highly recommend their quick response!',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      name: 'Anjali Patil',
      location: 'Pune',
      quote: 'The maintenance service from ZubairAircon has kept my AC in top shape. Their technicians are knowledgeable and thorough.',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      name: 'Vikram Singh',
      location: 'Mumbai',
      quote: 'ZubairAircon’s team provided exceptional service for my office AC units. Their expertise and affordability are unmatched!',
    },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <style>
        {`
          .testimonial-card {
            transition: transform 0.5s ease, box-shadow 0.5s ease;
          }
          .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          }
          .avatar {
            transition: transform 0.3s ease;
          }
          .avatar:hover {
            transform: scale(1.1);
          }
          .quote-icon {
            opacity: 0.2;
            position: absolute;
            top: 10px;
            left: 10px;
          }
          .gradient-text {
            background: linear-gradient(to right, #60a5fa, #ffffff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          @keyframes fadeInSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8 text-center ">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
          Hear from our satisfied clients about their experience with ZubairAircon's top-notch AC services in Pune, Delhi, and Mumbai.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-lg shadow-lg p-6 relative overflow-hidden"
              style={{
                animation: 'fadeInSlideUp 0.5s ease-out forwards',
                animationDelay: `${index * 0.3}s`,
              }}
            >
              <svg
                className="quote-icon w-12 h-12 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.003-.002C.224 21.134 0 20.818 0 20.419c0-.589.478-1.054 1.056-1.061C5.206 19.31 8 16.771 8 12.856V5.669C8 4.202 8.898 3 9.983 3h.01c1.092 0 2.006.897 2.006 2.005v7.378c0 4.734-2.942 8.124-7.95 8.706a1.02 1.02 0 0 0-.915 1.024c0 .57.465 1.032 1.034 1.028 5.385-.038 9.965-4.511 9.965-9.763V5.005C14.135 3.897 13.075 3 11.983 3h-.01z" />
              </svg>
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-16 h-16 rounded-full object-cover mr-4 avatar"
                />
                <div>
                  <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4 mt-4">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;