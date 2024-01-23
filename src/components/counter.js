import { useState } from "react";

const Counter = (props) => {
  // No more local state for count, it's now being passed in through props
  // const [count, setCount] = useState(0);

  const [favorite, setFavorite] = useState(false);

  const favoriteClicked = () => {
    setFavorite(!favorite);
  };

  return (
    <div>
      <p>Likes: {props.likes}</p>
      <button
        onClick={() => {
          console.log("Like button was clicked!");
          // No more local state for count, it's now being passed in through props (increaseLikes)
          // setCount(count + 1);

          props.increaseLikes(props.id);
        }}
      >
        Increase likes
      </button>
      <hr />
      <button onClick={favoriteClicked}>
        {favorite ? "Un-favorite" : "Favorite"}
      </button>
      {/* If favorite is true, show the star, otherwise, show nothing */}
      {favorite ? "⭐️" : ""}
    </div>
  );
};

export default Counter;
