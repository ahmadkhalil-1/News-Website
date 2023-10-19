import React from "react";
import { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();
let api = "https://hn.algolia.com/api/v1/search?";
const initialState = {
  isloading: true,
  query: "",
  page: 0,
  nbPages: 0,
  hits: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApi = async (api) => {
    dispatch({
      type: "isLoading",
    });
    try {
      const res = await fetch(api);
      const data = await res.json();
      dispatch({
        type: "SetData",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const RemovePost = (ID) => {
    dispatch({ type: "Remove_Post", payload: ID });
  };

  const searchPost = (searchQuery) => {
    dispatch({ type: "Search_Post", payload: searchQuery });
  };

  const GetPrev = () => {
    dispatch({
      type: "GetPrevButton",
    });
  };

  const GetNext = () => {
    dispatch({
      type: "GetNextButton",
    });
  };

  useEffect(() => {
    fetchApi(`${api}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, RemovePost, searchPost, GetPrev, GetNext }}
    >
      {children}
    </AppContext.Provider>
  );
};

const GlobalState = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, GlobalState };
