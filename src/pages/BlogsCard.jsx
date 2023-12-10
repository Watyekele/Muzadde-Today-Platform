import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Details from "./layouts/Details";

const API_URL = "http://localhost:1337";

function BlogsCard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs1`);
        console.log(response.data.data);
        setBlogs(response.data.data);
      } catch (error) {
        console.error("error fetching blogs data", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map((data, index) => (
        <div key={index} className="blogs-card">
          <Link to={`/details/${data.attributes.id}`}>
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
  );
}
export default BlogsCard;
