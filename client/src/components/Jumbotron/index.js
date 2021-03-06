// ------ Dependencies ------

import React from "react";
import "./style.css";


// ------Jumbotron ------

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Google Books Search</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/books">
        Powered by Google Books API
      </a>
    </div>
  );
}


// ------ Export ------

export default Jumbotron;
