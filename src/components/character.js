// You can import other components and use them too!
import Counter from "./counter";
import Image from "./image";

// A React component is just a function that returns some JSX
// Specifically, it returns some JSX with only one parent element

// props object is created by React
// the keys of the props object match the attributes added into the component when you use it
// Character component usage: <Character name="Luna" blood="Pure-blood" birthday="Feb 8" quote="Some quote" imgUrl="someurl.com" />
const Character = (props) => {
  console.log(props);
  // React requires you return only one parent element
  // You can use a React Fragment (an empty html element) to fix this issue
  return (
    <>
      <h1>{props.name}</h1>
      <h2>Blood type</h2>
      <p>{props.blood}</p>
      <h2>Birthday</h2>
      <p>{props.birthday}</p>
      <h2>Quote</h2>
      <p>{props.quote}</p>
      {/* using a component within a component also works! */}
      <Image url={props.imgUrl} />
      <Counter />
      <hr />
    </>
  );
};

// Don't forget to export your component!
export default Character;
