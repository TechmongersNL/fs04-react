import "./App.css";
import Character from "./components/character";
import charactersData from "./charactersData";
import Counter from "./components/counter";
import { useState } from "react";
// import something from 'some place'

// App.js is the entry point to the rest of your app
// This is default behavior for create-react-app
function App() {
  const charactersComponents = () => {
    return charactersData.map((character) => {
      return (
        <Character
          key={character.id}
          name={character.name}
          birthday={character.born}
          blood={character.blood}
          imgUrl={character.imgUrl}
          quote={character.quote}
        />
      );
    });
  };

  return (
    <div className="App">
      {/* If we want a Character component for each character in our data, we could repeat it like below: */}
      {/* <Character
        name={charactersData[0].name}
        birthday={charactersData[0].born}
        blood={charactersData[0].blood}
        imgUrl={charactersData[0].imgUrl}
        quote={charactersData[0].quote}
      />
      <Character
        name={charactersData[1].name}
        birthday={charactersData[1].born}
        blood={charactersData[1].blood}
        imgUrl={charactersData[1].imgUrl}
        quote={charactersData[1].quote}
      />
      <Character
        name={charactersData[2].name}
        birthday={charactersData[2].born}
        blood={charactersData[2].blood}
        imgUrl={charactersData[2].imgUrl}
        quote={charactersData[2].quote}
      /> */}
      {/* ... and so on. But this gets repetitive really fast!! We can use .map to fix this */}
      {/* The below function uses an array iterator (map), which loops over every element in the charactersData array */}
      {/* The result of map is another array with new data */}
      {/* In our case, this new data is a Character component */}
      {charactersComponents()}
    </div>
  );
}

export default App;
