import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Details from "./layouts/Details";

const API_URL = "http://localhost:1337";

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs1`);
        // console.log(response.data.data);
        setBlogs(response.data.data);
      } catch (error) {
        console.error("error fetching blogs data", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <Nav />
      <div className=" page App p-6 bg-pink-50 text-xl">
        <h1 className="text-4xl text-green-900 font-bold mb-6 text-left">
          Do You Want to be a Muzadde Today Blogger?
        </h1>
        <p className="mb-4 text-left">
          Muzadde Today is an online community of parents supporting fellow
          parents through the journey of raising children. Are you a parent who
          wishes to join our community of mum and dad bloggers? Signup today and
          start writing your first blog on topics related to child growth,
          development, and upbringing.
        </p>

        <h2 className="text-2xl text-green-900 font-bold mb-4">
          Parent's Blogs
        </h2>
        <div className="flex">
          <button className=" bg-green-900 mr-2 border px-4 py-2 rounded-full">
            All
          </button>
          <button className="mr-2 border px-4 py-2 rounded-r">
            High Risk Pregnancy
          </button>
          <button className="mr-2 border px-4 py-2 rounded-r">
            Vaccination
          </button>
          <button className="mr-2 border px-4 py-2 rounded-r">Tests</button>
          <button className="mr-2 border px-4 py-2 rounded-r">
            Lactation and Breastfeeding
          </button>
        </div>
      </div>
      <div className="flex page grid grid-cols-3">
        {blogs.map((data, index) => (
          <div key={index} className="blogs-card ">
            <Link to={`/details/${data.id}`}>
              <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl m-4 transition ease-in-out delay-70  hover:-translate-x-1 hover:scale-90  duration-50">
                <img
                  className="w-full h-48 object-cover  "
                  src={data.attributes.Imagelink}
                  alt={data.attributes.title}
                />
                <div className="p-6">
                  <div className="flex items-left mb-4">
                    <img
                      className="w-10 h-10 rounded-full mr-4 object-cover "
                      src={data.attributes.writerimagelink}
                      alt="Writer"
                    />
                    <p className="text-gray-900 font-medium  transition ease-in-out delay-70  hover:-translate-x-1 hover:scale-90  duration-200">
                      {data.attributes.Title}
                    </p>
                  </div>
                  <p className="text-gray-500">{data.attributes.writerName}</p>
                  <p className="text-gray-700">{data.attributes.Views} views</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default BlogsPage;
