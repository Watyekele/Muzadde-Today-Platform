import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function AskExpertPage() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [doctorAnswer, setDoctorAnswer] = useState("");

  const QUESTIONS_ENDPOINT = "http://localhost:1337/api/expquestions?populate=*";

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    axios
      .get(QUESTIONS_ENDPOINT)
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setQuestions(response.data.data);
        } else {
          console.error("Invalid data format - Expected an array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  };

  const addQuestion = (newQuestion) => {
    axios
      .post(QUESTIONS_ENDPOINT, newQuestion)
      .then(() => {
        fetchQuestions();
      })
      .catch((error) => {
        console.error("Error adding question:", error);
      });
  };

  const addAnswer = (questionId, doctorAnswer) => {
    const answerData = {
      answer: doctorAnswer,
    };

    axios
      .post(`${QUESTIONS_ENDPOINT}/${questionId}/answers`, answerData)
      .then(() => {
        fetchQuestions();
      })
      .catch((error) => {
        console.error("Error adding answer:", error);
      });
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newQuestion = {
      patientName: formData.get("patientName"),
      question: formData.get("question"),
    };
    addQuestion(newQuestion);
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

  const handleAnswerQuestion = (questionId, doctorAnswer) => {
    addAnswer(questionId, doctorAnswer);
  };

  return (
    <div>
      <Nav />

      <div className="page bg-pink-50 text-lg mt-20 pl-16">
        <section className="flex bg-zinc-200 w-10/12 pt-2 -mt-4 items-center text-1xl">
          {/* Your content for percentage resolved and plans */}
        </section>

        <section className="text-left ml-6 my-10">
          {/* Your content for making informed decisions */}
          {/* Form to ask a question */}
          <div className="flex justify-right p-2 m-2">
            <textarea
              placeholder="Ask a question..."
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="border p-2 w-full max-w-md"
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

        {/* Displaying questions and answers */}
        <div className="questions bg-zinc-200 mt-4 px-auto py-6 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((q, index) => (
            <div key={index} className="question-one mb-6">
              {/* Your content for displaying questions and answers */}
            </div>
          ))}
        </div>

        {/* Content for top questions */}
        <section className="content-center flex flex-wrap font-bold space-x-2 mb-4">
          {/* Buttons or tabs for filtering questions */}
        </section>

        <div className="questions bg-zinc-200 mt-4 px-auto py-6 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Your content for displaying top questions */}
        </div>

        {/* Section for displaying experts */}
        <div className="experts-section">
          {/* Your content for displaying experts */}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default AskExpertPage;
