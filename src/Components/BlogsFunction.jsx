// import React from "react";

// const BlogPost = ({ image, title, writerImage, views, writerName }) => {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl m-4 transition ease-in-out delay-70  hover:-translate-x-1 hover:scale-90  duration-50">
//       <img className="w-full h-48 object-cover  " src={image} alt={title} />
//       <div className="p-6">
//         <div className="flex items-left mb-4">
//           <img
//             className="w-10 h-10 rounded-full mr-4 object-cover "
//             src={writerImage}
//             alt="Writer"
//           />
//           <p className="text-gray-900 font-medium  transition ease-in-out delay-70  hover:-translate-x-1 hover:scale-90  duration-200">
//             {title}
//           </p>
//         </div>
//         <p className="text-gray-500">{writerName}</p>
//         <p className="text-gray-700">{views} views</p>
//       </div>
//     </div>
//   );
// };

// const BlogList = ({ blogs }) => {
//   return (
//     <div className="flex flex-wrap justify-center items-left">
//       {blogs.map((post) => (
//         <BlogPost
//           key={post.id}
//           image={post.image}
//           title={post.title}
//           writerImage={post.writerImage}
//           views={post.views}
//           writerName={post.writerName}
//         />
//       ))}
//     </div>
//   );
// };

// const Blogs = ({ blogs }) => {
//   return (
//     <div>
//       <BlogList blogs={blogs} />
//     </div>
//   );
// };

// export default Blogs;
