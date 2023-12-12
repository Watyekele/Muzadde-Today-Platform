import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Details from "./layouts/Details";

const API_URL = "http://localhost:1337";

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs1`);
        setBlogs(response.data.data);
      } catch (error) {
        console.error("error fetching blogs data", error);
      }
    };
    fetchBlogs();
  }, []);

  const filterBlogs = (category) => {
    setSelectedCategory(category);
  };

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.attributes.category === selectedCategory);

  return (
    <div>
      <Nav />
      <div className="page text-lg mt-36">
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

        <h2 className="text-2xl text-green-900 font-bold mb-4">Parent's Blogs</h2>
        <div className="flex flex-wrap justify-start mb-4">
          <button
            className="bg-green-900 text-white border px-4 py-2 rounded-full mr-2 mb-2"
            onClick={() => filterBlogs("All")}
          >
            All
          </button>
          <button
            className="border px-4 py-2 rounded-r mr-2 mb-2"
            onClick={() => filterBlogs("Pregnancy")}
          >
            High Risk Pregnancy
          </button>
          <button
            className="border px-4 py-2 rounded-r mr-2 mb-2"
            onClick={() => filterBlogs("Vaccination")}
          >
            Vaccination
          </button>
          <button className="border px-4 py-2 rounded-r mr-2 mb-2">Tests</button>
          <button
            className="border px-4 py-2 rounded-r mr-2 mb-2"
            onClick={() => filterBlogs("Nutrition")}
          >
            Nutrition
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        {filteredBlogs.map((data, index) => (
          <div key={index} className="blogs-card mb-8 mx-2">
            <Link to={`/details/${data.id}`}>
              <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition ease-in-out duration-200 transform hover:-translate-x-1 hover:scale-90">
                <img
                  className="w-full h-48 object-cover"
                  src={data.attributes.Imagelink}
                  alt={data.attributes.title}
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      className="w-10 h-10 rounded-full mr-4 object-cover"
                      src={data.attributes.writerimagelink}
                      alt="Writer"
                    />
                    <p className="text-gray-900 font-medium transition ease-in-out duration-200 hover:-translate-x-1 hover:scale-90">
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
