import React, { useState, useEffect } from "react";
import axios from "axios";

function AskExpertPage() {
  const QUESTIONS_ENDPOINT = "http://localhost:1337/api/expquestions";

  const [questions, setQuestions] = useState([]);
  const [doctorAnswer, setDoctorAnswer] = useState("");

  // Fetch questions from Strapi when the component mounts
  useEffect(() => {
    fetchQuestions();
  }, []);

  // Function to fetch questions from Strapi
  const fetchQuestions = () => {
    axios
      .get(QUESTIONS_ENDPOINT)
      .then((response) => {
        setQuestions(response.data);
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

  // Function to answer a question by an expert
  const answerQuestion = (questionId, doctorAnswer) => {
    const answerData = {
      answer: doctorAnswer,
      // Other relevant data, such as doctor details, can be included here
    };

    axios
      .put(`${QUESTIONS_ENDPOINT}/${questionId}`, answerData)
      .then((response) => {
        // After successfully answering, refresh the list of questions
        fetchQuestions();
      })
      .catch((error) => {
        console.error("Error answering question:", error);
      });
  };

  // Function to handle the input change for the doctor's answer
  const handleDoctorAnswerChange = (e) => {
    setDoctorAnswer(e.target.value);
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

  return (
    <div>
      {/* Your JSX code for navigation, header, or other components */}

      <div className="page bg-pink-50 text-lg">
        {/* Other parts of your page */}

        {/* Form to submit a new question */}
        <form onSubmit={handleSubmitQuestion}>
          <input type="text" name="patientName" placeholder="Patient's Name" />
          <textarea
            name="question"
            placeholder="Ask a question..."
            required
          ></textarea>
          <button type="submit">Ask Now</button>
        </form>

        {/* Displaying questions and answering */}
        {questions.map((q, index) => (
          <div key={q.id}>
            <p>{q.question}</p>
            {!q.answer && (
              <div>
                <textarea
                  placeholder="Doctor's answer..."
                  value={doctorAnswer}
                  onChange={handleDoctorAnswerChange}
                  required
                ></textarea>
                <button onClick={() => answerQuestion(q.id, doctorAnswer)}>
                  Answer
                </button>
              </div>
            )}
            {q.answer && <p>{q.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AskExpertPage;
