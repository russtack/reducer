import React, { useReducer } from "react";
import { INITIAL_STATE, postReducer } from "./postReducer";

const Post = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(dispatch({ type: "FETCH" }))
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCHED", payload: data });
        console.log(data);
      });
  };

  return (
    <div>
      <button onClick={fetchPost}>
        {state.loading ? "Loading" : "Fetch the post"}
      </button>
      <div>
        <p>{state.post?.title}</p>
      </div>
    </div>
  );
};

export default Post;
