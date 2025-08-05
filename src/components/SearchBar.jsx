import { useState } from "react";

const SearchBar = ({fetchWeather}) => {
    const [city, setCity] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.trim()) {
            fetchWeather(city)
            setCity('');  
        }
    }
  return (
    <div>
        <form className="flex" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your city Name" 
            value={city} onChange={(e)=> setCity(e.target.value)} 
            className="flex-1 p-2 border border-gray-300 rounded-l-lg outline-none border-r-0 " />
            <button type="submit" className="bg-blue-500 border cursor-pointer p-2 hover:bg-blue-600 rounded-r-lg  border-l-0">Search</button>
        </form>
    </div>
  )
}

export default SearchBar