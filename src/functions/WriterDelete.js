const axios = require('axios')

const WriterDelete = (idCooked, id) => {
    axios.delete(`http://localhost:3001/users/writers/${idCooked}/${id}`)
}

export default WriterDelete