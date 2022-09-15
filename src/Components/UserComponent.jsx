import { useContext } from "react"
import AuthContext from "../Context/AutenticaçãoContext"

export default function UserComponent() {
    const { photoglobal } = useContext(AuthContext)
    console.log(photoglobal)
    return (
        <div className={`
        w-[180px] h-60  col-start-1 col-end-2 rounded-r-[40px]
        bg-gradient-to-br from-gray-100 via-amber-100 to-gray-100     
        `}>
            <img src={photoglobal} className={`w-20 h-20 rounded-3xl mx-auto mt-8`} />
        </div>
    )
}