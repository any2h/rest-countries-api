import styled from "styled-components"
import Container from "./Container"

const StyledHeader = styled.header`
    height: 80px;
    background-color: ${({ theme }) => theme.elemBG};
    box-shadow: ${({theme}) => theme.shadow};

    > div {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: ${({theme}) => theme.fontSizes.sm};
        }

    }

    @media ${({theme}) => theme.tablet} {
        > div {
            h1 {
                font-size: ${({theme}) => theme.fontSizes.md1};
            }
        }
    }
`

const Header = () => {
  return (
    <StyledHeader>
        <Container>
            <h1>Where in the World?</h1>
            <div>123</div>
        </Container>
    </StyledHeader>
  )
}

export default Header
