import { useContext, useState } from "react";
import DarkModeContext from "../Context/DarkModeContext";
import customStyles from "../Package/Modal/customStyles";
import Modal from "react-modal";
import AuthContext from "../Context/AutenticaçãoContext";
import ReviewUpdate from "../functions/ReviewUpdate";
import ReviewDelete from "../functions/ReviewDelete";

export default function ReviewModalComponent(props) {

    const { tema } = useContext(DarkModeContext)
    const {idCooked} = useContext(AuthContext)

    const [modalIsOpen, setIsOpen] = useState(false);
    // const [data, setData] = useState({})
    const [text, setText] = useState()

    const openModal = () => {
    setIsOpen(true);
    }
    const closeModal = () => {
    setIsOpen(false)
    }
    const customStylesM = customStyles(tema).customStyles

    const getText = () => setText(event.target.value)
    
    let color = null

    let modalConteudo = null

    console.log('props.infos.id: ', props.infos.id)

    if (props.value == 'Update') {
        color = 'bg-mainColor dark:bg-mainDark'
        modalConteudo = (
            <div className={`mx-5 ${tema}`}>
                    <div className={`w-full flex flex-row pb-5 dark:text-white`}>
                        <div className="w-full">ATUALIZAR RESENHA</div>
                        <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
                    </div>
                    <div className='flex flex-row dark:text-white'>
                        <div>
                            <img alt='' layout='fill' className={`h-48 rounded-3xl mb-4 mx-4`} src={'http://localhost:3001/' + props.url} />
                            <div className='w-[120px] mx-auto mb-2'>{props.infos.title}</div>
                            {/* <div className='w-[120px] mx-auto'>{infos.writer}</div> */}
                        </div>
                        <div>
                            <textarea onChange={()=>getText()} defaultValue={props.infos.text} className='bg-mainColor dark:bg-mainDark p-4 w-80 h-80 outline-none rounded-2xl mr-4 ml-8'></textarea>
                        </div>
                    </div>
                    <form>
                <button className={`dark:text-white bg-mainColor dark:bg-mainDark px-4 py-2 rounded-full`} onClick={() => ReviewUpdate(idCooked, props.infos.id, text)}>Atualizar Resenha</button>
                    </form>
                </div>
        )
    } else if (props.value == 'Delete') {
        color = 'bg-deleteColor dark:bg-deleteDark'
        modalConteudo =  (
            <div className={`mx-5 ${tema}`}>
            <div className={`w-full flex flex-row pb-5 dark:text-white`}>
                <div className="w-full">DELETAR RESENHA</div>
                <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
            </div>
            <form>
                <div className={`mr-5`}>
                        <div type="text" className={`flex text-xl bg-mainColor dark:bg-mainDark w-80 rounded-xl p-5 mb-10 dark:text-white`}>Tem certeza que deseja deletar esta Resenha?</div>
                </div>
                <button className={`dark:text-white`} onClick={() => ReviewDelete(idCooked, props.infos.id)}>Apagar a Resenha</button>
            </form>
        </div>
        )
    } else {
        color = 'bg-amber-200 dark:bg-anilDark'
        modalConteudo = (
            <div className={`mx-5 ${tema}`}>
                    <div className={`w-full flex flex-row pb-5 dark:text-white`}>
                        <div className="w-full">RESENHA COMPLETA</div>
                        <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
                    </div>
                    <div className='flex flex-row dark:text-white'>
                        <div>
                            <img alt='' layout='fill' className={`h-48 rounded-3xl mb-4 mx-4`} src={'http://localhost:3001/' + props.url} />
                            <div className='w-[120px] mx-auto mb-2'>{props.infos.title}</div>
                            {/* <div className='w-[120px] mx-auto'>{infos.writer}</div> */}
                        </div>
                        <div>
                            <textarea defaultValue={props.infos.text} disabled className='bg-mainColor dark:bg-mainDark p-4 w-80 h-80 outline-none rounded-2xl mr-4 ml-8'></textarea>
                        </div>
                    </div>
                    <form>
                        <button className={`dark:text-white bg-mainColor dark:bg-mainDark px-4 py-2 rounded-full`}>Fechar</button>
                    </form>
            </div>
        )
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