import { useContext, useState } from "react";
import DarkModeContext from "../Context/DarkModeContext";
import customStyles from "../Package/Modal/customStyles";
import Modal from "react-modal";

export default function ReviewModalComponent(props) {

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
    
    let color = null

    let modalConteudo = null

    if (props.value == 'Update') {
        color = 'bg-mainColor dark:bg-mainDark'
        modalConteudo = (
            <div className={`mx-5 ${tema}`}>

            <div className={`w-full flex flex-row pb-5 dark:text-white`}>
                <div className="w-full">ATUALIZAR RESENHA</div>
                <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
            </div>
            <form>
                <div className={`flex flex-row `}>
                    <div className={`flex flex-col mr-5 dark:text-white`}>

                        {/* <img src={'http://localhost:3001/' + props.infos.url} alt="" className={`h-48 w-32 rounded-2xl mx-auto`}/> */}
                        
                    </div>

                    <div className={`bg-mainColor dark:bg-mainDark text-white rounded-md p-2 pb-4`}>

                        <input className={`file:text-amber-300 dark:file:text-blueDark file:bg-white file:border-none rounded-full file:px-2 file:font-semibold border-2 border-white m-2 pr-1`} />
                        
                        {/* <img alt="" src={cover == undefined ? 'http://localhost:3001/' + props.infos.url : cover} className={`h-48 w-32 rounded-2xl mx-auto`} /> */}

                    </div>
                </div>
                
                <button className={`dark:text-white`} onClick={() => BookUpdate(idCooked, props.infos.writer_id, writer, props.infos.id, props.infos.title, title, file, props.infos.name, props.infos.url)}>Atualize um livro</button>
            </form>
            </div>
        )
    } else if (props.value == 'Delete') {
        color = 'bg-deleteColor dark:bg-deleteDark'
        modalConteudo =  (
            <div className={`mx-5 ${tema}`}>
            <div className={`w-full flex flex-row pb-5 dark:text-white`}>
                <div className="w-full">DELETAR LIVRO</div>
                <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
            </div>
            <form>
                <div className={`mr-5`}>
                        <div type="text" className={`flex text-xl bg-mainColor dark:bg-mainDark w-80 rounded-xl p-5 mb-10 dark:text-white`}>Tem certeza que deseja deletar este livro?</div>
                </div>
                <button className={`dark:text-white`} onClick={() => BookDelete(props.infos.id)}>Apagar o livro</button>
            </form>
        </div>
        )
    } else {
        color = 'bg-amber-200 dark:bg-anilDark'
        modalConteudo = (<div>Oiiiiiii</div>)
    }

    return (
        <div>
            <button onClick={openModal} className={`py-[2px] mx-1 px-2 rounded-full font-normal text-base ${color}`}>{props.value}</button>
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