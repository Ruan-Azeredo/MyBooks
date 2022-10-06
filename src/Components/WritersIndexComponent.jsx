import { useContext } from "react"
import DataContext from "../Context/DataContext"

export default function WritersIndexComponent() {

    const {data} = useContext(DataContext)

    const ordenaMaisLidos = (data) => {
        let k = 0
        data.map(key => {
            if (data[k + 1] !== undefined) {
                if (key.quantidade < data[k + 1].quantidade) {
                    const listaAux = data[k]
                    data[k] = data[k + 1]
                    data[k + 1] = listaAux
                    ordenaMaisLidos(data)
                }
            }
            k++
        })
    }

    ordenaMaisLidos(data)

    const limitaNEscritores = (key, indice) => {
        if (indice <= 3) {
            return ( 
                <div key={key.id} className={`font-medium text-base text-start px-7 pt-6`}>{key.escritor}
                    <div className={`font-normal`}>{key.quantidade} Livros</div>
                </div>
            )
        }
    }

    return (
        <div className="">
            <div className={`
            bg-gradient-to-bl from-gray-100 via-amber-100 to-gray-100
            dark:bg-gradient-to-bl dark:from-escuroDark dark:via-anilDark dark:to-escuroDark 
            rounded-l-[40px] mt-12 font-semibold text-center mx-auto pt-4 text-xl pb-5 sticky top-32
            `}>Autores mais lidos
                <div>
                    {data.map((key, indice) => (
                        <div key={key}>
                            {limitaNEscritores(key, indice)}
                        </div>  
                    ))}
                </div>
            </div>
        </div>
    )
}