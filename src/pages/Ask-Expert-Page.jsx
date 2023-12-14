import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

function AskExpertPage() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [doctorAnswer, setDoctorAnswer] = useState("");

  const QUESTIONS_ENDPOINT =
    "http://localhost:1337/api/expquestions?populate=*";
  console.log(QUESTIONS_ENDPOINT);

  // Fetch questions from Strapi when the component mounts
  useEffect(() => {
    fetchQuestions();
  }, []);

  // Function to fetch questions from Strapi
  const fetchQuestions = () => {
    axios
      .get(QUESTIONS_ENDPOINT)
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          // console.log(response.data.data);
          setQuestions(response.data.data);
        } else {
          console.error("Invalid data format - Expected an array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  };

  // Function to add a new question to Strapi
  const addQuestion = (newQuestion) => {
    axios
      .post(QUESTIONS_ENDPOINT, newQuestion)
      .then((response) => {
        // After successfully adding a question, refresh the list of questions
        fetchQuestions();
      })
      .catch((error) => {
        console.error("Error adding question:", error);
      });
  };

  // Function to add an answer to a question by an expert
  const addAnswer = (questionId, doctorAnswer) => {
    const answerData = {
      answer: doctorAnswer,
      // Other relevant data, such as doctor details, can be included here
    };

    axios
      .post(`${QUESTIONS_ENDPOINT}/${questionId}/answers`, answerData)
      .then((response) => {
        // After successfully adding an answer, refresh the list of questions
        fetchQuestions();
      })
      .catch((error) => {
        console.error("Error adding answer:", error);
      });
  };

  // Function to submit a new question
  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    // Assuming you have form inputs for the question data
    const formData = new FormData(e.target);
    const newQuestion = {
      patientName: formData.get("patientName"), // Adjust these based on your form fields
      question: formData.get("question"),
      // Other relevant data for the question can be included here
    };
    addQuestion(newQuestion);
  };

  // Function to handle answering a question by an expert
  const handleAnswerQuestion = (questionId, doctorAnswer) => {
    addAnswer(questionId, doctorAnswer);
    // Optionally, update the local state or perform any necessary UI changes
  };

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
    setNewQuestion("");
  };

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
            {/* Form to add a new question */}
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
          <section>
            <h2 className="text-2xl ml-6 text-green-900 font-bold">
              Top Questions
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
            {/* Display Questions and Answers */}
            <div className="questions bg-zinc-200 mt-4 px-auto py-6 rounded-md flex content-center m-auto grid grid-cols-2 items-center">
              {questions.map((question, index) => (
                <div className="question-one ml-10" key={index}>
                  <section>
                    <article className="flex items-center">
                      <img
                        src={question.attributes.imageLink}
                        alt="parentimage"
                        width={50}
                        className="rounded-full w-10 h-10 object-cover mr-2"
                      />
                      <h4 className="font-bold">{question.attributes.Name}</h4>
                    </article>
                    <p className="text-xl p-2 transition ease-in-out delay-70 hover:-translate-x-1 hover:scale-90 duration-50">
                      {question.attributes.question}
                    </p>
                  </section>
                  <section>
                    {/* Display expert's answer */}
                    {question.attributes.expanswer ? (
                      <article className="flex pt-2">
                        <img
                          src={
                            question.attributes.expanswer.data.attributes
                              .imageLink
                          }
                          alt="Doctor"
                          className="rounded-full w-10 h-10 object-cover mr-2"
                        />
                        <div>
                          <h4 className="font-bold">
                            {
                              question.attributes.expanswer.data.attributes
                                .expertName
                            }
                          </h4>
                          <p className="text-xl p-2 transition ease-in-out delay-70 duration-50">
                            {
                              question.attributes.expanswer.data.attributes
                                .answer
                            }
                          </p>
                        </div>
                      </article>
                    ) : (
                      // Display input field for doctor's answer if the question is unanswered
                      <div>
                        <textarea
                          placeholder="Doctor's answer..."
                          value={doctorAnswer}
                          onChange={(e) => setDoctorAnswer(e.target.value)}
                          className="border p-2"
                          required
                        ></textarea>
                        <button
                          onClick={() =>
                            handleAnswerQuestion(question.id, doctorAnswer)
                          }
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
          </section>

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

          <div className="questions bg-zinc-200 mt-4 px-auto py-6 rounded-md flex content-center m-auto grid grid-cols-2 items-center ">
            {questions.map((q, index) => (
              <div className="question-one ml-10" key={index}>
                <section>
                  <article className="flex items-center">
                    <img
                      src="src/assets/mercy 1.jpg"
                      alt="parent image"
                      width={50}
                      className="rounded-full w-10 h-10 object-cover mr-2 "
                    />
                    <h4 className="font-bold">{q.patientName}</h4>
                  </article>
                  <p className="text-xl p-2 transition ease-in-out delay-70  hover:-translate-x-1 hover:scale-90  duration-50">
                    {q.question}
                  </p>
                </section>
                <section>
                  <article className="flex pt-2 ">
                    <img
                      src={q.doctor.image}
                      alt="doctor"
                      className="rounded-full w-10 h-10 object-cover mr-2"
                    />
                    <div>
                      <h4 className="font-bold">{q.doctor.name}</h4>
                      <p>{q.doctor.specialty}</p>
                    </div>
                  </article>
                  {q.answer && (
                    <p className="text-xl p-2 transition ease-in-out delay-70 duration-50">
                      {q.answer}
                    </p>
                  )}
                  {!q.answer && (
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
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AskExpertPage;
