import { useEffect, useState } from "react";
import "./App.css"
import axios, { Axios } from "axios";
import CountryTable from "./Components/CountryTable";

function App() {

  const [countries, setCountries] = useState([]);
  const [content, setContent] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [totalItems, setTotalItems] = useState(Number);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setTotalItems(response.data.length);
        setCountries(response.data);
        console.log(countries);
        setContent(CountryTable(countries));
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
