const axios = require('axios')

export default function ReviewDelete(idCooked, id) {
    axios.delete(`http://localhost:3001/users/reviews/${idCooked}/writer/book/${id}`)
}