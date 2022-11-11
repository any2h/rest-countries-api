import styled from "styled-components"
import { useEffect, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-block: 30px;

    > form:first-child {
        position: relative;
        display: flex;
        align-items: center;

        svg {
            position: absolute;
            left: 1.5rem;
        }
    }

    input, select {
        height: 60px;
        background-color: ${({theme}) => theme.elemBG};
        border-radius: 5px;
        border: 0;
        outline: 0;
        box-shadow: ${({theme}) => theme.shadow};
    }

    input {
        width: 100%;
        text-indent: 4rem;
    }

    select {
        width: 250px;
        text-indent: .75rem;
    }

    @media ${({theme}) => theme.laptop} {
        flex-direction: row;
        justify-content: space-between;
        padding-block: 48px;

        input, select {
            height: 55px;
        }
        
        input {
            width: 480px;
        }
    }
`

const SearchBar = ({ name, setName, filter, setFilter }) => {
    const inputRef = useRef(null)

    useEffect(() => {
        // inputRef.current.focus()
    }, [])
    
    const handleSelect = (e) => {
        if (e.target.value === 'All') {
            setFilter(null)
            return
        }
        setFilter(e.target.value)
    }

    const handleChange = (e) => {
        const value = e.target.value.replace(/^\s|[`./\\;?&#+]/g, '')
        setName(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setName(inputRef.current.value)
    }

    return (
        <StyledSearchBar>
            <form onSubmit={handleSubmit}>
                <AiOutlineSearch size={22} />
                <input 
                    type="text" 
                    placeholder="Search for a country..."
                    value={name}
                    onChange={handleChange}
                    ref={inputRef}
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
