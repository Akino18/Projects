import { CountriesApi } from "../services/CountriesApi"
import { useContext } from "react"
import { ContextAPI } from "../Context/ContextApi"
export default function SearchCounty (props:any){
   
    return(
        <div className ="flex p-3 flex-col md:flex-row md:justify-between md:items-center mb-5 dark:text-White">
            <div className="">
                
        <input
         onKeyUp={(el) =>{
            props.filter(el)
         }}
         id="countryName"
         
         className="shadow p-3 w-full md:w-80 rounded dark:bg-DarkBlue" type="text" placeholder="Search for a country..." />
            </div>
            <select defaultValue="default" onClick={(el) =>{props.filter(el)}} id="continentSelect" className="p-5 w-min mt-10 md:m-0 shadow cursor-pointer dark:bg-DarkBlue">
                <option disabled  value="default">Filter by region</option>
                <option className="continentOption" value="Africa" >Africa</option>
                <option className="continentOption" value="America">America</option>
                <option className="continentOption" value="Asia">Asia</option>
                <option className="continentOption" value="Europe">Europe</option>
                <option className="continentOption" value="Oceania">Oceania</option>
            </select>
        </div>
    )
}