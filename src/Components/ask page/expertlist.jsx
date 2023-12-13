// ExpertList.js
import React from "react";

const ExpertList = () => {
  return (
    <div className="experts-section">
      <h1 className="text-2xl ml-6 text-green-900 font-bold mt-8">
        Our Experts
      </h1>
      <div className="experts flex mt-4 ">
        <section className="mr-3 text-center">
          <img
            src="src/assets/doctor 1.webp"
            alt=""
            className="rounded-md w-48 h-64 object-cover"
          />
          <p>Dr. Paul Wasswa</p>
          <p>Gynecologist</p>
        </section>
        <section className="mr-3 text-center">
          <img
            src="src/assets/miranda.jpg"
            alt="psychologist image"
            className="rounded-md  w-48 h-64 object-cover"
          />
          <p>Dr. Miranda Atim</p>
          <p>Child Psychologist</p>
        </section>
        <section className="mr-3 text-center">
          <img
            src="src/assets/nutritionist.jpg"
            alt="Nutritionist image"
            className="rounded-md  w-48 h-64 object-cover"
          />
          <p>Dr. Robinah Kitiibwa</p>
          <p>Nutritionist</p>
        </section>
        <section className="mr-3 text-center">
          <img
            src="src/assets/Dr. Celin wangi.jpg"
            alt="Midwife image"
            className="rounded-md  w-48 h-64 object-cover"
          />
          <p>Celin Wangi</p>
          <p>Midwife</p>
        </section>
        <section className="mr-3 text-center">
          <img
            src="src/assets/Dr. Muwanga John.jpg"
            alt="Gynecologist image"
            className="rounded-md  w-48 h-64 object-cover"
          />
          <p>Dr. Muwanga John</p>
          <p>Gynecologist</p>
        </section>
        <section className="mr-3 text-center">
          <img
            src="src/assets/Dr. Lubanga Cristine.jpg"
            alt="Pediatrician image"
            className="rounded-md  w-48 h-64 object-cover"
          />
          <p>Dr. Lubanga Christine</p>
          <p>Paediatrician</p>
        </section>
      </div>
    </div>
  );
};

export default ExpertList;
