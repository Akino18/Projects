import { Link } from "react-router-dom"
import { Country } from "../types"
import '../styleSheets/countryList.css'
import SearchCounty from "./SearchCountry";
import {useContext, useEffect, useState } from "react";
import { CountriesApi } from "../services/CountriesApi";
import { ContextAPI } from "../Context/ContextApi";

export default function CountryList (){
  const [countryList,setCountryList] = useState<Country[]>()
  const {defaultResponse} = useContext(ContextAPI)
  
  useEffect(()=>{
    CountriesApi().then((res:Country[]) =>{
    
        setCountryList(res)
      
    })
  },[])


  const filter = (input:any)=>{
    let countriesFilter:Country[]  = []
    if(input.currentTarget === document.getElementById("countryName")){
      countriesFilter = defaultResponse!.filter((country:Country) => country.name.common.toLowerCase().includes(input.currentTarget.value.toLowerCase()))
      setCountryList(countriesFilter)
    }
    else if (input.currentTarget === document.getElementById("continentSelect")){
      if(input.currentTarget.value != "default"){
        console.log(input.currentTarget.value )
         countriesFilter = defaultResponse!.filter((country:Country) => country.region.toLowerCase().includes(input.currentTarget.value.toLowerCase()))
      setCountryList(countriesFilter)
      }
    }
   
  }
 
  let loader = <div className="rounded-l dark:text-White text-3xl absolute inset-0 m-auto animate-ping  w-36 h-36">Loading...</div>
  
    return (
      <>
      {countryList === undefined ? 
      loader
      : <section className=" pt-5 transition-all text-sm text-VeryDarkBlue">
        
      <div className="mx-auto max-w-7xl">
          <SearchCounty filter={filter}/>
        <ul className="country__list  px-3 ">
          {countryList.map((country, index) => { 
            return (
              <Link key={index} to={"country/"+ country.cca3}>
                <li className="bg-White shadow-lg rounded" >
                <div>
                  <div>
                    <img
                      className="h-48 w-full"
                      src={country.flags.png}
                      alt=""
                    />
                  </div>
                  <div className="p-3 dark:bg-DarkBlue dark:text-White text-VeryDarkBlue">
                    <h3 className="text-xl font-bold py-3">
                      {country.name.common}
                    </h3>
                    <div className="">
                      <p>
                        <b>Population: </b>
                        {country.population.toLocaleString()}
                      </p>
                      <p className="py-2">
                        <b>Region: </b>
                        {country.region}
                      </p>
                      <p>
                        <b>Capital: </b>
                        {country.capital}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>}
      </>
    );
}