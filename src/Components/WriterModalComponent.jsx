import customStyles from "../Package/Modal/customStyles";
import Modal from "react-modal";
import { useContext, useState } from "react";
import DarkModeContext from "../Context/DarkModeContext";
import WriterUpdate from "../functions/WriterUpdate";
import WriterDelete from "../functions/WriterDelete";

export default function WriterModalComponent(props) {

    const { tema } = useContext(DarkModeContext)

    const [autor, setAutor] = useState()

    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    const customStylesM = customStyles(tema).customStyles

    const getAutor = () => setAutor(event.target.value)

    let modalConteudo = null
    let borderColor = null

    if (props.value == 'Update') {
        borderColor = 'border-mainColor dark:border-mainDark'
        modalConteudo = (
            <div className={`mx-5 ${tema}`}>
                <div className={`w-full flex flex-row pb-5 dark:text-white`}>
                    <div className="w-full">ATUALIZAR AUTOR</div>
                    <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
                </div>
                <form>
                    <div className={`mr-5 dark:text-white`}>
                            <label>Autor</label>
                            <input type="text" defaultValue={props.resp.name} onChange={getAutor} required className={`flex bg-mainColor dark:bg-mainDark rounded-md w-72 h-10 pl-2 mb-10 `} />
                    </div>
                    <button className={`dark:text-white bg-mainColor dark:bg-mainDark px-4 py-2 rounded-full`} onClick={()=>WriterUpdate(props.idCooked, props.resp.id, autor)}>Atualizar Autor</button>
                </form>
            </div>
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