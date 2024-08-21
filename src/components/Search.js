import React, { useState } from 'react'

export const Search = ({ listMovieState, setListMovieState }) => {
  const [search, setSearch] = useState('')
  const [noMatch, setNoMatch] = useState(false)

  const searchMovie = (e) => {
    const target = e.target
    setSearch(target.value)

    let moviesMatch = listMovieState.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLowerCase())
    })

    if (search.length <= 1 || moviesMatch <= 0) {
      moviesMatch = JSON.parse(localStorage.getItem('movies'))
      setNoMatch(true)
    } else {
      setNoMatch(false)
    }

    setListMovieState(moviesMatch)
  }

  return (
    <div className="search">
      <h3 className="title">Search: {search}</h3>
      {
        (noMatch && search.length > 1) && (<span className="no_match">No match for search</span>)
      }
      <form>
        <input
          id='search_field'
          autoComplete='off'
          name='search'
          type="text"
          placeholder="search"
          onChange={ searchMovie }
        />
        <button type="button">Search</button>
      </form>
    </div>
  )
}
