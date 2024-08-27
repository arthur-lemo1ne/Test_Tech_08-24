import { useEffect, useState } from "react";
import "./App.css"
import axios from 'axios'


function App() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchData = async() =>
    {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        const totalItems = response.data.length;



      } catch (error) {
        console.error("Error is", error)
      }
    }
  })

  return (
    <>
      <div className="header">
        <div className="container">
          <h5>L'encyclopédie des pays</h5>
        </div>
      </div>
      <div className="container">

      </div>
    </>
  );
}

export default App
