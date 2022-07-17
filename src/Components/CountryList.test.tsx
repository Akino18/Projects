import "@testing-library/jest-dom"
import {render} from "@testing-library/react"
import CountryList from "./CountryList"

test("render component", () =>{


    const component = render(<CountryList/>)
    component.getAllByText("Venezuela")
    console.log(component)
})