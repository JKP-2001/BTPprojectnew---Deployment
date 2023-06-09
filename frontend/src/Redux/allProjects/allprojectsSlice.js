import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
var _ = require('lodash');
const url = "http://localhost:5000";

const initialState = {
    specificProjects:[],
    allProjects:[],
}

const allprojectsSlice = createSlice({
    name:"allProjects",
    initialState,
    reducers:{
        setAllProjects(state,action){
            return {
                ...state,
                allProjects: action.payload
              };
        },    
        setSpecificProjects(state,action){
            return {
                ...state,
                specificProjects: action.payload
              };
        }, 
        addProject(state,action){
            state.specificProjects.unshift(action.payload);
            state.allProjects.unshift(action.payload);
        }, 
        delProject(state,action){
            const index = state.specificProjects.findIndex(item => item.id === action.payload);
            state.specificProjects.slice(index, 1);
        }, 
        // editProject(state,action)
        // {
        //     const index = state.allProjects.findIndex(item => item.id === action.payload);
        //     console.log(state.allProjects[index].interestedPeople)
        //     return {
        //         ...state,
        //         allProjects: action.payload
        //       };
        // }
    }
})
export const {setAllProjects,setSpecificProjects,addProject,delProject,editProject} = allprojectsSlice.actions;

export default allprojectsSlice.reducer;



