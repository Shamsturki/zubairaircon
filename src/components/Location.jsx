import React from "react";

const Location = () => {
  return (
    <>
      {/* Find Us in Delhi Section (Blue) */}
      <section className="py-12 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-8 text-center ">
            Find Us in Delhi
          </h2>

      <div className="flex justify-center items-center ">
  <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full px-4">
    {/* Map */}
    <div className="md:w-2/3 w-full">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.848305455575!2d77.27333021508364!3d28.61291298242517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a5d1a2f1c1%3A0x5f5f5f5f5f5f5f5f!2sVikas%20Marg%2C%20Laxmi%20Nagar%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1697621234567!5m2!1sen!2sin"
          allowFullScreen=""
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
        123, Vikas Marg, Laxmi Nagar,
        <br />
        Delhi, 110092
      </p>
      <p className="text-gray-200 mb-4">
        <strong>Phone:</strong> +91 987-654-3210
        <br />
        <strong>Email:</strong> support@zubairaircon.com
      </p>
      <a
        href="#contact"
        className="contact-button inline-block bg-white text-blue-600 font-extrabold py-3 px-10 rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-100 transition"
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
