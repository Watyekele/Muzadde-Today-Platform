import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';


function AskExpertPage() {
  const [questions, setQuestions] = useState([
    {
      patientName: "Mercy Ajok",
      question: "My 5-year-old has anger outbursts and is always beating his classmates. Will he outgrow?",
      answer: "Anger issues in children can be challenging. It's recommended to consult with a child psychologist for a thorough assessment and guidance.",
      doctor: { name: "Dr. Miranda Atim", image: "src/assets/miranda.jpg", specialty: "Child Psychologist" },
    },
    {
      patientName: "Rose Mary",
      question: "My 1-year-old is very small, compared to all his agemates and has no appetite. What should I do?",
      answer: "Nutritional concerns are common among parents. Ensure you're offering a balanced diet. If concerns persist, consult with a nutritionist for personalized advice.",
      doctor: { name: "Dr. Robinah Kitiibwa", image: "src/assets/nutritionist.jpg", specialty: "Nutritionist" },
    },
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [doctorAnswer, setDoctorAnswer] = useState('');

  const loginAsDoctor = () => {
    return { role: "doctor" };
  };

  const handleAskQuestion = () => {
    if (newQuestion.trim() === "") {
      console.error("Question cannot be empty");
      return;
    }

    const newQuestionObject = {
      patientName: "Muzadde Today User",
      question: newQuestion,
      answer: "",
      doctor: {},
    };

    setQuestions([...questions, newQuestionObject]);
    setNewQuestion('');
  };

  const handleAnswerQuestion = (index) => {
    if (doctorAnswer.trim() === '') {
      console.error('Answer cannot be empty');
      return;
    }

    const user = loginAsDoctor();

    if (user.role === 'doctor') {
      const updatedQuestions = [...questions];
      updatedQuestions[index].answer = doctorAnswer;
      updatedQuestions[index].doctor = {
        name: 'Doctor Name',
        image: 'src/assets/doctor-image.jpg',
        specialty: 'Specialty',
      };
      setQuestions(updatedQuestions);
      setDoctorAnswer('');
    } else {
      console.error("Only doctors can provide answers.");
    }
  };

  return (
    <div>
      <Nav />
      <div className="page bg-pink-50 mt-20 text-lg">
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
              <span className="text-blue-800 underline underline-offset-1">
                <Link to="/subscription"> Choose a plan</Link>
              </span>{" "}
              best suited for you
            </h4>
          </section>
          <section className="text-left ml-20 my-10">
            <h2 className="text-4xl text-green-900 font-bold p-4">
              Make informed decisions{" "}
            </h2>
            <p className="text-2xl  indent-16 font-bold">
              Get prompt advice from doctors and child specialists
            </p>
          <div className="flex justify-right p-2 m-2">
              <textarea
                placeholder="Ask a question..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="border p-2"
                required
              ></textarea>
              <button
                onClick={handleAskQuestion}
                className="bg-blue-500 text-white px-6 rounded-md ml-2"
              >
                Ask Now
              </button>
            </div>
          </section>
        </div>

        <div>
          <h2 className="text-2xl ml-6 text-green-900 font-bold">
            Top Questions
          </h2>
          <section className="content-center flex flex-wrap font-bold ">
            <button className="bg-gray-200 px-6 py-2 rounded-full mx-2 my-2">
              All
            </button>
            <button className="bg-gray-200 px-6 py-2 rounded-md mx-2 my-2">
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
              Lactation & Breastfeeding
            </button>
          </section>
          {/* Display Questions and Answers */}
          <div className="questions bg-zinc-200 mt-4 px-auto py-6 rounded-md flex content-center m-auto grid grid-cols-2 items-center">
            {questions.map((question, index) => (
              <div className="question-one ml-10" key={index}>
                <section>
                  <article className="flex items-center">
                    {/* ... */}
                    <h4 className="font-bold">{question.patientName}</h4>
                  </article>
                  <p className="text-xl p-2 transition ease-in-out delay-70 hover:-translate-x-1 hover:scale-90 duration-50">
                    {question.question}
                  </p>
                </section>
                <section>
                  <article className="flex pt-2 ">
                    <img
                      src={question.doctor.image}
                      alt="doctor"
                      className="rounded-full w-10 h-10 object-cover mr-2"
                    />
                    <div>
                      <h4 className="font-bold">{question.doctor.name}</h4>
                      <p>{question.doctor.specialty}</p>
                    </div>
                  </article>
                  {question.answer && (
                    <p className="text-xl p-2 transition ease-in-out delay-70 duration-50">
                      {question.answer}
                    </p>
                  )}
                  {!question.answer && (
                    <div>
                      <textarea
                        placeholder="Doctor's answer..."
                        value={doctorAnswer}
                        onChange={(e) => setDoctorAnswer(e.target.value)}
                        className="border p-2"
                        required 
                      ></textarea>
                      <button
                        onClick={() => handleAnswerQuestion(index)}
                        className="bg-gray-500 text-white px-6 rounded-md ml-2"
                        disabled={!doctorAnswer.trim()} // Disable button if answer field is empty
                      >
                        Answer
                      </button>
                    </div>
                  )}
                </section>
              </div>
            ))}
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
                alt="psychologist image"
                className="rounded-md  w-48 h-64 object-cover"
              />
              <p>Dr. Miranda Atim</p>
              <p>Child Psychologist</p>
            </section>
            <section className="mr-3 text-center">
              <img
                src="src/assets/nutritionist.jpg"
                alt="Nutritionist image"
                className="rounded-md  w-48 h-64 object-cover"
              />
              <p>Dr. Robinah Kitiibwa</p>
              <p>Nutritionist</p>
            </section>
            <section className="mr-3 text-center">
              <img
                src="src/assets/Dr. Celin wangi.jpg"
                alt="Midwife image"
                className="rounded-md  w-48 h-64 object-cover"
              />
              <p>Celin Wangi</p>
              <p>Midwife</p>
            </section>
            <section className="mr-3 text-center">
              <img
                src="src/assets/Dr. Muwanga John.jpg"
                alt="Gynecologist image"
                className="rounded-md  w-48 h-64 object-cover"
              />
              <p>Dr. Muwanga John</p>
              <p>Gynecologist</p>
            </section>
            <section className="mr-3 text-center">
              <img
                src="src/assets/Dr. Lubanga Cristine.jpg"
                alt="Pediatrician image"
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

export default AskExpertPage;
