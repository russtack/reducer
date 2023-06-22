import React, { useReducer, useRef } from "react";
import "./form.css";
import { INIT_STATE, formReducer } from "./formReducer";

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INIT_STATE);
  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const tagRef = useRef();

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: "ADD_TAG", payload: tag });
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Desc"
          name="desc"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleChange}
        />
        <h1>Category</h1>
        <select id="" name="category" onChange={handleChange}>
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <h1>Tags</h1>
        <textarea name="" id="" cols="30" rows="10" ref={tagRef}></textarea>
        <button type="button" onClick={handleTags}>
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag) => (
            <small key={tag}>{tag}</small>
          ))}
        </div>
        <div className="quantity">
          <button type="button" onClick={() => dispatch({ type: "INCREASE" })}>
            +
          </button>
          <span>Quantity ({state.quantity})</span>
          <button type="button" onClick={() => dispatch({ type: "DECREASE" })}>
            -
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
