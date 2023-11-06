const initialState = {
  favouriteJobs: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favouriteJobs: {
          ...state.favouriteJobs,
          content: [...state.favouriteJobs.content, action.payload],
        },
      };

    case "REMOVE_FAVOURITE_JOB":
      return {
        ...state,
        favouriteJobs: {
          ...state.favouriteJobs,
          content: state.favouriteJobs.content.filter(
            (job) => job.data._id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
