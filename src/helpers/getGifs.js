export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=W2b0GJ2Pprs3r1BQapu6nt9q7AEJHyAy&q=${ encodeURI(category) }&limit=5`
    const respuesta = await fetch (url)
    const { data } = await respuesta.json()

    const gifs = data.map ( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    return gifs;
  }