const axios = require('axios')

const ReviewCreate = (idCooked, book_id, text) => {
    axios.post(`http://localhost:3001/users/reviews/${idCooked}/writer_id/${book_id}`, {
        text: text
    })
}

export default ReviewCreate