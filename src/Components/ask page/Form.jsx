// AskQuestionForm.js
import React, { useState } from "react";

const AskQuestionForm = ({
  newQuestion,
  handleAskQuestion,
  setNewQuestion,
}) => {
  const handleInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  return (
    <div className="flex justify-right p-2 m-2">
      <textarea
        placeholder="Ask a question..."
        value={newQuestion}
        onChange={handleInputChange}
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
  );
};

export default AskQuestionForm;
