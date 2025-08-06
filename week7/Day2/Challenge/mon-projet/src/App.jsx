import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },       // Initial votes from screenshot
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (languageName) => {
    setLanguages(prevLanguages => 
      prevLanguages.map(lang => 
        lang.name === languageName 
          ? { ...lang, votes: lang.votes + 1 } 
          : lang
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center">
          <h1 className="text-3xl font-bold text-white tracking-wide">Vote Your Language!</h1>
        </div>
        
        {/* Voting Options */}
        <div className="p-5 space-y-4">
          {languages.map((language) => (
            <div 
              key={language.name} 
              className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                  <span className="text-lg font-bold text-blue-700">{language.votes}</span>
                </div>
                <span className="text-lg font-medium text-gray-800">{language.name}</span>
              </div>
              <button 
                onClick={() => handleVote(language.name)}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Click Here
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-600">
        <p className="text-sm">Click on any language to vote for it!</p>
      </div>
    </div>
  );
}

export default App;