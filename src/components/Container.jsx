import styled from 'styled-components'

const StyledContainer = styled.div`
    max-width: 82.5rem;
    margin-inline: auto;
    padding-inline: 1.25rem;
`

const Container = ({ children }) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

export default Container
