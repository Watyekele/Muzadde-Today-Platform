import React from 'react';

function Homepage() {
  return (
    <div>
      {/* First Container */}
      <div className="bg-gray-300 text-white p-8">
        {/* Search Bar */}
        <form className="mb-6 mx-auto max-w-2xl">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-5.2-5.2"></path>
                <circle cx="10" cy="10" r="8"></circle>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-pink-100 border border-gray-300 text-gray-900 text-sm rounded-full py-2 pl-10 pr-4 focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type what you are looking for..."
              required
            />
          </div>
        </form>

        {/* Text and Images */}
        <div className="flex items-center">
          {/* Text */}
          <div className="w-1/2 pr-8">
            <h1 className="text-4xl font-bold text-black mb-4">MUZADDE TODAY</h1>
            <p className="text-4xl font-bold text-black">
              Is the only parent-focused specialized program
            </p>
          </div>

          {/* Images */}
          <div className="flex-1 flex justify-center space-x-4">
            <img
              src="src/assets/IMG-20231126-WA0005.jpg"
              alt="Family image"
              className="w-24 h-32 object-cover rounded-md"
            />
            <img
              src="src/assets/IMG-20231124-WA0023.jpg"
              alt="doctor image"
              className="w-24 h-32 object-cover rounded-md"
            />
            <img
              src="src/assets/IMG-20231124-WA0020.jpg"
              alt="happy child image"
              className="w-24 h-32 object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Second Container */}
      <div className="bg-pink-50 text-black p-8">
        <h2 className="text-3xl text-center font-bold mb-4">What We Offer</h2>

        {/* Circular Images and Text */}
        <div className="flex items-center space-x-8">
          <div className="flex-1 flex flex-col items-center">
            <div className="bg-white w-32 h-32 rounded-full mb-2 overflow-hidden">
              <img
                src="src/assets/IMG-20231124-WA0024.jpg"
                alt="image of our services"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center font-bold">The most trusted parent App</p>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <div className="bg-white w-32 h-32 rounded-full mb-2 overflow-hidden">
              <img
                src="src/assets/IMG-20231124-WA0022.jpg"
                alt="image of our services"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center font-bold">90% of parent's queries resolved within 3 minutes</p>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <div className="bg-white w-32 h-32 rounded-full mb-2 overflow-hidden">
              <img
                src="src/assets/IMG-20231124-WA0021.jpg"
                alt="image of our services"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center font-bold">Help from Experts at every child's stage</p>
          </div>
        </div>
      </div>

      {/* Third Container */}
      <div className="bg-pink-50 text-black p-8">
        {/* Image and Text */}
        <div className="flex items-center">
          {/* Image */}
          <div className="w-1/3 pr-8">
            <img
              src="src/assets/IMG-20231124-WA0019.jpg"
              alt="Testimony"
              className="rounded-md object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Testimonies</h2>
            <div className="flex items-center mb-4">
              <img
                src="src/assets/muzadde2.jpg"
                alt="parent image"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <p className="font-bold">Ruth Namatovu</p>
                <p>
                  "I was struggling with breastfeeding but the Muzadde Plus workshops helped me a lot"
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/muzade1.jpg"
                alt="parent image"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <p className="font-bold">Meddie Kaggwa</p>
                <p>
                  "Muzadde plus was a blessing during my wife's pregnancy. We were able to speak to a gynecologist anytime"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
