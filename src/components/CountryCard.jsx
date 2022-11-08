import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledCountryCard = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    background-color: ${({theme}) => theme.elemBG};
    box-shadow: 0 0 10px 1px rgba(0,0,0,.3);
    margin-bottom: 50px;

    img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        transition: all .25s ease-in-out;

        &:hover {
            scale: 1.085;
        }
    }

    > div:last-child {
        padding-block: 2.25rem;
        padding-inline: 1.5rem;

        p {
            margin-bottom: 4px;
        }
    }

    h4 {
        margin-bottom: 1.25rem;
        font-size: ${({ theme }) => theme.fontSizes.md1};
        font-weight: 800;
    }

    p {
        font-size: ${({ theme }) => theme.fontSizes.reg};
        font-weight: 600;

        span {
            font-weight: 300;
        }
    }

    @media ${({theme}) => theme.tablet} {
        margin-bottom: 0;

        h4 {
            font-size: ${({ theme }) => theme.fontSizes.sm};
        }

        p {
            font-size: ${({ theme }) => theme.fontSizes.sm};
        }
    }
`

const CountryCard = ({ name, cca3, flags, capital, population, region }) => {
    return (
        <StyledCountryCard>
            <Link to={`/${name.common}/${cca3}`}>
                <div>
                    <img src={flags.svg} alt={name.official} />
                </div>
                {/* <div className="flag" style={{backgroundImage: `url(${flags.svg})`}}>
                </div> */}
            </Link>
            <div>
                <h4>{name.official}</h4>
                <p>Population: <span>{population.toLocaleString('en')}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital.join(', ')}</span></p>
            </div>
        </StyledCountryCard>
    )
}

export default CountryCard
