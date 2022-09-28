import { useContext } from "react"
import BooksContext from "../Context/BooksContext"
import TrataWriter from "../functions/TrataWriter"

export default function WritersIndexComponent() {

    const { booksglobal } = useContext(BooksContext)

    const moreReaded = () => {
        const arrayEscritores = []
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
            const writer_name = TrataWriter(writer_id)

            arrayCompleto.push(writer_name)
            
            if (!arrayEscritores.includes(writer_name)) {
                arrayEscritores.push(writer_name)
            }
        })
        
        arrayEscritores?.map(escritor => {
            const quantidade = arrayCompleto.filter(x => x === escritor).length
            
            arrayFinal.push([escritor, quantidade])
        })

        return arrayFinal
    }

    const ordenaMaisLidos = (listaEscritoresLidos) => {
        let k = 0
        listaEscritoresLidos.map(key => {
            if (listaEscritoresLidos[k + 1] !== undefined) {
                if (key[1] < listaEscritoresLidos[k + 1][1]) {
                    const listaAux = listaEscritoresLidos[k]
                    listaEscritoresLidos[k] = listaEscritoresLidos[k + 1]
                    listaEscritoresLidos[k + 1] = listaAux
                    ordenaMaisLidos(listaEscritoresLidos)
                }
            }
            k++
        })
    }
    
    const listaEscritoresLidos = moreReaded()
    ordenaMaisLidos(listaEscritoresLidos)

    const limitaNEscritores = (key, indice) => {
        if (indice <= 3) {
            return ( 
                <div key={key.id} className={`font-medium text-base text-start px-7 pt-6`}>{key[0]}
                    <div className={`font-normal`}>{key[1]} Livros</div>
                </div>
            )
        }
    }

    return (
        <div className="">
            <div className={`
            bg-gradient-to-bl from-gray-100 via-amber-100 to-gray-100 rounded-l-[40px]
            mt-12 font-semibold text-center mx-auto pt-4 text-xl pb-5 sticky top-32
            `}>Autores mais lidos
                <div>
                    {listaEscritoresLidos.map((key, indice) => (
                        limitaNEscritores(key, indice)
                    ))}
                </div>
            </div>
        </div>
    )
}