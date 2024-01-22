import "./App.css";
import CharacterListPage from "./pages/character-list-page";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import CharacterDetailPage from "./pages/character-detail-page";
// import something from 'some place'

// App.js is the entry point to the rest of your app
// You can see how this behavior is set up in src/index.js
// This is default behavior for create-react-app
function App() {
  return (
    <div className="App">
      <div className={"background-blue"}>
        Here is a header that appears above every page
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharacterListPage />} />
        <Route path="/characters/:id" element={<CharacterDetailPage />} />
      </Routes>
      <div className={"background-blue"}>
        Here is a footer that appears below every page
      </div>
    </div>
  );
}

export default App;
