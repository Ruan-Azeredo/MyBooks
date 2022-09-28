const axios = require('axios')

export default function BookDelete(id) {
    axios.delete(`http://localhost:3001/users/books/1/1/${id}`)
}