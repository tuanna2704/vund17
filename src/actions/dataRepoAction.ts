import axios from "axios";
import { ADD_DATA, DELETE_DATA, FETCH_DATA, UPDATE_DATA } from "./types";

export const fetchData = () => async (dispatch:any) => {
    const data = await axios.get('https://api.github.com/users/defunkt/repos');
    dispatch({type: FETCH_DATA, payload: data.data});
}
export const deleteData = (data : {}) => async (dispatch:any) => {
    dispatch({type: DELETE_DATA, payload: data});
}

export const addData =  (data : any) => async (dispatch: any) =>{
    dispatch({type: ADD_DATA, payload: data });
}
export const updateData =  (data : any) => async (dispatch: any) =>{
    dispatch({type: UPDATE_DATA, payload: data });
}