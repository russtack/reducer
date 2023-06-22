export const INITIAL_STATE = {
  loading: false,
  post: {},
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      console.log(action);
      return {
        ...state,
        loading: true,
      };

    case "FETCHED":
      return {
        loading: false,
        post: action.payload,
      };

    default:
      break;
  }
};
