/** @format */
import { useState } from "react";
import React from "react";

const SpellCheck = () => {
  const customDictionary = {
    teh: "the",

    wrok: "work",

    fot: "for",

    exampl: "example",
  };

  const [inputText, setInputText] = useState("");
  const [suggestText, SetSuggestText] = useState("");
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    const words = text.split(" ");
    const correctWords = words.map((word) => {
      const correctWord = customDictionary[word.toLowerCase()];
      return correctWord || word;
    });
    const correctedText = correctWords.join(" ");
    const firstCorrection = correctWords.find(
      (word, index) => word !== words[index]
    );
    SetSuggestText(firstCorrection || "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      ></textarea>
      {suggestText && (
        <p>
          Did you mean: <strong>{suggestText}</strong>?
        </p>
      )}
    </div>
  );
};

export default SpellCheck;
