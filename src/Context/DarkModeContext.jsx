import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext()

export function DarkModeProvider(props) {

    const [tema, setTema] = useState('light')

    // useEffect(() => {
    //     const tema = localStorage.getItem('tema')
    //     console.log('tema: ', tema)
    //     setTema(tema)
    // }, [])

    const alterarTema = () => {
        setTema(tema == 'light' ? 'dark' : 'light')
    }

    return (
        <DarkModeContext.Provider value={{ tema, alterarTema }}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContext