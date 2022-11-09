import { useState } from "react"
// import styled from "styled-components"
import CountryList from "../components/CountryList"
import SearchBar from "../components/SearchBar"

const MainPage = () => {
    const [filter, setFilter] = useState(null)
    const [name, setName] = useState('')
    console.log(name);

    return (
        <main>
            <SearchBar 
                filter={filter} 
                setFilter={setFilter} 
                name={name} 
                setName={setName} 
            />
            <CountryList 
                name={name}
                filter={filter}
            />
        </main>
    )
}

export default MainPage
