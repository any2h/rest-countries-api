import { useQuery } from "@tanstack/react-query"
import styled from "styled-components"
import CountryCard from "./CountryCard"

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

const url = 'https://restcountries.com/v3.1/all?fields=ccn3,cca3,name,capital,region,population,flags'

const CountryList = () => {
    const { isLoading, isError, error, data } = useQuery(
        ['country'],
        () => fetch(url).then(res => res.json())
    )

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        console.log('Error: ' + error)
        return <div>Error...</div>
    }

    console.log(data);


    return (
        <StyledCountryList>
            {data.map((country, i) => <CountryCard key={i} {...country} />)}
        </StyledCountryList>
    )
}

export default CountryList
