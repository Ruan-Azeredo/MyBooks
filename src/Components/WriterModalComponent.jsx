import customStyles from "../Package/Modal/customStyles";
import Modal from "react-modal";
import { useContext, useState } from "react";
import DarkModeContext from "../Context/DarkModeContext";

export default function WriterModalComponent(props) {

    const { tema } = useContext(DarkModeContext)
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    const customStylesM = customStyles(tema).customStyles

    let modalConteudo = null
    let borderColor = null

    if (props.value == 'Update') {
        borderColor = 'border-mainColor dark:border-mainDark'
        modalConteudo = (
            <div></div>
        )

    } else {
        borderColor = 'border-deleteColor dark:border-deleteDark'
        modalConteudo = (
            <div></div>
        )
    }

    return (
        <div>
            <button onClick={openModal} className={`py-[2px] mx-1 px-2 rounded-full font-normal text-base border-4 ${borderColor}`}>{props.value}</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStylesM}
                contentLabel="Example Modal">
                
                {modalConteudo}
            </Modal>
        </div>
    )
}