import React from "react";
import BlogsCard from "../BlogsCard";


export default function BVlogs() {
  // const { loading, error, data } = UseFetch("http://localhost:1337/api/blogs1");
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error...</p>;

  return (
    <div>
      <BlogsCard />
    </div>
  );
}
