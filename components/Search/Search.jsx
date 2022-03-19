import Link from 'next/link'
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
                    const cityData = {
                        ...city,
                        slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`
                    }
                    matchingCities.push(cityData);
                    continue
                }
            }
        }
        return setResults(matchingCities);
    }
    return (
        <div className="search">
            <input
                type="text"
                value={query}
                onChange={searchHandler}
            />

            {query.length > 3 && (
                <ul>
                    {results.length > 0 ? (
                        results.map((city) => {
                            return (
                                <li key={city.slug}>
                                    <Link href={`/location/${city.slug}`}>
                                        <a>
                                            {city.name}
                                            {city.state ? `, ${city.state}` : ""}{" "}
                                            <span>({city.country})</span>
                                        </a>
                                    </Link>
                                </li>
                            );
                        })
                    ) : (
                        <li className="search__no-results">No results found</li>
                    )}
                </ul>
            )}
        </div>
    )
}

export default Search