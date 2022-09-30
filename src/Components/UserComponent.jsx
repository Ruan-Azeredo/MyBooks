import Image from "next/image"
import { useContext } from "react"
import AuthContext from "../Context/AutenticaçãoContext"

export default function UserComponent() {
    const { photoglobal, nameglobal } = useContext(AuthContext)
    const nomeCompleto = 'Ruan Azeredo dos Santos Gomes'
    const photo = 'https://lh3.googleusercontent.com/a-/AFdZucoglhEEq1usnZ6RKfyWgCP5cd--Xk8UFcEQ7gL9IQ=s96-c'
    const nome = nomeCompleto.split(" ")[0] //Pega só o primeiro nome
    return (
        <div className={`
        w-[180px] h-60  col-start-1 col-end-2 rounded-r-[40px] sticky top-11 grid 
        bg-gradient-to-br from-gray-100 via-amber-100 to-gray-100
        dark:bg-gradient-to-br dark:from-escuroDark dark:via-anilDark dark:to-escuroDark  
        `}>
            <img alt="" src={photoglobal} className={`h-20 w-20 rounded-3xl mx-auto mt-8`} />
            <div className={`mx-10 px-2`}>Bem vindo de volta</div>
            <div className={`font-bold justify-self-center text-xl pb-4`}>{ nome }</div>
        </div>
    )
}