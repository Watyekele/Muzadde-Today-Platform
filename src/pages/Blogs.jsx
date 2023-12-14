import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

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
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="container mx-auto p-4 md:p-8 lg:p-12 mt-16">
        <h1 className="text-4xl text-green-900 font-bold mb-6 text-left">
          Do You Want to be a Muzadde Today Blogger?
        </h1>
        <p className="mb-4 text-lg text-left text-gray-700">
          Muzadde Today is an online community of parents supporting fellow<br></br>
          parents through the journey of raising children. Are you a parent who<br></br>
          wishes to join our community of mum and dad bloggers? Signup today and<br></br>
          start writing your first blog on topics related to child growth,
          development, and upbringing.
        </p>

        <h2 className="text-2xl text-green-900 font-bold mb-4">Parent's Blogs</h2>
        <div className="flex flex-wrap mb-4 space-x-4">
          <button
            className={`border p-2 rounded-full bg-white hover:bg-gray-200 transition duration-300 ${
              selectedCategory === "All" ? "border-green-500" : "border-gray-300"
            }`}
            onClick={() => filterBlogs("All")}
          >
            All
          </button>
          <button
            className={`border p-2 rounded-lg bg-white hover:bg-gray-200 transition duration-300 ${
              selectedCategory === "Pregnancy" ? "border-green-500" : "border-gray-300"
            }`}
            onClick={() => filterBlogs("Pregnancy")}
          >
            High Risk Pregnancy
          </button>
          <button
            className={`border p-2 rounded-lg bg-white hover:bg-gray-200 transition duration-300 ${
              selectedCategory === "Vaccination" ? "border-green-500" : "border-gray-300"
            }`}
            onClick={() => filterBlogs("Vaccination")}
          >
            Vaccination
          </button>
          <button
            className={`border p-2 rounded-lg bg-white hover:bg-gray-200 transition duration-300 ${
              selectedCategory === "Tests" ? "border-green-500" : "border-gray-300"
            }`}
            onClick={() => filterBlogs("Tests")}
          >
            Tests
          </button>
          <button
            className={`border p-2 rounded-lg bg-white hover:bg-gray-200 transition duration-300 ${
              selectedCategory === "Nutrition" ? "border-green-500" : "border-gray-300"
            }`}
            onClick={() => filterBlogs("Nutrition")}
          >
            Nutrition
          </button>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
        {filteredBlogs.map((data, index) => (
          <div key={index} className="blog-card mb-8">
            <Link to={`/details/${data.id}`}>
              <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105">
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
                    <p className="text-gray-900 font-medium hover:text-green-900 transition duration-300">
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
