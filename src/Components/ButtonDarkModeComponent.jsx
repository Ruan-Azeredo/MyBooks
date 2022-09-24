import { useContext } from "react"
import DarkModeContext from "../Context/DarkModeContext"

export default function ButtonDarkModeComponent() {

    const {tema, alterarTema} = useContext(DarkModeContext)

    return (
        <>
            <div className={`w-[70px] bg-gray-600 rounded-full group`}>

                <input type='checkbox' className={`
                w-[70px] h-6 font-normal text-w peer relative flex decoration-transparent bg-transparent opacity-0`} />

                <div className={`ml-1 w-[22px] h-[22px] bg-white rounded-full peer-checked:translate-x-10
                absolute top-[19px]`}></div>

                <button className="ml-20 bg-gray-300" onClick={alterarTema}>{tema}</button>

            </div>
        </>
    )
}