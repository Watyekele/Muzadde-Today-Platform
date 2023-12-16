import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function Homepage() {
  return (
    <div>
      <Nav />

      <div className="page text-lg mt-16">
        {/* First Container */}
        <div className="bg-gray-300 text-white p-8">
          {/* Text and Images */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Text */}
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl text-left font-bold text-black mb-4">
                MUZADDE TODAY
              </h1>
              <p className="text-2xl md:text-4xl font-bold text-black">
                Is the only parent-focused specialized program
              </p>
            </div>

            {/* Images */}
            <div className="flex-1 flex flex-wrap justify-center space-x-4">
              <img
                src="/IMG-20231126-WA0005.jpg"
                alt="Family image"
                className="w-full md:w-64 h-64 object-cover rounded-md"
              />
              <img
                src="/IMG-20231124-WA0023.jpg"
                alt="doctor image"
                className="w-full md:w-32 h-64 object-cover rounded-md"
              />
              <img
                src="/IMG-20231124-WA0020.jpg"
                alt="happy child image"
                className="w-full md:w-32 h-64 object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Second Container */}
        <div className="bg-pink-50 text-black p-8">
          <h2 className="text-center  font-bold mb-4 md:ml-8 ">
            What we offer
          </h2>
          <h2 className="text-3xl text-center font-bold mb-4">
            How are we unique
          </h2>

          {/* Circular Images and Text */}
          <div className="flex flex-wrap items-center space-x-8">
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-white w-64 h-64 rounded-full mb-2 overflow-hidden">
                <img
                  src="public/IMG-20231124-WA0024.jpg"
                  alt="image of our services"
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="text-center font-bold">
                The most trusted parent App
              </h5>
            </div>

            <div className="flex-1 flex  flex-col items-center">
              <div className="bg-white w-64 h-64 rounded-full mb-2 overflow-hidden">
                <img
                  src="public/IMG-20231124-WA0022.jpg"
                  alt="image of our services"
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="text-center font-bold">
                90% of parent's queries resolved within 45 minutes
              </h5>
            </div>

            <div className="flex-1 flex flex-col items-center">
              <div className="bg-white w-64 h-64 rounded-full mb-2 overflow-hidden">
                <img
                  src="public/IMG-20231124-WA0021.jpg"
                  alt="image of our services"
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="text-center font-bold">
                Help from Experts at every child's stage
              </h5>
            </div>
          </div>
        </div>

        {/* Third Container */}
        <div className="bg-pink-50 text-black pl-8 md:pl-64 py-4 pr-4">
          {/* Image and Text */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Image */}
            <div className="w-full md:w-1/3 ml-0 md:ml-8">
              <img
                src="public/IMG-20231124-WA0019.jpg"
                alt="Testimony"
                className="rounded-md object-cover w-full md:w-48 h-96"
              />
            </div>

            {/* Text */}
            <div className="flex-1 bg-white p-4 md:p-8 -mr-2">
              <h2 className="text-3xl font-bold mb-4">Testimonies</h2>
              <div className="flex items-center mb-4">
                <img
                  src="public/muzadde2.jpg"
                  alt="parent image"
                  className="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <div>
                  <h3 className="font-bold">Ruth Namatovu</h3>
                  <p>
                    "I was struggling with breastfeeding but the Muzadde Plus
                    workshops helped me a lot"
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="public/muzade1.jpg"
                  alt="parent image"
                  className="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <div>
                  <h3 className="font-bold">Meddie Kaggwa</h3>
                  <p>
                    "Muzadde plus was a blessing during my wife's pregnancy. We
                    were able to speak to a gynecologist anytime"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
