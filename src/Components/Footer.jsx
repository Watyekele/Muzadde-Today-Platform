import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-black p-4 text-center">
      <div className="container mx-auto grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-1">
          <h1 className="text-2xl font-bold mb-2">Muzadde Today</h1>
        </div>
        <div className="col-span-5 md:col-span-1 flex flex-col items-center">
          <h5 className="font-bold mb-2"><strong>Information</strong></h5>
          <p className="mb-2">Home</p>
          <p className="mb-2">Experts</p>
          <p className="mb-2">Blogs</p>
        </div>
        <div className="col-span-5 md:col-span-1 flex flex-col items-center">
          <h5 className="font-bold mb-2">Parent Talk/Forum</h5>
          <p className="mb-2">Parenting</p>
          <p className="mb-2">Education & Learning</p>
          <p className="mb-2">Health</p>
        </div>
        <div className="col-span-5 md:col-span-1 flex flex-col items-center">
          <h5 className="font-bold mb-2">Expert Advice</h5>
          <p className="mb-2">Ask an Expert</p>
          <p className="mb-2">Health</p>
          <p className="mb-2">Child Psychology</p>
        </div>
        <div className="col-span-5 md:col-span-1 flex flex-col items-center">
          <h5 className="font-bold mb-2">Contacts</h5>
          <p className="mb-2">Entebbe, Uganda</p>
          <p className="mb-2">Ku Bayita-5th Street</p>
          <p className="mb-2">P.O Box 34567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
