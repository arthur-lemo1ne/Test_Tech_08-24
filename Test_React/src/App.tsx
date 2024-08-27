import { useEffect, useState } from "react";
import "./App.css"
import axios, { Axios } from "axios";
import CountryTable from "./Components/CountryTable";

function App() {

  const [countries, setCountries] = useState([]);
  const [content, setContent] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [totalItems, setTotalItems] = useState(Number);

  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setTotalItems(response.data.length);
        setCountries(response.data);
        console.log(countries[44].name.nativeName.prs.common)
        console.log(countries);
        setContent(CountryTable(countries));
      } catch (error) {
        console.log("Error is", error);
      }
    }

    fetchData()


  }, [totalItems])*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch("https://restcountries.com/v3.1/all").then((response) => response.json()).then((data) => {
          setTotalItems(data.length);
          
          console.log(data[75].currencies[Object.keys(data[75].currencies)].name)

          let d = <></>;
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
          
          

          const result = (
            <div>
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
            </div>
          )

          setContent(result);
          console.log(data);

        })
        
      } catch (error) {
        console.log("Error is", error);
      }
    }

    fetchData()


  }, [totalItems])


  return (
    <>
      <div className="header">
        <div className="container">
          <h5>L'encyclopédie des pays</h5>
        </div>
      </div>
      <div className="content">
        {content}
      </div>
    </>
  );
}

export default App
