import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext()

export function DarkModeProvider(props) {

    const [tema, setTema] = useState('')

    useEffect(() => {
        const tema = localStorage.getItem('temaGlobal')
        setTema(tema)
    }, [])

    const alterarTema = () => {
        setTema(tema == '' ? 'dark' : '')
        localStorage.setItem('temaGlobal', tema == '' ? 'dark' : '')
    }

    return (
        <DarkModeContext.Provider value={{ tema, alterarTema }}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContext