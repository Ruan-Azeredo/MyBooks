import { useContext } from "react"
import DarkModeContext from "../Context/DarkModeContext"

export default function ButtonDarkModeComponent() {

    const {tema, alterarTema} = useContext(DarkModeContext)

    return (
        <div className={`ml-20`}>
            {tema == 'light' ? (
                <button className={`bg-gray-600 rounded-full w-[80px] h-7 flex flex-row pt-[3px]`} onClick={alterarTema}>
                <div className={`ml-1 w-[22px] h-[22px] bg-white rounded-full`}></div>
                <div className={`ml-[5px] text-white`}>Dark</div>
                </button>
            ) : (
                <button className={`bg-gray-200 rounded-full w-[80px] h-7 flex flex-row pt-[3px]`} onClick={alterarTema}>
                    <div className={`ml-3 text-amber-400`}>Light</div>
                    <div className={`ml-2 w-[22px] h-[22px] bg-amber-400 rounded-full`}></div>
                </button>
            )}
        </div>
    )
}