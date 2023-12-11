import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Talk = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [askedQuestion, setAskedQuestion] = useState(null);

  useEffect(() => {
    // Fetch Questions from Strapi API
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/questions3"
        );
        setQuestions(response.data.data);
      } catch (error) {
        console.error("Error fetching questions", error);
      }
    };

    fetchQuestions();
  }, []);

  const addQuestion = async () => {
    try {
      // Send POST request to add question to Strapi
      const response = await axios.post(
        "http://localhost:1337/api/questions3",

        {
          data: {
            Parent: "Famba AbdulN",
            question: "Whats up",
            imageLink: "cccxvggrtddfshhss",
          },
        }
        // {
        //   Parent: "Sarah",
        //   question: newQuestion,
        //   imageLink: "",

        //   // Add other fields as needed
        // }
      );

      // Set the asked question after posting it

      setAskedQuestion(response.data);

      //Clear the New Question textarea
      setNewQuestion("");
    } catch (error) {
      console.error("Error adding question", error);
    }
  };

  const addAnswer = async () => {
    try {
      // Send POST request to add answer to the asked question
      await axios.post(
        `http://localhost:1337/questions1/${askedQuestion.id}/answers1`,
        {
          answerText: newAnswer,
          // Add other fields as needed
        }
      );

      // Fetch the updated asked question with answers
      const response = await axios.get(
        `http://localhost:1337/api/questions1/${askedQuestion.id}`
      );
      setAskedQuestion(response.data.data);

      setNewAnswer("");
    } catch (error) {
      console.error("Error adding answer", error);
    }
  };

  return (
    <div className="page">
      <Nav />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl text-green-900 font-bold mb-4">
          Parent's Talks
        </h1>
        <p className="text-xl text-green-900 font-bold mb-4">Guest Parent</p>
        <p className="mb-4">Share Parenting Advice</p>

        {/* New Question */}
        <div className="mb-4">
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Ask a question..."
            className="border border-gray-300 p-2 w-full rounded"
          />
          <div className="flex mt-2 justify-end">
            <button
              onClick={addQuestion}
              className="bg-green-900 text-white p-2 rounded"
            >
              Start Topic
            </button>
          </div>
        </div>

        {/* Display Asked Question and Answers */}
        {askedQuestion && (
          <div>
            <div className="flex items-center mb-4">
              <img
                src={askedQuestion.imageLink}
                alt={`Parent ${askedQuestion.Parent}`}
                className="rounded-full w-16 h-16 mr-4"
              />
              <div>
                <p className="font-bold">{askedQuestion.Parent}</p>
                <p>{askedQuestion.question}</p>
              </div>
            </div>

            {/* Display Answers */}
            {askedQuestion.answers && askedQuestion.answers.length > 0 ? (
              <div>
                <h2 className="text-xl font-bold text-green-900 mb-2">
                  Answers
                </h2>
                {askedQuestion.answers.map((answer) => (
                  <div key={answer.id} className="flex items-center mb-2">
                    <img
                      src={answer.imageLink}
                      alt={`User ${answer.user}`}
                      className="rounded-full w-10 h-10 mr-2"
                    />
                    <div>
                      <p className="font-bold">{answer.user}</p>
                      <p>{answer.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No answers available for this question.</p>
            )}

            {/* Post Answer */}
            <div className="flex">
              <input
                type="text"
                placeholder="Your answer..."
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                className="border border-gray-300 p-2 flex-1 mr-2 rounded"
              />
              <button
                onClick={addAnswer}
                className="bg-green-900 text-white p-2 rounded"
              >
                Post Answer
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Talk;
