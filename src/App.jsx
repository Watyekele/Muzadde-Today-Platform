import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FAQ from './Components/FAQ';
import Subscription from './Components/Subscription';

const faqData = [
  {
    question: 'What is Muzadde Today?',
    answer: 'Muzadde Today is a parent platform for advice on how to raise children.',
  },
  {
    question: 'Is Muzadde Today a paid-only support community?',
    answer: 'Non-members are also able to get a limited service from Muzadde Today',
  },
  {
    question: 'How long will it take me to get feedback from a specialist?',
    answer: 'You will get feedback from a specialist within 10 minutes',
  },
  //  We can add more FAQ items here
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App">
         
          <FAQ data={faqData} />
        </div>} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </Router>
  );
}

export default App;