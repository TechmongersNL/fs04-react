import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to={"/characters"}>Go to Character List page</Link>
    </>
  );
};

export default HomePage;
