import { useEffect, useReducer } from "react";
import { CountriesApi } from "../services/CountriesApi";
import { Country,CountryState } from "../types";
import { ContextAPI } from "./ContextApi"
   
const initValue:CountryState = {
    response:[],
    filterResponse:[]
}

function reducer (state:any,action:any){
    const {type,payload} = action
    switch(type){
        case "DEFAULT_VALUE":
            return {...state,response:payload}    
        default :
           return state
    }
}

export  function CountryContext (props:any){
    const [state,dispatch] = useReducer(reducer,initValue)

   
    useEffect(()=>{
        defaultValue()
    },[])

    const defaultValue =async  () =>{
        let countryList:Country[] = []
        
        await CountriesApi().then(res =>{
            countryList = res
        });
         
         dispatch({
             type:"DEFAULT_VALUE",
             payload:countryList
         })
     }
   return (
    <ContextAPI.Provider value={{
            defaultResponse:state.response
        }
        }>
        {props.children}
    </ContextAPI.Provider>
   )
}