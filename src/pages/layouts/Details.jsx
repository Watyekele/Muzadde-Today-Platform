import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:1337";

export default function Details() {
  let { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs1`);
        console.log(response.data.data.filter((post) => post.id === id));
        setBlog(response.data.data);
      } catch (error) {
        console.error("error fetching blog data", error);
      }
    };
    fetchBlog();
  }, [blog]);

  let post = blog.filter((data) => data.id === id);
  return (
    <div>
      {post.imagelink}
      {post.Title}
    </div>
  );
}
