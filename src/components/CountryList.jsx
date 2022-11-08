import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import styled from "styled-components"
import CountryCard from "./CountryCard"
import SearchBar from "./SearchBar"

const StyledCountryList = styled.section`
    display: grid;
    

    @media ${({theme}) => theme.tablet} {
        grid-template-columns: repeat(2, 1fr);
        gap: 55px;
    }

    @media ${({theme}) => theme.laptop} {
        grid-template-columns: repeat(4, 1fr);
        gap: 70px;
    }
`

const baseURL = 'https://restcountries.com/v3.1/all?fields=ccn3,cca3,name,capital,region,population,flags'
const nameURL = 'https://restcountries.com/v3.1/name/'

const CountryList = () => {
    const [filter, setFilter] = useState(null)
    const [name, setName] = useState('')
    console.log(name);
    const { isLoading, isError, error, data } = useQuery(
        ['country'],
        () => fetch(url).then(res => res.json())
    )
    // const { isLoading, isError, error, data } = useQuery({
    //     queryKey: ['country'],
    //     queryFn: name ? 
    //         () => fetch(nameURL + 'rus').then(res => res.json()) :
    //         () => fetch(baseURL).then(res => res.json()),
    // })
    console.log(data)
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        console.log('Error: ' + error)
        return <div>Error...</div>
    }

    // console.log(data);
    const countryList = data.filter(data => filter ? data.region === filter : true);
    // console.log(countryList);

    return (
        <>
            <SearchBar 
                filter={filter} 
                setFilter={setFilter} 
                name={name} 
                setName={setName} 
            />
            <StyledCountryList>
                {countryList.map((country, i) => 
                    <CountryCard key={i} {...country} />
                )}
            </StyledCountryList>
        </>
    )
}

export default CountryList
