const axios = require('axios')

const WriterDelete = () => {
    axios.delete(`http://localhost:3001/users/writers/${idCooked}/${id}`)
}

export default WriterDelete