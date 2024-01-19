import Character from "./character";
import axios from "axios";
import { useState, useEffect } from "react";
// import charactersData from "../charactersData";
// ^ we don't have to import from charactersData anymore! We can now make a network request with axios

const CharacterList = () => {
  const [characters, setCharacters] = useState(null);

  // Get the characters data from the API
  const getCharacters = async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/TechmongersNL/fs03-react/characters"
    );

    // We want to keep track of the number of "likes" for each character in our state now too
    // Add our own "likes" key into each character object
    const charactersWithLikes = response.data.map((character) => {
      return { ...character, likes: 0 };
    });
    console.log("without likes:", response.data);
    console.log("with likes:", charactersWithLikes);

    // Each character, now with data from the API and our own "likes" data, is saved into the local React state
    setCharacters(charactersWithLikes);
  };

  // If you don't put getCharacters in a useEffect hook, getCharacters will be called (and will make an Axios request) every time CharactersList gets re-rendered
  // We only want getCharacters to be called once, the first time getCharacters is rendered, which we can do by using useEffect with an empty dependency array at the end
  // Don't do this!:
  //getCharacters();
  // Instead, do this:
  useEffect(() => {
    getCharacters();
  }, []);

  const increaseLikes = (id) => {
    // when this function is called, I want to increase the amount of likes on that character
    // in order to update a character, I need to use setCharacters

    // to update the character: first we need to find the character that we want to update
    // then make a copy of that character, and increase the amount of likes in it
    // add that updatedCharacter back into our updatedArray: setCharacter(updatedArray)

    // we can also do the above logic with just one single .map:
    const updatedArray = characters.map((character) => {
      if (character.id === id) {
        return { ...character, likes: character.likes + 1 };
      } else {
        return character;
      }
    });
    setCharacters(updatedArray);
  };

  const charactersComponents = () => {
    return characters.map((character) => {
      return (
        <Character
          key={character.id}
          name={character.name}
          birthday={character.born}
          blood={character.blood}
          imgUrl={character.imgUrl}
          quote={character.quote}
          likes={character.likes}
          increaseLikes={increaseLikes}
          id={character.id}
        />
      );
    });
  };

  const getTotalLikes = () => {
    let total = 0;
    characters.forEach((character) => {
      total = total + character.likes;
    });
    return total;

    // The code below uses .reduce and does the same thing as above:
    // total = characters.reduce((total, character) => {
    // 	return total + character.likes
    // }, 0)
    // return total;
  };

  // If we do the below, we will get an error saying something like "cannot map on null", because initially characters is null!
  // return <div>{charactersComponents()}</div>;
  // To fix this, we add a ternary conditional:
  // If characters data is not null (which is the initial value of the characters state variable)
  // then I want to show Characters components
  // else I want to show "loading..."
  return (
    <div>
      <h2>
        Total number of likes: {characters ? getTotalLikes() : "Loading..."}
      </h2>
      {characters ? charactersComponents() : "Loading..."}
    </div>
  );
};

export default CharacterList;
