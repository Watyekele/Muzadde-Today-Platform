import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:1337";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/questions1`);
        // Assuming the API response contains an array of questions
        setQuestions(response.data.data); // Update state with the array of questions
      } catch (error) {
        console.error("error fetching questions data", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="page">
      <Nav />
      <div>
        {questions.map((question, index) => (
          <div
            key={question.id}
            className={`mb-8 ${index % 2 === 0 ? "mr-8" : "ml-8"}`}
          >
            <div className="flex items-center mb-4">
              <img
                src={question.attributes.imageLink} // Use 'question.image' for each question
                alt={`Parent ${question.attributes.Parent}`}
                className="rounded-full w-16 h-16 mr-4"
              />
              <div>
                <p className="font-bold">{question.attributes.Parent}</p>
                <p>{question.attributes.question}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
