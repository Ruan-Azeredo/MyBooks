import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../Context/AutenticaçãoContext"

export default function UserComponent() {
    const { photoCooked, nameCooked } = useContext(AuthContext)

    //este trecho resolve o problema de Hidratação
    const [img, setImg] = useState()
    const [name, setName] = useState()
    useEffect(() => {
        setImg(photoCooked)
        setName(nameCooked)
    })

    const n = name?.split(" ")[0] //Pega só o primeiro nome

    return (
        <div className={`
        w-[180px] h-60  col-start-1 col-end-2 rounded-r-[40px] fixed top-11 grid 
        bg-gradient-to-br from-gray-100 via-amber-100 to-gray-100
        dark:bg-gradient-to-br dark:from-escuroDark dark:via-anilDark dark:to-escuroDark  
        `}>
            <img alt="" src={img} referrerPolicy="no-referrer" className={`h-20 w-20 rounded-3xl mx-auto mt-8 object-cover`} />
            <div className={`mx-10 px-2`}>Bem vindo de volta</div>
            <div className={`font-bold justify-self-center text-xl pb-4`}>{ n }</div>
        </div>
    )
}