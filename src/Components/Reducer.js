const reducer = (state, action) => {
  switch (action.type) {
    case "IsLoading":
      return {
        ...state,
        isloading: true,
      };
    case "SetData":
      return {
        ...state,
        isloading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "Remove_Post":
      return {
        ...state,
        hits: state.hits.filter((e) => e.objectID !== action.payload),
      };

    case "Search_Post":
      return {
        ...state,
        query: action.payload,
      };
    case "GetPrevButton":
      let prevData = state.page - 1;
      if (prevData <= 0) {
        prevData = 0;
      }
      return {
        ...state,
        page: prevData,
      };
    case "GetNextButton":
      let nextData = state.page + 1;
      if (nextData >= 50) {
        nextData = 0;
      }
      return {
        ...state,
        page: nextData,
      };
  }

  return state;
};

export default reducer;
