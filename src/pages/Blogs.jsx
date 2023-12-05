import Blogs from "../Components/BlogsFunction";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function BlogsPage() {
  const parentBlogPosts = [
    {
      id: 1,
      image: "src/assets/vaccination.jpg",
      title: "How to prepare your child for vaccination",
      writerImage: "src/assets/download (4).jpg",
      views: 970,
      writerName: "Philip Male",
    },
    {
      id: 2,
      image: "src/assets/pregnancy.jpg",
      title: "Why you should not wear heels during Pregnancy",
      writerImage: "src/assets/download (8).jpg",
      views: 800,
      writerName: "Rehema Anzo",
    },
    {
      id: 3,
      image: "src/assets/vaccination.jpg",
      title: "How to prepare your child for vaccination",
      writerImage: "src/assets/download (4).jpg",
      views: 970,
      writerName: "Philip Male",
    },
    {
      id: 4,
      image: "src/assets/pregnancy.jpg",
      title: "Why you should not wear heels during Pregnancy",
      writerImage: "src/assets/download (8).jpg",
      views: 800,
      writerName: "Rehema Anzo",
    },
    {
      id: 5,
      image: "src/assets/pregnancy.jpg",
      title: "Why you should not wear heels during Pregnancy",
      writerImage: "src/assets/download (8).jpg",
      views: 800,
      writerName: "Rehema Anzo",
    },
    {
      id: 6,
      image: "src/assets/pregnancy.jpg",
      title: "Why you should not wear heels during Pregnancy",
      writerImage: "src/assets/download (8).jpg",
      views: 800,
      writerName: "Rehema Anzo",
    },
  ];
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

        <Blogs blogs={parentBlogPosts} />

        <Footer />
      </div>
    </div>
  );
}
export default BlogsPage;
