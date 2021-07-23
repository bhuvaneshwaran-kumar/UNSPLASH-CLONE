const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = `https://api.unsplash.com`
const COUNT = 30

console.log(API_KEY)

export function getRandomImages() {
    const URL = `${BASE_URL}/photos/random/?client_id=${API_KEY}&count=${COUNT}`
    return fetch(URL)
}


export function getSearchImages(searchTerm) {
    const URL = `${BASE_URL}/search/photos/?client_id=${API_KEY}&per_page=${COUNT}&query=${searchTerm}`
    return fetch(URL)
}