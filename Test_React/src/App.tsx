import { useEffect, useState } from "react";
import "./App.css"
import SearchInput from "./Components/SearchInput";

import axios, { Axios } from "axios";

function App() {

  const [countries, setCountries] = useState([]);
  const [content, setContent] = useState(<></>);
  const [totalItems, setTotalItems] = useState(Number);
  const [Cards, SetCards] = useState(Boolean);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [Search, setSearch] = useState();
  const [SearchName, setSearchName] = useState();

  

  const getAllCountries = async () => {
    try {

        const res = await fetch(`https://restcountries.com/v3.1/all`)

        if(!res.ok) throw new Error("Erreur d'URL")

        const data = await res.json()

        console.log("--");
        console.log(res.status);
        console.log("--");

        setCountries(data);
        setTotalItems(data.length);
        setIsLoading(false);
        Refresh();
    } catch (error:any) {
        setIsLoading(false);
        setError(error.message);
    }
  }


  const getCountryByName = async (countryName:string) => {
    try {

      let URL = "";

      if(!countryName)
      {
        URL= `https://restcountries.com/v3.1/all`
      }
      else
      {
        URL=`https://restcountries.com/v3.1/name/${countryName}`
      }

      const res = await fetch(URL)

      if(!res.ok) throw new Error("Erreur d'URL")

      const data = await res.json()

      setCountries(data);
      setTotalItems(data.length);
      setIsLoading(false);
      console.log("bah")
      Refresh();
    } catch (error:any) {
      setIsLoading(false);
      setError(error.message);
  }
  }

  const Refresh = async ()=>{
    console.log(isLoading)
    if(isLoading && !error)
      {
        setContent(<h4>Loading.......</h4>)
      }
      else if(error && !isLoading)
      {
        setContent(<h4>{error}</h4>)
      }
      else
      {
        formatData(countries, Cards);
      }
  }

  const formatData = (data:any, type:boolean) =>{
    let d = <></>;
    if(type)
    {
      for (let i = 0; i <totalItems; i++) {
        d = (
          <>
            {d}
            <div className="country_card">
              <div className="country_img">
                <img src={data[i].flags.png ? data[i].flags.png : "Pas d'image"}/>
              </div>
              <div className="country_data">
                <h3>{data[i].translations.fra.common}</h3>
                <h6>Nom d'origine: {data[i].name.hasOwnProperty('nativeName') ? data[i].name.nativeName[Object.getOwnPropertyNames(data[i].name.nativeName)[0]].common : "N/A"}</h6>
                <h6>Capitale: {data[i].capital}</h6>
                <h6>Région: {data[i].continents}</h6>
                <h6>Langue: {data[i].hasOwnProperty('languages') ? (data[i].languages[Object.getOwnPropertyNames(data[i].languages)[0]]) : "N/A"}</h6>
                <h6>Monnaie: {data[i].hasOwnProperty('currencies') ? (data[i].currencies[Object.keys(data[i].currencies)[0]].name) : "N/A"} - {data[i].hasOwnProperty('currencies') ? (data[i].currencies[Object.keys(data[i].currencies)[0]].symbol) : "N/A"}</h6>
                <h6>Nom de la population: {data[i].hasOwnProperty('demonyms') ? (data[i].demonyms[Object.keys(data[i].demonyms)[0]].m) : "N/A"}</h6>
              </div>
            </div>
          </>
        )
      }

      setContent(
        <>{d}</>
      )
    }
    else
    {
      for (let i = 0; i < totalItems; i++) {
        d = (
          <>
            {d}
            <tr>
              <td>
                  <img src={data[i].flags.png ? data[i].flags.png : "Pas d'image"}></img>
              </td>
              <td>{data[i].translations.fra.common}</td>
              <td>{data[i].name.hasOwnProperty('nativeName') ? data[i].name.nativeName[Object.getOwnPropertyNames(data[i].name.nativeName)[0]].common : "N/A"}</td>
              <td>{data[i].capital}</td>
              <td>{data[i].continents}</td>
              <td>{
              data[i].hasOwnProperty('languages') ? (data[i].languages[Object.getOwnPropertyNames(data[i].languages)[0]]) : "N/A"
              }</td>
              <td>{data[i].hasOwnProperty('currencies') ? (data[i].currencies[Object.keys(data[i].currencies)[0]].name) : "N/A"}</td>
              <td>{data[i].hasOwnProperty('currencies') ? (data[i].currencies[Object.keys(data[i].currencies)[0]].symbol) : "N/A"}</td>
              <td>{data[i].hasOwnProperty('demonyms') ? (data[i].demonyms[Object.keys(data[i].demonyms)[0]].m) : "N/A"}</td>
            </tr>
          </>
        )
      }
      

      setContent(
          <table>
              <thead>
                  <tr>
                      <th>Drapeau</th>
                      <th>Pays</th>
                      <th>Nom dans sa propre langue</th>
                      <th>Capitale</th>
                      <th>Région</th>
                      <th>Langue</th>
                      <th>Nom de la monnaie</th>
                      <th>Symbole de la monnaie</th>
                      <th>Nom de la population</th>
                  </tr>
              </thead>
              <tbody>
                  {d}
              </tbody>
            </table>
      )
    }
    
  }

  

  useEffect(() => {
    getAllCountries();
  }, [Cards])


  


  return (
    <>
      <div className="header">
        <div className="container">
          <h5>L'encyclopédie des pays</h5>
          <button id="b1"
          onClick={()=>SetCards(!Cards)}
          style={{
            backgroundColor: "#383089",
            height: "50px",
            width: "100px",
            borderRadius: "10%"
          }}>
            {"Cartes"}
          </button>
        </div>
      </div>
      <div className="content">
      <div className="all_country_wrapper">
          <div className="country_top">
            <div className="search">
              <SearchInput onSearch={getCountryByName}/>
            </div>
          </div>
          <div className="country_bottom">
            {content}
          </div>
        </div>
      </div>
    </>
  );
}

export default App
