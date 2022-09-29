import { useContext } from "react"
import WritersContext from "../Context/WritersContext"

//Tratamento de dados: pega o writer_id que vem de books, e o compara com os ids dos escritores para pegar o nome referente a eles, assim, passamos os ids dos escritores e retornamos os nomes do sescritores.
const TrataWriter = (writer_id, writersglobal, y = 0, respss = null) => {

    const writers = writersglobal

    if (writers[y].id == writer_id) {
        respss = writers[y].name
        return respss
    }
    
    if (writers[y+1] != null) {
        y = y +1
        return TrataWriter(writer_id, writersglobal, y, respss)
    }
}

export default TrataWriter