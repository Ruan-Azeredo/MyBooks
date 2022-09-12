import { createContext, useState } from "react";

const WritersContext = createContext()

export function WritersProvider(props) {
    const [writersglobal, setWritersglobal] = useState()

    return (
        <WritersContext.Provider value={{
            writersglobal,
            setWritersglobal
        }}>
            {props.children}
        </WritersContext.Provider>
    )
}

export default WritersContext