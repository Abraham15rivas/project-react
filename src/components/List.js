import React, { useEffect, useState } from 'react'
import { Edit } from './Edit'
//import { saveMovieStorage } from '../helpers/saveStorage'

export const List = ({ listMovieState, setListMovieState }) => {
  const [movieEdit, setMovieEdit] = useState(0)

  const listStorage = () => {
    let movies = JSON.parse(localStorage.getItem('movies'))
    setListMovieState(movies)
    return movies
  }

  const updateMovie = (id) => {
    setMovieEdit(id)
  }

  useEffect(() => {
    listStorage()
  }, [])

  const deleteMovie = (id) => {
    let elements = listStorage()
    let newElements = elements.filter(item => item.id !== parseInt(id))
    setListMovieState(newElements)
    localStorage.setItem('movies', JSON.stringify(newElements))
  }

  return (
    <>
      {
        (listMovieState != null && Array.isArray(listMovieState))
          ? listMovieState.map(movie => {
              return (
                <article key={movie.id} className="item-movie">
                  <h3 className="title">{ movie.title }</h3>
                  <p className="description">{ movie.description }</p>
                  <button
                    type="button"
                    className="edit"
                    onClick={ () => updateMovie(movie.id) }
                  >Edit</button>
                  <button
                    type="button"
                    className="delete"
                    onClick={ () => deleteMovie(movie.id) }
                  >Delete</button>
                  <br></br>
                  <br></br>
                  {
                    movieEdit === movie.id && (
                      <Edit
                        movie={movie}
                        listStorage={listStorage}
                        setMovieEdit={setMovieEdit}
                        setListMovieState={setListMovieState}
                      />)
                  }
                </article>
              )
            })
          : <h2>No movies available</h2>
      }
    </>
  )
}