import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/blogs1/${id}`);
        const data = await response.json();
        setBlog(data.data.attributes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };
    getBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(blog);
  return (
    <div className="page bg-gray-500/20 h-full mt-2 rounded-md ">
      <div className="content p-4 pt-4 ">
        <div className="row row2">
          <div className="product-col4">
            <img
              src={blog.Imagelink}
              alt={blog.Title}
              className=" w-96 m-4 rounded-lg object-fit"
            />
            <h1 className="text-center text-6xl mb-4 font-bold">
              {blog.Title}
            </h1>
          </div>
          <div className="col-single text-2xl">{blog.Content}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
