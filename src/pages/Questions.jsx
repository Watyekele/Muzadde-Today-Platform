import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Talk = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState({});
  const [askedQuestion, setAskedQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetchQuestions();
    fetchAnswers();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/talkquestions"
      );

      setQuestions(response.data.data); // Assuming response.data is the array you provided
    } catch (error) {
      console.error("Error fetching questions", error);
    }
  };

  const fetchAnswers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/talkanswers?populate=*"
      );

      setAnswers(response.data.data); // Assuming response.data is the array you provided
    } catch (error) {
      console.error("Error fetching answers", error);
    }
  };

  const addQuestion = async () => {
    try {
      const response = await axios.post(
        "http://localhost:1337/api/talkquestions",
        {
          data: {
            Parent: "Famba AbdulN",
            question: newQuestion,
            imageLink:
              "https://parentsofblackchildren.org/wp-content/uploads/2021/09/parents-of-black-children-colleen.jpg",
          },
        }
      );

      await fetchQuestions();

      setNewQuestion("");
    } catch (error) {
      console.error("Error adding question", error);
    }
  };

  const addAnswer = async (questionId) => {
    try {
      const response = await axios.post(
        "http://localhost:1337/api/talkanswers",
        {
          data: {
            User: "Joan",
            imageLink:
              "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2021-09/andrae-ricketts-3qi0pkm_wes-unsplash.jpg?itok=jUtH8qgq",
            answer: newAnswer[questionId], // Retrieve the answer for the specific question ID
          },
        }
      );

      await fetchAnswers(); // Fetch updated answers

      // Clear the newAnswer state for the specific question ID
      setNewAnswer({
        ...newAnswer,
        [questionId]: "", // Clear the input field after posting the answer
      });

      // Refresh the questions after posting the answer
      await fetchQuestions();
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
        {questions.length > 0 ? (
          <div className="flex flex-wrap">
            {questions.map((question) => (
              <div key={question.id} className="mb-8">
                {/* Display the question */}
                <div className="flex items-center mb-4">
                  <img
                    src={question.attributes.imageLink}
                    alt={`Parent ${question.attributes.Parent}`}
                    className="rounded-full w-16 h-16 mr-4"
                  />
                  <div>
                    <p className="font-bold">{question.attributes.Parent}</p>
                    <p>{question.attributes.question}</p>
                  </div>
                </div>

                {/* Answers */}
                <div>
                  <h2 className="text-xl font-bold text-green-900 mb-2">
                    Answers
                  </h2>
                  {/* Filter answers for the current question */}
                  {answers
                    .filter(
                      (answer) =>
                        answer.attributes.talkquestion &&
                        answer.attributes.talkquestion.data &&
                        answer.attributes.talkquestion.data.id === question.id
                    )
                    .map((answer) => (
                      <div key={answer.id} className="flex items-center mb-2">
                        <img
                          src={answer.attributes.imageLink}
                          alt={`User ${answer.attributes.User}`}
                          className="rounded-full w-10 h-10 mr-2"
                        />
                        <div>
                          <p className="font-bold">{answer.attributes.User}</p>
<<<<<<< HEAD
                          <p>{answer?.attributes?.answer}</p>
=======
                          <p>{answer.attributes.answer}</p>
>>>>>>> 3b2fff74acffcec61bb6d2be5b08d245852e7c3b
                        </div>
                      </div>
                    ))}

                  {/* Post Answer */}
                  <div>
                    <input
                      type="text"
                      placeholder="Your answer..."
                      value={newAnswer[question.id] || ""}
                      onChange={(e) =>
                        setNewAnswer({
                          ...newAnswer,
                          [question.id]: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2 flex-1 mr-2 rounded"
                    />
                    <button
                      onClick={() => addAnswer(question.id)}
                      className="bg-green-900 text-white p-2 rounded"
                      disabled={!newAnswer[question.id]?.trim()}
                    >
                      Post Answer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No questions available</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Talk;
