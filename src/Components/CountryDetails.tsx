import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ContextAPI } from "../Context/ContextApi"
import { Country } from "../types"
import  "../styleSheets/CountryDetail.css"
import {HiArrowNarrowLeft} from "react-icons/hi"
import { CountriesApi } from "../services/CountriesApi"

interface Currencie {
  name:string,
  symbol:string
}

function thisCurrencie  (object:Object):object is Currencie {
  return object && "name" in object
} 

export function CountryDetails(){
  const  [state,setState] = useState()
  const [country,setCountry] = useState<Country>()
  const {id} = useParams()

  let countryFilter = () =>{
    CountriesApi().then(res =>{
      
      let [filter] = res.filter((country:Country) => country.cca3.toLowerCase().includes(id!.toLowerCase()))

       setCountry(filter)
     })
  }
  
  useEffect( ()=>{
    countryFilter()
  },[id])

  const currenciesData = ()=>{
    if(country?.currencies !== undefined){
      
    let currencies = Object.entries(country.currencies)

     return currencies.map(currencie =>{

        let current = currencie[1] as Currencie
        return current
        
      })
    }
    
  }

  let loader = <div className="rounded-l dark:text-White text-3xl absolute inset-0 m-auto animate-ping  w-36 h-36">Loading...</div>


    return (
      <>
      {country !== undefined ? 
      <section className="px-8 dark:bg-VeryDarkBlue transition-all pt-12 dark:text-White text-VeryDarkBlue">
        
        <div className="mb-12">
          <Link to="/" className="bg-white shadow p-2 px-5 rounded dark:bg-DarkBlue">
            <HiArrowNarrowLeft size="1.5em" className="inline text-DarkBlue mr-2 dark:text-White"/>
            back
          </Link>
        </div>
        <div className="country flex flex-col lg:flex-row py-3 md:p-0">
          <div className="country__flag w-full lg:w-1/2">
            <img
              className="w-full h-full "
              src={country.flags.svg}
              alt="country__flag"
            />
          </div>
          <div className="country__datails flex flex-col md:flew-row mt-12 md:ml-12">
            <div className="country__name ">
              <h3 className="text-3xl font-bold">
                {country.name.common}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 ">
              <div className="details__container mr-12">
                <p className="container__data">
                  Native name:{" "}
                  <span className="data__result">{
                  Object.values(country.name.nativeName)[0].common

                  
                  }</span>
                </p>
                <p className="container__data">
                  Population:{" "}
                  <span className="data__result">{country.population.toLocaleString()}</span>
                </p>
                <p className="container__data">
                  Region: <span className="data__result">{country.region}</span>
                </p>
                <p className="container__data">
                  Sub Region:{" "}
                  <span className="data__result ">{country.subregion}</span>
                </p>
                <p className="container__data">
                  Capital:{" "}
                  <span className="data__result ">{country.capital}</span>
                </p>
              </div>
              <div className="country__datails ">
                <p className="container__data">
                  top level domain:{" "}
                  <span className="data__result ">{country.tld}</span>
                </p>
                <p className="container__data">
                  currencies:{" "}
                  <span className="data__result ">
                    {  currenciesData()?.map((currencie,index:number) =>{
              return (
                <span key={index}>{currencie.name + " "}</span>
              )
            })}
                  </span>
                </p>
                <p className="container__data">
                  languages:{" "}
                  <span className="data__result ">
                    {Object.values(country.languages).join(", ")}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex">
              <p>Border Countries:</p>
              <div className="grid__border px-2 max-w-2xl flex flex-wrap">
                {country.borders === undefined 
                ?  <p>Not Borders</p> 
                : country.borders.map((border,index) =>{
                  return <Link key={index} className="m-2 shadow-lg shadow-DarkGray dark:shadow-none dark:bg-DarkBlue p-2 rounded" to={"/country/" + border}>{border}</Link>
                })
                }
              </div>
            </div>
          </div>
        </div>
      </section> : loader}
      
      </>
      
    );
}
