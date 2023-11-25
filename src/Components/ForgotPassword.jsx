import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isResetLinkSent, setIsResetLinkSent] = useState(false);

  const handleForgotPassword = () => {
   
    const isValid = validateEmail(email);
    setIsEmailValid(isValid);

    if (isValid) {
     
      console.log('Forgot Password for:', email);

      setIsResetLinkSent(true);
    }
  };

  const validateEmail = (email) => {
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
      {isResetLinkSent ? (
        <p className="text-green-600 mb-4">Password reset link sent! Check your email.</p>
      ) : (
        <React.Fragment>
          <p className="text-gray-700 mb-8">Enter your email to reset your password.</p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 ${
                  !isEmailValid ? 'border-red-500' : ''
                }`}
              />
              {!isEmailValid && (
                <p className="mt-1 text-sm text-red-500">Please enter a valid email address.</p>
              )}
            </div>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-purple-600"
            >
              Reset Password
            </button>
          </form>
        </React.Fragment>
      )}
    </div>
  );
}

export default ForgotPassword;
