import { Link } from "react-router-dom";
import CharacterList from "../components/character-list";

const CharacterListPage = () => {
  return (
    <div>
      <Link to={"/"}>Go back to Home Page</Link>
      <CharacterList />
    </div>
  );
};

export default CharacterListPage;
