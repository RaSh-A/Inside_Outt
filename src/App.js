import React, { useState } from "react";
import "./styles.css";

// let name = prompt("What is your name?");
// let rang = "blue";
const emojiDictionary = {
  "😂": "laughing",
  "😎": "smarty",
  "👑": "crown",
  "🎲": "dice",
  "😭": "crying"
};
const emojis = Object.keys(emojiDictionary);
export default function App() {
  let [meaning, setMeaning] = useState();
  function emojiHandler(e) {
    let meaning = emojiDictionary[e.target.value];
    if (meaning === undefined) {
      meaning = "Humko nai maalum";
    } else if (e.target.value === "") {
      meaning = "";
    }

    setMeaning(meaning);
  }

  function emojiHandler2(e) {
    let meaning = emojiDictionary[e];
    console.log(e);

    if (meaning === undefined) {
      meaning = "Humko nai maalum";
    } else if (e === null) {
      meaning = "";
    }

    setMeaning(meaning);
  }

  // let emojis[] = emojiDictionary.keys()

  return (
    <div className="App">
      <h1>inside outt</h1>

      <input
        onChange={emojiHandler}
        placeholder="type an emoji to know its meaning"
      />
      <h1>{meaning}</h1>
      <div className="emojis">
        {emojis.map(function (emoji) {
          return (
            <h1 onClick={() => emojiHandler2(emoji)} key={emoji}>
              {" "}
              {emoji}{" "}
            </h1>
          );
        })}
      </div>
    </div>
  );
}
