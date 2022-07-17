export interface Country{
    capital:string[],
    flags:{png:string,svg:string},
    name:{common:string,nativeName:Object},
    population:number,
    region:string,
    subregion:string,
    tld:string[],
    currencies:{},
    languages:{},
    borders?:string[],
    cioc:string,
    cca3:string

}

export interface CountryState{
    response:Country[],
    filterResponse:Country[]
}

export interface contextDate  {
    defaultResponse: Country[]
}

