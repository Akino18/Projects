import { useEffect, useState } from 'react'
import {Route, Routes } from 'react-router-dom'
import { CountryDetails } from './Components/CountryDetails'
import CountryList from './Components/CountryList'
import { CountryContext } from './Context/CountryContext'
import { CountriesApi } from './services/CountriesApi'
import './styleSheets/App.css'
import { Country } from './types'
import {BsMoon} from "react-icons/bs"
import Header from './Components/Header'

function App() {


  return (
    <>
   <Header/>
    <CountryContext>
    <Routes>
    <Route path="/" element={<CountryList/>}/>
    <Route path="country">
      <Route path=":id" element={<CountryDetails/>}/>
    </Route>
    <Route path="*" element={<h1>Ruta no encontrada <b>ERROR 404</b></h1>}/>
    </Routes>
    </CountryContext>
    </>
  )
}

export default App
