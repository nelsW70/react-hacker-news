import React, { useContext, useEffect, useReducer } from 'react';

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH
} from './actions';
import reducer from './reducer';

const APIENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
  isLoading: true
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async url => {
    dispatch({ type: SET_LOADING });
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
// make sure to use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
