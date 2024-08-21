import React, { useState } from 'react'
import { saveMovieStorage } from '../helpers/saveStorage'

export const Create = ({ setListMovieState }) => {
  const [movieState, setMovieState] = useState({
    title: '',
    description: ''
  })

  const titleComponent = 'Add a new movie'

  const getDataForm = (e) => {
    e.preventDefault()

    let target = e.target
    let title = target.title.value
    let description = target.description.value

    let movie = {
      id: new Date().getTime(),
      title,
      description
    }

    setMovieState(movie)
    setListMovieState(elements => {
      return [...elements, movie]
    })
    saveMovieStorage('movies', movie)
  }

  return (
    <div className="add">
      <h3 className="title">{ titleComponent }</h3>
      <form onSubmit={getDataForm}>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="title"
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
        ></textarea>
        <input
          id="save"
          type="submit"
          value="Save"
        />
      </form>
    </div>
  )
}
