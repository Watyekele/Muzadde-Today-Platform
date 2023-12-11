import React from "react";

export default function Search({ searchResults }) {
  return (
    <div>
      <h2>Search Result</h2>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}
