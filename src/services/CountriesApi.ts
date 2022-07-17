import axios from "axios";
import { Country } from "../types";

export const CountriesApi = async() =>{
    let data:Country[] = [];
    let response = await axios.get("https://restcountries.com/v3.1/all").then(res =>{
        data = res.data
    })
    .catch(error =>{
        console.log("error de peticion",error)
    });
    
    
    return data
} 
