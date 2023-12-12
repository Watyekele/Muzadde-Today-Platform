import React, { useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Talk = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      parent: "Sarah S",
      question:
        "Hello, Any home remedies for cough and flu? My girl can hardly sleep",
      image: "src/assets/download1.jpg",
      answers: [
        {
          id: 11,
          user: "Michael M",
          answer:
            "I normally give my children lemon first thing every morning, and it helps",
          image: "src/assets/muzade1.jpg",
        },
        {
          id: 12,
          user: "Geraldine J",
          answer:
            "Try giving her Ginger and garlic every after 2 hours. It worked for mine",
          image: "src/assets/muzadde2.jpg",
        },
      ],
    },
    {
      id: 2,
      parent: "Rehema N",
      question: "Any tips for managing screen time during this long holiday?",
      image: "src/assets/download.jpg",
      answers: [
        {
          id: 21,
          user: "Sarah S",
          answer: "We have designated screen time hours at my home.",
          image: "src/assets/download1.jpg",
        },
        {
          id: 22,
          user: "Micheal M",
          answer: "We encourage outdoor activities, especially during daytime",
          image: "src/assets/muzade1.jpg",
        },
      ],
    },
    {
      id: 3,
      parent: "Ogwang R",
      question: "How do you deal with picky eaters?",
      image: "src/assets/download2.jpg",
      answers: [
        {
          id: 31,
          user: "Muzadde Today User",
          answer: "I normally give mine small portions after short intervals.",
          image: "src/assets/default-avatar.jpg",
        },
        {
          id: 32,
          user: "Muzadde Today User",
          answer:
            "We get creative with food, for example, roll rice into balls",
          image: "src/assets/default-avatar.jpg",
        },
      ],
    },
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [newAnswers, setNewAnswers] = useState({});

  const addQuestion = () => {
    if (!newQuestion.trim()) {
      console.error("Question cannot be empty");
      return;
    }

    const newQuestionObj = {
      id: Date.now(),
      parent: "Muzadde Today User",
      question: newQuestion,
      image: "src/assets/default-avatar.jpg",
      answers: [],
    };

    setQuestions((prevQuestions) => [newQuestionObj, ...prevQuestions]);
    setNewQuestion("");
  };

  const addAnswer = (questionId) => {
    if (newAnswers[questionId] === "") {
      console.error("Answer cannot be empty");
      return;
    }

    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              answers: [
                ...question.answers,
                {
                  id: Date.now(),
                  user: "Muzadde Today User",
                  answer: newAnswer,
                  image: "src/assets/default-avatar.jpg",
                },
              ],
            }
          : question
      )
    );

    setNewAnswer("");
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
            required
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

        {/* Displaying Questions and Answers */}
        <div className="flex flex-wrap">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className={`mb-8 ${index % 2 === 0 ? "mr-8" : "ml-8"}`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={question.image}
                  alt={`Parent ${question.parent}`}
                  className="rounded-full w-16 h-16 mr-4"
                />
                <div>
                  <p className="font-bold">{question.parent}</p>
                  <p>{question.question}</p>
                </div>
              </div>

              {/* Answers */}
              <div>
                <h2 className="text-xl font-bold text-green-900 mb-2">
                  Answers
                </h2>
                {question.answers.map((answer) => (
                  <div key={answer.id} className="flex items-center mb-2">
                    <img
                      src={answer.image}
                      alt={`User ${answer.user}`}
                      className="rounded-full w-10 h-10 mr-2"
                    />
                    <div>
                      <p className="font-bold">{answer.user}</p>
                      <p>{answer.answer}</p>
                    </div>
                  </div>
                ))}

                {/* Post Answer */}
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Your answer..."
                    value={newAnswers[question.id] || ""}
                    onChange={(e) =>
                      setNewAnswers({
                        ...newAnswers,
                        [question.id]: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 flex-1 mr-2 rounded"
                    required
                  />
                  <button
                    onClick={() => addAnswer(question.id)}
                    className="bg-green-900 text-white p-2 rounded"
                    disabled={!newAnswers[question.id]?.trim()}
                  >
                    Post Answer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Talk;
