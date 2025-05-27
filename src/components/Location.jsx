import React from "react";

const Location = () => {
  return (
    <>
      {/* Find Us in Delhi Section (Blue) */}
      <section className="py-12 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-8 text-center">
            Find Us in Delhi
          </h2>

          <div className="flex justify-center items-center">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full px-4">
              {/* Map */}
              <div className="md:w-2/3 w-full">
                <div className="map-container rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps?q=28.499500,77.245528&hl=en&z=15&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ZubairAircon Delhi Location"
                    style={{
                      border: 0,
                      width: "100%",
                      height: "300px",
                      borderRadius: "1rem",
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
              </div>

              {/* Address Details */}
              <div className="md:w-1/3 w-full text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4 text-white">Our Delhi Office</h3>
                <p className="text-gray-200 mb-4">
                  F2, Sangam Vihar, Ratiya Marg,
                  <br />
                  Near KSK School, Delhi
                </p>
                <p className="text-gray-200 mb-4">
                  <strong>Phone:</strong> +91 81789 84969 <br />
                  <strong>Alt:</strong> +91 97566 20360 <br />
                  <strong>Email:</strong> zubairaircon600@gmail.com
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-white text-blue-600 font-extrabold py-3 px-10 rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-100 transition"
                  style={{
                    transition: "all 0.3s ease",
                    background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(145deg, #e6f0ff, #d4e4ff)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(145deg, #ffffff, #f0f0f0)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
