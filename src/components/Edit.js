import React from 'react'

export const Edit = ({ movie, listStorage, setMovieEdit, setListMovieState }) => {
  const titleComponent = 'Edit a movie'

  const updateData = (e, id) => {
    e.preventDefault()

    let target = e.target
    let title = target.title.value
    let description = target.description.value

    const movies = listStorage()
    const index = movies.findIndex(movie => movie.id === id)

    let movie = {
      id,
      title,
      description
    }

    movies[index] = movie
    localStorage.setItem('movies', JSON.stringify(movies))
    setListMovieState(movies)
    setMovieEdit(0)
  }

  return (
    <div className='editMovie'>
      <h3 className='title'>{ titleComponent }</h3>
      <form onSubmit={ e => updateData(e, movie.id) }>
        <input
          name="title"
          type="text"
          className='editTitle'
          defaultValue={ movie.title }
        />
        <textarea
          className="editDescription"
          name="description"
          defaultValue={ movie.description }
        ></textarea>
        <input
          className="edit"
          type="submit"
          value="update"
        />
      </form>
    </div>
  )
}
