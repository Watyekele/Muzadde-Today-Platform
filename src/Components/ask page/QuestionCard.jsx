// QuestionCard.js
import React, { useState } from 'react';

const QuestionCard = ({ question, handleAnswerQuestion, doctorAnswer, setDoctorAnswer, index }) => {
  const [userRole, setUserRole] = useState('doctor');

  const handleDoctorAnswer = () => {
    if (doctorAnswer.trim() === '') {
      console.error('Answer cannot be empty');
      return;
    }

    if (userRole === 'doctor') {
      handleAnswerQuestion(index);
      setDoctorAnswer('');
    } else {
      console.error('Only doctors can provide answers.');
    }
  };

  const handleAnswerInputChange = (e) => {
    setDoctorAnswer(e.target.value);
  };

  return (
    <div className="question-one ml-10">
      {/* Existing code for displaying questions */}
      {/* ... */}
      {!question.answer && (
        <div>
          <textarea
            placeholder="Doctor's answer..."
            value={doctorAnswer}
            onChange={handleAnswerInputChange}
            className="border p-2"
            required
          ></textarea>
          <button
            onClick={handleDoctorAnswer}
            className="bg-gray-500 text-white px-6 rounded-md ml-2"
            disabled={!doctorAnswer.trim()}
          >
            Answer
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
