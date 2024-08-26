import { useEffect, useState } from "react";
import "./App.css"
import axios, { Axios } from "axios";
import CountryTable from "./Components/CountryTable";

function App() {

  const [countries, setCountries] = useState([]);
  const [content, setContent] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const totalItems = response.data.length;
        setCountries(response.data);
        setContent(countries[4].name.common as string)
      } catch (error) {
        console.log("Error is", error);
      }
    }
    fetchData()
  })

  return (
    <>
      <div className="header">
        <div className="container">
          <h5>L'encyclopédie des pays</h5>
        </div>
      </div>
      <div className="container">
        {
          
            content
        
        }
        {/*<CountryTable country={countries}/>*/}
      </div>
    </>
  );
}

export default App
