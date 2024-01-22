import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CharacterDetailPage = () => {
  // Get the value out of the path
  // The useParams hook will get the variable named in your Route in your App.js
  // useParams will that path variable in an object that we save into our own params variable
  // I expect this to be the id of the character whose details we want to see
  const params = useParams();
  console.log(params);

  const [characterDetailInfo, setCharacterDetailInfo] = useState(null);

  // Get the characters detail data from the API
  // Use the params object from above to get details for one specific character
  const getCharacterDetail = async () => {
    const response = await axios.get(
      `https://my-json-server.typicode.com/TechmongersNL/fs03-react/characters/${params.id}`
    );

    console.log("response:", response.data);
    setCharacterDetailInfo(response.data);
  };

  useEffect(() => {
    getCharacterDetail();
  }, []);

  return characterDetailInfo ? (
    <div>
      <Link to="/characters">Go back to character list</Link>
      <h1>{characterDetailInfo.name}</h1>
      <h2>Blood type</h2>
      <p>{characterDetailInfo.blood}</p>
      <h2>Birthday</h2>
      <p>{characterDetailInfo.born}</p>
      <h2>Quote</h2>
      <p>{characterDetailInfo.quote}</p>
    </div>
  ) : (
    "Loading..."
  );
};

export default CharacterDetailPage;
