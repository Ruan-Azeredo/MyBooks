import { useContext, useEffect, useState } from "react"
import BooksContext from "../Context/BooksContext"
import WritersContext from "../Context/WritersContext"
import TrataWriter from "../functions/TrataWriter"

export default function WritersIndexComponent() {

    const { writersglobal } = useContext(WritersContext)
    const { booksglobal } = useContext(BooksContext)

    const [array, setArray] = useState([null])
    const [z, setZ] = useState(0)

    // const array_qt = []

    const moreReaded = () => {
        let a = 0
        let arescritores = []
        let arrayCompleto = []
        let arrayFinal = []

        const percorreLivros = (book_id, y = 0, resp = null) => {
            if (booksglobal[y].id == book_id) {
                resp = booksglobal[y].writer_id
                return resp
            }
            if (booksglobal[y + 1] != null) {
                y = y + 1
                return percorreLivros(book_id, y, resp)
            }
        }

        booksglobal?.map(key => {
            // console.log('key: ', key.id)
            const book_id = key.id
        
            const writer_id = percorreLivros(book_id)
            const writer_name = TrataWriter(writer_id)
            // console.log('writer_id: ', writer_id)
            // console.log('writer_name: ', writer_name)
            // console.log('writer_name: ', writer_name)
            // console.log('includes? ',arescritores.includes(writer_name))
            arrayCompleto.push(writer_name)
            if (!arescritores.includes(writer_name)) {
                arescritores.push(writer_name)
            }
        })
        // console.log('array escritores: ', arescritores)
        // console.log('array completo: ', arrayCompleto)
        arescritores?.map(key => {
            const qt = arrayCompleto.filter(x => x == key).length
            // console.log('qt: ', qt)
            arrayFinal.push([key, qt])
        })
        console.log(arrayFinal)
        // arescritores?.map(key => {
        //     console.log('key 2: ', key)
        //     arrayCompleto.push([key, a])
        //     a++
        // })
        // console.log(arrayCompleto)
        // console.log('indexOf: ', ar.indexOf('Rick Riordan'))
        // const qt = arescritores.filter(x => x == ).length
        // console.log('qt do ultimo autor: ', qt)


        // const verificaEscritor = (writer_name) => {
        //     // console.log(array)


        //     if (z == 0) {
        //         setArray([writer_name, 0])
        //         setZ(z + 1)
        //     } else {
        //         const maisescritores = [writer_name, 0]
        //         Array.prototype.push.apply(array, maisescritores)
        //         setZ(z + 1)
        //     }
        //     // console.log('array_qt',array_qt)
        //     // console.log('array', array)
        //     console.log('z: ', z)
        //     console.log('array: ', array)
        //     // console.log('setArray[z]', setArray[z])
            
        // }
        // console.log('booksglobal: ',booksglobal)
        // var i = 0
        // while (i <= 8) {
        //     i++
        //     // if (booksglobal == null) {
        //     // } else {
        //     //     if (booksglobal[i] == null) {
        //     //     } else {
        //             if (i > 1) {
        //                 console.log('booksglobal: ', booksglobal)
        //                 console.log('i: ', i)
        //                 if (booksglobal == undefined) {
        //                     booksglobal == 'oi'
        //                 } else {
                            
        //                     console.log('array inicial: ', array)
        //                     const l = 0
        //                     const book_id = booksglobal[i].id
        //                     const writer_id = percorreLivros(book_id)
        //                     const writer_name = TrataWriter(writer_id)
        //                     console.log('writer_name: ', writer_name)
        //                     // const numeros = [34, 3]
        //                     // const maisnumeros = [45, 7]
        //                     // Array.prototype.push.apply(numeros, maisnumeros)
        //                     // console.log('teste: ', numeros)
        //                     if (booksglobal[i+7] != null) {
        //                         // verificaEscritor(writer_name)
        //                         // l++
        //                         setZ(z + 1)
        //                         // console.log('l: ', l)
        //                         // if (array == [null]) {
        //                         //     setArray([writer_name, 0])
        //                         //     setZ(z + 1)
        //                         //     break
        //                         // } else {
        //                         //     const maisescritores = [writer_name, 0]
        //                         //     Array.prototype.push.apply(array, maisescritores)
        //                         //     setZ(z + 1)
        //                         //     break
        //                         // }
        //                         // break
        //                         console.log('z: ', z)
        //                         console.log('array: ', array)
        //                     }
        //                 }
                        
        //             }
        //     }
        // }
        // }
        // booksglobal(key => {
        // console.log('key: ', key.id)
        // const book_id = key.id
        
        // const writer_id = percorreLivros(book_id)
        // const writer_name = TrataWriter(writer_id)
        // console.log('writer_id: ', writer_id)
        // console.log('writer_name: ', writer_name)
        // console.log('writer_name: ', writer_name)
        // if (writer_name != null) {
        // verificaEscritor(writer_name, array)
        // }
        // })
    }
    moreReaded()

    // console.log('array: ', array)
    // console.log('writersglobal: ', writersglobal)
    // console.log('booksglobal: ', booksglobal)

    return (
        <div className="">
            <div className={`
            bg-gradient-to-bl from-gray-100 via-amber-100 to-gray-100 rounded-l-[40px]
            h-[370px] mt-12 font-semibold text-center mx-auto pt-4
            `}>Autores mais lidos</div>
        </div>
    )
}