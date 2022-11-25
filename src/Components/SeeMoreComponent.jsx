import { useContext, useState } from "react";
import Modal from "react-modal";
import DarkModeContext from "../Context/DarkModeContext";
import customStyles from "../Package/Modal/customStyles";

export default function SeeMoreComponent() {

    const {tema} = useContext(DarkModeContext)

    const [modalIsOpen, setIsOpen] = useState(false);
    // const [data, setData] = useState({})
    const openModal = () => {
    setIsOpen(true);
    }
    const closeModal = () => {
    setIsOpen(false)
    }
    const customStylesM = customStyles(tema).customStyles
    
    return (
        <div>
            <button onClick={openModal} className={`bg-yellow-100 ml-16 dark:bg-slate-700 h-32 w-56 relative rounded-3xl pointer`}>
                <div className={`
                h-[180px] w-[120px] rounded-3xl absolute -top-16 left-4 bg-yellow-100 dark:bg-slate-700
                `}></div>
                <div className={`pt-28 pl-8 absolute -top-16 left-7 font-bold text-xl`}>+ Resenhas</div>
            </button>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStylesM}>
                <div></div>
            </Modal>
        </div>
    )
}