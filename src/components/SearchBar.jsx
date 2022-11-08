import styled from "styled-components"

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-block: 30px;

    input, select {
        height: 60px;
        background-color: ${({theme}) => theme.elemBG};
        border-radius: 5px;
        border: 0;
        outline: 0;
        box-shadow: ${({theme}) => theme.shadow};
    }

    select {
        width: 250px;
        text-indent: .75rem;
    }
`

const SearchBar = ({ name, setName, filter, setFilter }) => {
    const handleSelect = (e) => {
        if (e.target.value === 'All') {
            setFilter(null)
            return
        }
        setFilter(e.target.value)
    }

    const handleInput = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    return (
        <StyledSearchBar>
            <form onSubmit={handleInput}>
                <input 
                    type="text" 
                    placeholder="Search for a country..."
                    onChange={handleInput}
                />
            </form>
            <form>
                <select name="" id="" defaultValue={'Filter by Region'} onChange={handleSelect}>
                    <option hidden>Filter by Region</option>
                    {filter ? <option value='All'>All</option> : null}
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </form>
        </StyledSearchBar>
    )
}

export default SearchBar
