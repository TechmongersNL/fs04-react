// You can import other components and use them too!
import Counter from "./counter";
import Image from "./image";
import { Link } from "react-router-dom";

// A React component is just a function that returns some JSX
// Specifically, it returns some JSX with only one parent element

// props object is created by React
// the keys of the props object match the attributes added into the component when you use it
// Character component usage: <Character name="Luna" blood="Pure-blood" birthday="Feb 8" quote="Some quote" imgUrl="someurl.com" />
const Character = (props) => {
  // React requires you return only one parent element
  // You can use a React Fragment (an empty html element) to fix this issue
  return (
    <>
      <h1>{props.name}</h1>
      {/* using a component within a component also works! */}
      <Image url={props.imgUrl} />
      {/* Passing props from CharacterList even further down into Counter */}
      <Counter
        likes={props.likes}
        increaseLikes={props.increaseLikes}
        id={props.id}
      />
      {/* Link to /characters/1 if we're looking at Luna with id 1 */}
      {/* Link to /characters/2 if we're looking at the second character with id 2 */}
      {/* ...etc */}
      {/* Then this will get matched to a Route defined in App.js */}
      {/* You should never have a colon (:) in your Link "to" */}
      <Link to={`/characters/${props.id}`}>
        Go to {props.name}'s detail page
      </Link>
      <hr />
    </>
  );
};

// Don't forget to export your component!
export default Character;
