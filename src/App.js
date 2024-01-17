import "./App.css";
import CharacterList from "./components/character-list";
// import something from 'some place'

// App.js is the entry point to the rest of your app
// This is default behavior for create-react-app
function App() {
  return (
    <div className="App">
      {/* Now have a new CharactersList component, to keep our App component more clean and organized */}
      <CharacterList />
    </div>
  );
}

export default App;
