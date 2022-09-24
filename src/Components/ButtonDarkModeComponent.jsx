import { useContext } from "react"
import DarkModeContext from "../Context/DarkModeContext"

export default function ButtonDarkModeComponent() {

    const {tema, alterarTema} = useContext(DarkModeContext)

    return (
        <>
            {/* <div className={`w-[70px] bg-gray-600 rounded-full group`}> */}

                {/* <input onClick={alterarTema} type='checkbox' className={`
                w-[70px] h-6 font-normal text-w peer relative flex decoration-transparent bg-transparent opacity-0`} />

                {tema == 'light' ? (

                    <div className={`ml-1 w-[22px] h-[22px] bg-white rounded-full peer-checked:translate-x-10
                    absolute top-[19px]`}></div>
                    
                ) : (
                        
                    <div className={`ml-1 w-[22px] h-[22px] bg-amber-300 rounded-full peer-checked:translate-x-10
                    absolute top-[19px]`}></div> 
                        
                )} */}

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

            {/* </div> */}
        </>
    )
}