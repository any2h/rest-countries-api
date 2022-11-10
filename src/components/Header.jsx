import styled from "styled-components"
import { Link } from "react-router-dom"
import Container from "./Container"
import { ImSun } from 'react-icons/im'
import { TbMoon } from 'react-icons/tb'

const StyledHeader = styled.header`
    height: 80px;
    background-color: ${({ theme }) => theme.elemBG};
    box-shadow: ${({ theme }) => theme.shadow};

    > div {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: ${({ theme }) => theme.fontSizes.sm};
        }

        > div {
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: .75rem;
            font-weight: 600;

            &:hover {
                opacity: .5;
            }
        }

    }

    @media ${({ theme }) => theme.tablet} {
        > div {
            h1 {
                font-size: ${({ theme }) => theme.fontSizes.md1};
            }
        }
    }
`

const Header = ({ theme, setTheme }) => {
    const themeToggler = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <StyledHeader>
            <Container>
                <Link to='/'>
                    <h1>Where in the World?</h1>
                </Link>
                {theme === 'dark' ? 
                    <div onClick={themeToggler}><ImSun size={20} /> Light Mode</div> : 
                    <div onClick={themeToggler}><TbMoon size={20} /> Dark Mode</div>
                }
            </Container>
        </StyledHeader>
    )
}

export default Header
