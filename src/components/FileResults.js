import React from "react";

import "./FileResults.css";

function FileResults({ name, content }) {
  return (
    <div className="fullResult shadowBox">
      <div className="name">{name}:</div>
      <div className="text">{content}</div>
    </div>
  );
}

export default FileResults;
