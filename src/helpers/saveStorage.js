export const saveMovieStorage = (key, element) => {
    let elements = JSON.parse(localStorage.getItem(`${key}`))

    if (Array.isArray(elements)) {
      elements.push(element)
    } else {
      elements = []
    }

    localStorage.setItem(`${key}`, JSON.stringify(elements))

    return element
  }