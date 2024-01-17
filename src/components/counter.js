import { useState } from "react";

const Counter = () => {
  // count and favorite are now special React state variables!
  // When the value of count or favorite changes (by using setCount or setFavorite), React will re-render the Counter component
  const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  //       ^             ^                   ^
  //  state variable     ^            initial value of the state variable
  //        function to update the state variable

  const favoriteClicked = () => {
    setFavorite(!favorite);
  };

  return (
    <div>
      <p>Likes: {count}</p>
      <button
        onClick={() => {
          console.log("Like button was clicked!");
          setCount(count + 1);
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
