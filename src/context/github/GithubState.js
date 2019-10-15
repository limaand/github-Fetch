import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './gitHubContext';
import GithubReduce from './githubReducer';
import {

    SEARCH_USERS,
    SET_LOADING,
    SET_ALERT,
    GET_USER,
    GET_REPOS,
    CLEAR_USER,
    REMOVE_ALERT

} from '../types';


const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReduce, initialState);

    //search users

    //get user

    //get repos

    //clear users

    //set loading

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading
        }}

      >
      
      {props.children}


    </GithubContext.Provider>


}

export default GithubState;



