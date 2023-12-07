import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Subscription from "../Components/Subscription";
function AskExp() {
  return (
    <div>
      <Nav />
      <div className="page bg-pink-50 text-lg">
        <div>
          <section className="flex bg-zinc-200 w-10/12 pt-2 -mt-4 items-center text-1xl">
            <img
              src="src/assets/stetescope.jpg"
              alt=""
              width={50}
              className="mr-2"
            />
            <h4 className=" font-bold w-full">
              96% queries resolved in less than 45 minutes.{" "}
              <Link to="/subscription">
                <span className="text-blue-800 underline underline-offset-1">
                  Choose a plan
                </span>
              </Link>{" "}
              best suited for you
            </h4>
          </section>
          <section className="text-left ml-20 my-10">
            <h2 className="text-4xl text-green-900 font-bold p-4">
              Make informed decisions{" "}
            </h2>
            <p className="text-2xl  indent-16 font-bold">
              Get Prompt advice from doctors and child specialists
            </p>
            {/* Button and Input Field */}
            <div className="flex justify-right p-2 m-2">
              <button className="bg-gray-200  px-6 rounded-md grid justify-end mr-2 ">
                Ask Now
              </button>
              <input type="text" className="border-2" />
            </div>
          </section>
        </div>

        <div>
          <h2 className="text-2xl ml-6 text-green-900 font-bold">
            Top Questions
          </h2>
          <section className="content-center flex flex-wrap font-bold ">
            <button className="bg-gray-200 px-6 py-2 rounded-md mx-2 my-2">
              All
            </button>
            <button className="bg-gray-200 px-6 py-2rounded-md mx-2 my-2">
              Nutrition
            </button>
            <button className="bg-gray-200 px-6 py-2 rounded-md my-2">
              Child Psychologist
            </button>
            <button className="bg-gray-200 px-6 py-2 rounded-md mx-2 my-2">
              Gynecologist
            </button>
            <button className="bg-gray-200 px-6 py-2 rounded-md mx-2 my-2">
              Pediatrician
            </button>
            <button className="bg-gray-200 px-6 py-2 rounded-md mx-2 my-2">
              Lactation and Breastfeeding
            </button>
          </section>
          <div className="questions bg-zinc-200 mt-4 px-auto py-6 rounded-md flex content-center m-auto grid grid-cols-2 items-center ">
            <div className="question-one ml-10">
              <section>
                <article className="flex items-center">
                  <img
                    src="src/assets/mercy 1.jpg"
                    alt=""
                    width={50}
                    className="rounded-full w-10 h-10 object-cover mr-2 "
                  />
                  <h4 className="font-bold">Mercy Ajok</h4>
                </article>
                <p className="text-xl p-2 transition ease-in-out delay-70  hover:-translate-x-1 hover:scale-90  duration-50">
                  My 5 year old has anger outbursts and is always beating his
                  classmates.Will he outgrow?
                </p>
              </section>
              <section>
                <article className="flex pt-2 ">
                  <img
                    src="src/assets/miranda.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 object-cover mr-2"
                  />
                  <div>
                    <h4 className="font-bold">Answered by Miranda Atim</h4>
                    <p>ChildPsychologist</p>
                  </div>
                </article>

                <button className="px-8 bg-white ml-4 rounded-md">
                  View Answer
                </button>
              </section>
            </div>
            <div className="question-two ml-10 pt-10">
              <section>
                <article className="flex items-center">
                  <img
                    src="src/assets/rose M.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 object-cover mr-2 "
                  />
                  <h4 className="font-bold">Rose Mary</h4>
                </article>

                <p className="text-xl p-2 transition ease-in-out delay-70  hover:-translate-x-1 hover:scale-90  duration-50">
                  My 1 year old is very small, compared to all his agemates and
                  has no appetite.what should i do?
                </p>
              </section>
              <section>
                <article className="flex pt-2">
                  <img
                    src="src/assets/nutritionist.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 object-cover mr-2 "
                  />
                  <div>
                    <h4 className="font-bold">Answered by Robinah Kitiibwa</h4>
                    <p>Nutritionist</p>
                  </div>
                </article>

                <button className="px-8 bg-white ml-4 rounded-md">
                  View Answer
                </button>
              </section>
            </div>
            <div className="question-two ml-10 pt-10">
              <section>
                <article className="flex items-center">
                  <img
                    src="src/assets/rose M.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 object-cover mr-2 "
                  />
                  <h4 className="font-bold">Rose Mary</h4>
                </article>

                <p className="text-xl p-2 transition ease-in-out delay-70  hover:-translate-x-1 hover:scale-90  duration-50">
                  My 1 year old is very small, compared to all his agemates and
                  has no appetite.what should i do?
                </p>
              </section>
              <section>
                <article className="flex pt-2">
                  <img
                    src="src/assets/nutritionist.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 object-cover mr-2 "
                  />
                  <div>
                    <h4 className="font-bold">Answered by Robinah Kitiibwa</h4>
                    <p>Nutritionist</p>
                  </div>
                </article>

                <button className="px-8 bg-white ml-4 rounded-md">
                  View Answer
                </button>
              </section>
            </div>
            <div className="question-two ml-10 pt-10">
              <section>
                <article className="flex items-center">
                  <img
                    src="src/assets/rose M.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 object-cover mr-2 "
                  />
                  <h4 className="font-bold">Rose Mary</h4>
                </article>

                <p className="text-xl p-2 transition ease-in-out delay-70  hover:-translate-x-1 hover:scale-90  duration-50">
                  My 1 year old is very small, compared to all his agemates and
                  has no appetite.what should i do?
                </p>
              </section>
              <section>
                <article className="flex pt-2">
                  <img
                    src="src/assets/nutritionist.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 object-cover mr-2 "
                  />
                  <div>
                    <h4 className="font-bold">Answered by Robinah Kitiibwa</h4>
                    <p>Nutritionist</p>
                  </div>
                </article>

                <button className="px-8 bg-white ml-4 rounded-md">
                  View Answer
                </button>
              </section>
            </div>
          </div>
        </div>
        <div className="experts-section">
          <h1 className="text-2xl ml-6 text-green-900 font-bold mt-8">
            Our Experts
          </h1>
          <div className="experts flex mt-4 ">
            <section className="mr-3 text-center">
              <img
                src="src/assets/doctor 1.webp"
                alt=""
                className="rounded-md w-48 h-64 object-cover"
              />
              <p>Dr. Paul Wasswa</p>
              <p>Gynecologist</p>
            </section>
            <section className="mr-3 text-center">
              <img
                src="src/assets/miranda.jpg"
                alt=""
                className="rounded-md  w-48 h-64 object-cover"
              />
              <p>Dr. Miranda Atim</p>
              <p>Child Psychologist</p>
            </section>
            <section className="mr-3 text-center">
              <img
                src="src/assets/nutritionist.jpg"
                alt=""
                className="rounded-md  w-48 h-64 object-cover"
              />
              <p>Dr. Robinah Kitiibwa</p>
              <p>Nutritionist</p>
            </section>{" "}
            <section className="mr-3 text-center">
              <img
                src="src/assets/Dr. Celin wangi.jpg"
                alt=""
                className="rounded-md  w-48 h-64 object-cover"
              />
              <p> Celin Wangi</p>
              <p>Midwife</p>
            </section>
            <section className="mr-3 text-center">
              <img
                src="src/assets/Dr. Muwanga John.jpg"
                alt=""
                className="rounded-md  w-48 h-64 object-cover"
              />
              <p>Dr. Muwanga John</p>
              <p>Paediatrician</p>
            </section>
            <section className="mr-3 text-center">
              <img
                src="src/assets/Dr. Lubanga Cristine.jpg"
                alt=""
                className="rounded-md  w-48 h-64 object-cover"
              />
              <p>Dr. Lubanga Christine</p>
              <p>Paediatrician</p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default AskExp;
