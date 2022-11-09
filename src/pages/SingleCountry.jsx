import styled from "styled-components"
import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router-dom"
import { HiArrowNarrowLeft } from 'react-icons/hi'

const StyledSingleCountry = styled.section`
    .country-info {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: 600;

        h2 {
            font-size: ${({ theme }) => theme.fontSizes.md3};
            margin-bottom: 1.25rem;
        }

        span {
            font-weight: 300;
        }

        > div {
            margin-bottom: 2rem;

            > div {
                > *+* {
                    margin-top: .5rem;
                }
            }

            > div:first-child {
                margin-bottom: 2rem;
            }
        }
    }

    > a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        width: 104px;
        height: 32px;
        margin-top: 40px;
        background-color: ${({ theme }) => theme.elemBG};
        color: ${({ theme }) => theme.text};
        box-shadow: ${({theme}) => theme.shadow};
        border-radius: 5px;
    }

    img {
        margin-block: 50px 35px;
    }

    @media ${({theme}) => theme.laptop} {
        > div {
            display: flex;
            align-items: center;
        }

        > a {
            width: 136px;
            height: 40px;
            gap: 1rem;
            margin-top: 80px;
        }

        img {
            margin-top: 80px;
            max-height: 405px;
        }
    }
`

const SingleCountry = () => {
    const { cca3 } = useParams()
    const url = `https://restcountries.com/v3.1/alpha/${cca3}?fields=name,tld,currencies,capital,region,subregion,languages,population,flags,borders,ccn3`

    const fetchCountry = async () => {
        const URL = name ? `https://restcountries.com/v3.1/name/${name}` : `https://restcountries.com/v3.1/all`;
        const response = await fetch(URL)
        const data = response.json()
        console.log(data)
        return data
    }

    const { isLoading, isError, error, data: country } = useQuery({
        queryKey: ['singleCountry', cca3],
        queryFn: () => fetch(url).then(res => res.json()),
    })

    const { isSuccess, data: borderCountry } = useQuery({
        queryKey: ['borderCountry', cca3],
        queryFn: () => fetch(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(',')}`)
            .then(res => res.json()),
        enabled: !!country,
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        console.log('Error: ' + error)
        return <div>Error...</div>
    }

    const { name: { common, official, nativeName }, flags, population, region, subregion, languages, currencies, capital, tld, borders } = country

    return (
        <StyledSingleCountry>
            <Link to='/'><HiArrowNarrowLeft size={22} /> <span>Back</span></Link>
            <div>
                <div>
                    <img src={flags.svg} alt={common} />
                </div>

                <div className="country-info">
                    <h2>{common}</h2>
                    <div>
                        <div>
                            <p>Native Name: <span>{Object.values(nativeName).map(name => name.common).join(', ')}</span></p>
                            <p>Population: <span>{population.toLocaleString('en')}</span></p>
                            <p>Region: <span>{region}</span></p>
                            <p>Sub Region: <span></span>{subregion}</p>
                            <p>Capital: <span>{capital.join(', ')}</span></p>
                        </div>
                        <div>
                            <p>Top Level Domain: <span>{tld[0]}</span></p>
                            <p>Currencies: <span>{Object.values(currencies).map(curr => curr.name).join(', ')}</span></p>
                            <p>Languages: <span>{Object.values(languages).join(', ')}</span></p>
                        </div>
                    </div>

                    <div>
                        <p>Border Countries: </p>
                        {isSuccess && borderCountry.length > 0 ? 
                            <div>{borderCountry.map((border, i) => 
                                <Link 
                                    key={i} 
                                    to={`/${border.name.common}/${border.cca3}`}
                                >
                                    {border.name.common}
                                </Link>)}
                            </div> :
                            <span>none</span>
                        }

                    </div>
                </div>
            </div>
        </StyledSingleCountry>
    )
}

export default SingleCountry
