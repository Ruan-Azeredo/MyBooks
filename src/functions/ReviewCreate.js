const axios = require('axios')

const ReviewCreate = (idCooked, book_id, text) => {
    axios.post(`http://localhost:3001/users/reviews/user_id/writer_id/${idCooked}/${book_id}`, {
        text: text
    })
}

export default ReviewCreate