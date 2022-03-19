import React from 'react'
import cities from '../../lib/city.list.json'

const Search = () => {
    const [query, setQuery] = React.useState('')
    const [results, setResults] = React.useState([])

    const searchHandler = (event) => {
        const { value } = event.target
        setQuery(value)

        let matchingCities = [];

        if (value.length > 3) {
            for (let city of cities) {
                if (matchingCities.length >= 5) {
                    break;
                }
                const match = city.name.toLowerCase().startsWith(value.toLowerCase());
                if (match) {
                    matchingCities.push(city);
                }
            }
        }
        console.log(matchingCities);
        return setResults(matchingCities);
    }
    return (
        <div className="search">
            <input type="text" value={query} onChange={searchHandler} />
        </div>
    )
}

export default Search