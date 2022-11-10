import { useQuery } from "@tanstack/react-query"
import styled from "styled-components"
import CountryCard from "../components/CountryCard"

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

// const baseURL = 'https://restcountries.com/v3.1/all?fields=ccn3,cca3,name,capital,region,population,flags'
// const nameURL = 'https://restcountries.com/v3.1/name/'

const CountryList = ({ name, filter }) => {
    const fetchCountry = async () => {
        const URL = name ? `https://restcountries.com/v3.1/name/${name}` : `https://restcountries.com/v3.1/all`;
        const response = await fetch(URL)
        const data = response.json()
        return data
    }

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['country', name],
        queryFn: fetchCountry,
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        console.log('Error: ' + error)
        return <div>Error...</div>
    }

    if (data.status === 404) {
        console.log('Error: ' + error)
        return <div>No such country...</div>
    }

    // Если нет поиска по имени или фильтра по региону, показывать только 50 стран
    const countryList = name || filter ? 
        data.filter(data => filter ? data.region === filter : true) :
        data.slice(0, 50);
    // console.log(countryList);

    // No ReFetch Filter
    // const filterByName = countryList.filter(data => 
    //     data.name.common.toLowerCase().includes(name) ||
    //     data.name.official.toLowerCase().includes(name)
    // )
    // console.log(filterByName);

    return (
        <StyledCountryList>
            {countryList.map((country, i) => 
                <CountryCard key={i} {...country} />
            )}
        </StyledCountryList>
    )
}

export default CountryList
