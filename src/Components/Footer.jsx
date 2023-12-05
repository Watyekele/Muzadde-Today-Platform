import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-black p-8 text-center">
      <div className="  grid grid-cols-5 gap-4">
        <div>
          <h1 className="mb-2 text-2xl font-bold">MUZADDE TODAY</h1>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="mb-2  font-bold">
            <strong>Information</strong>
          </h5>
          <p className="mb-2">Home</p>
          <p className="mb-2">Experts</p>
          <p className="mb-2">Blogs</p>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="mb-2 font-bold">Parent Talk/Forum</h5>
          <p className="mb-2">Parenting</p>
          <p className="mb-2">Education & Learning</p>
          <p className="mb-2">Health</p>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="mb-2 font-bold">Expert Advise</h5>
          <p className="mb-2">Ask an Expert</p>
          <p className="mb-2">Health</p>
          <p className="mb-2">Child Psychology</p>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="mb-2 font-bold">Contacts</h5>
          <p className="mb-2">Entebbe, Uganda</p>
          <p className="mb-2">Ku Bayita-5th Street</p>
          <p className="mb-2">P.O Box 34567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
