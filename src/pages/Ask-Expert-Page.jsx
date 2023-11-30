function AskExp() {
  return (
    <div className="page bg-zinc-10">
      <div>
        <section className="flex bg-zinc-100 w-10/12 pt-2 items-center">
          <img src="src/assets/stetescope.jpg" alt="" width={50} />
          <p>
            96% queries resolved in less than 45 minutes. Choose a plan best
            suited for you
          </p>
        </section>
        <section className="text-left ml-20 my-10">
          <p>Make informed decisions </p>
          <p>Get Prompt advice from doctors and child specialists</p>
          <button className="bg-gray-200 px-6 rounded-md mx-2 ">Ask Now</button>
        </section>
      </div>

      <div>
        <h2>Top Questions</h2>
        <section className="content-center flex flex-wrap">
          <button className="bg-gray-200 px-6 rounded-md mx-2">All</button>
          <button className="bg-gray-200 px-6 rounded-md mx-2 ">
            Nutrition
          </button>
          <button className="bg-gray-200 px-6 rounded-md ">
            Child Psychologist
          </button>
          <button className="bg-gray-200 px-6 rounded-md mx-2">
            Gynecologist
          </button>
          <button className="bg-gray-200 px-6 rounded-md mx-2 ">
            Pediatrician
          </button>
          <button className="bg-gray-200 px-6 rounded-md mx-2">
            Lactation and Breastfeeding
          </button>
        </section>
        <div className="questions bg-zinc-200 mt-4 p-8 rounded-md flex content-center m-auto ">
          <div className="question-one ml-10">
            <section>
              <img
                src="src/assets/mercy 1.jpg"
                alt=""
                width={50}
                className="rounded-full"
              />
              <h4>Mercy Ajok</h4>
              <p>
                My 5 year old has anger outbursts and is always beating his
                classmates.Will he outgrow?
              </p>
            </section>
            <section>
              <img
                src="src/assets/miranda.jpg"
                alt=""
                width={50}
                className="rounded-full"
              />
              <h4>Asnwered by Miranda Atim</h4>
              <p>Child Psychologist</p>
              <button className="px-8 bg-white ml-4 rounded-md">
                View Answer
              </button>
            </section>
          </div>
          <div question-two>
            <section>
              <img
                src="src/assets/rose M.jpg"
                alt=""
                width={50}
                className="rounded-full"
              />
              <h4>Rose Mary</h4>
              <p>
                My 1 year old is very small, compared to all his agemates and
                has no appetite.what should i do?
              </p>
            </section>
            <section>
              <img
                src="src/assets/nutritionist.jpg"
                alt=""
                width={50}
                className="rounded-full"
              />
              <h4>Answered by Robinah Kitiibwa</h4>
              <p>Nutritionist</p>
              <button className="px-8 bg-white ml-4 rounded-md">
                View Answer
              </button>
            </section>
          </div>
        </div>
      </div>
      <div className="experts-section">
        <h1>Our Experts</h1>
        <div className="experts flex mt-8 ">
          <section className="mr-3 text-center">
            <img
              src="src/assets/doctor 1.webp"
              alt=""
              width={300}
              height={400}
              className="rounded-md"
            />
            <p>Dr. Paul Wasswa</p>
            <p>Gynecologist</p>
          </section>
          <section className="mr-3 text-center">
            <img
              src="src/assets/doctor 1.webp"
              alt=""
              width={300}
              height={400}
              className="rounded-md"
            />
            <p>Dr. Paul Wasswa</p>
            <p>Gynecologist</p>
          </section>
          <section className="mr-3 text-center">
            <img
              src="src/assets/doctor 1.webp"
              alt=""
              width={300}
              height={400}
              className="rounded-md"
            />
            <p>Dr. Paul Wasswa</p>
            <p>Gynecologist</p>
          </section>{" "}
          <section className="mr-3 text-center">
            <img
              src="src/assets/doctor 1.webp"
              alt=""
              width={300}
              height={400}
              className="rounded-md"
            />
            <p>Dr. Paul Wasswa</p>
            <p>Gynecologist</p>
          </section>
        </div>
      </div>
    </div>
  );
}
export default AskExp;
