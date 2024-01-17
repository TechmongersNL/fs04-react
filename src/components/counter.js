import { useState, useEffect } from "react";

const Counter = () => {
  //   let currentCount = 0;

  const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const favoriteClicked = () => {
    setFavorite(!favorite);
  };

  return (
    <div>
      <p>Likes: {count}</p>
      <button
        onClick={() => {
          console.log("button was clicked!");
          setCount(count + 1);
        }}
      >
        Increase likes
      </button>
      <hr />
      <button onClick={favoriteClicked}>
        {favorite ? "Un-favorite" : "Favorite"}
      </button>
      ⭐️🐙
      {favorite ? "⭐️" : ""}
    </div>
  );
};

export default Counter;
