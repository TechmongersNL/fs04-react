import Character from "./character";
import charactersData from "../charactersData";

const CharacterList = () => {
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

  return <div>{charactersComponents()}</div>;
};

export default CharacterList;
