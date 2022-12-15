const axios = require('axios')

const ReviewUpdate = (idCooked, id, text) => {
    axios.put(`http://localhost:3001/users/reviews/${idCooked}/writer/book/${id}`, {
        text: text
    })
}

export default ReviewUpdate