import { createContext, useContext } from "react";
import TrataWriter from "../functions/TrataWriter";
import BooksContext from "./BooksContext";
import WritersContext from "./WritersContext";

const DataContext = createContext()

export function DataProvider(props) {

    const { booksglobal } = useContext(BooksContext)
    const { writersglobal } = useContext(WritersContext)

    const moreReaded = () => {
        const arrayEscritores = []
        const arrayWriter_id = []
        const arrayCompleto = []
        const arrayFinal = []

        const percorreLivros = (book_id, y = 0, resp = null) => {
            if (booksglobal[y].id === book_id) {
                resp = booksglobal[y].writer_id
                return resp
            }
            if (booksglobal[y + 1] != null) {
                y = y + 1
                return percorreLivros(book_id, y, resp)
            }
        }

        booksglobal?.map(livro => {
            const book_id = livro.id
        
            const writer_id = percorreLivros(book_id)
            const writer_name = TrataWriter(writer_id, writersglobal)

            arrayCompleto.push(writer_name)
            
            if (!arrayEscritores.includes(writer_name)) {
                arrayEscritores.push(writer_name)
                arrayWriter_id.push(writer_id)
            }
        })
        
        arrayEscritores?.map((escritor, index) => {

            const quantidade = arrayCompleto.filter(x => x === escritor).length
            
            arrayFinal.push({writer_id: arrayWriter_id[index], escritor: escritor, quantidade: quantidade })
        })

        writersglobal?.map(escritor => { // caso o escritor nã tenha nenhum livro, porem, ainda existe com a qt = 0
            if (!arrayEscritores.includes(escritor.name)) {
                arrayFinal.push({writer_id: escritor.id, escritor: escritor.name, quantidade: 0 })
            }
        })

        return arrayFinal
    }

    const data = moreReaded()

    return (
        <DataContext.Provider value={{ data }}>
            {props.children}
       </DataContext.Provider>
    )
}
export default DataContext