import axios from'axios'
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_FAILURE = "FETCH_USER_FALURE"



const fetchLoginRequest = query => {
    return {
      type: FETCH_USER_REQUEST,
      query: query || ""
    };
  };
  
  const fetchLoginSuccess = data => {
    return {
      type: FETCH_USER_SUCCESS,
      data: data
    };
  };
  
  const fetchLoginFailure = error => {
    return {
      type: FETCH_USER_FAILURE,
      error: error
    };
  };


const fetchData = (query = null) => {
    return dispatch => {
      dispatch(fetchLoginRequest);
      return axios
        .get(`https://api.github.com/search/users?q=${query}`)
        .then(res => {
          return dispatch(fetchLoginSuccess(res.data));
        })
        .catch(err => dispatch(fetchLoginFailure(err)));
    };
  };

export {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE,fetchLoginRequest,fetchLoginSuccess,fetchLoginFailure,fetchData}


