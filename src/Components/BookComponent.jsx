import { useContext, useState } from 'react'
import DarkModeContext from '../Context/DarkModeContext'
import WritersContext from '../Context/WritersContext'
import limitText from '../functions/limitText'
import TrataWriter from '../functions/TrataWriter'
import customStyles from '../Package/Modal/customStyles'
import BookModalComponent from './BookModalComponent'
import { IconPencil } from './icons'
import Modal from "react-modal"

export default function BookComponent(props) {

    const { writersglobal } = useContext(WritersContext)
    const {tema} = useContext(DarkModeContext)
    const resp = props.resp
    const escritorTratado = TrataWriter(resp.writer_id, writersglobal)

    //modal
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const customStylesM = customStyles(tema).customStyles

    const infos = { id: resp.id, title: resp.title, name: resp.name, url: resp.url, writer: escritorTratado, writer_id: resp.writer_id, createdAt: resp.createdAt }

    return (
        <div className={`mb-8`}>
            <button onClick={openModal}>
                <div className='absolute -mt-3 ml-28 rounded-md bg-amber-200 dark:bg-anilDark pt-4 pb-2 px-1 text-gray-800 dark:text-white pointer'>
                    <div className={`-rotate-12`}>{IconPencil}</div>
                </div>
                <img alt='' layout='fill' className={`h-60 w-40 rounded-3xl mb-4`} src={'http://localhost:3001/' + infos.url}/>
            </button>
            <div className={`h-[90px]`}>
                <div className={`font-semibold text-base w-[180px] mb-2`}>{limitText(infos.title, 40)}</div>
                <div className={`text-xs mb-4`}>{escritorTratado}</div>
            </div>
            <div className={`flex flex-row justify-center content-center w-40`}>
                <BookModalComponent value='Update' infos={infos} />
                <BookModalComponent value='Delete' infos={infos} />
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStylesM}>
                <div className={`mx-5 ${tema}`}>
                    <div className={`w-full flex flex-row pb-5 dark:text-white`}>
                        <div className="w-full">ADICIONAR RESENHA</div>
                        <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
                    </div>
                    <div className='flex flex-row dark:text-white'>
                        <div>
                            <img alt='' layout='fill' className={`h-48 rounded-3xl mb-4 mx-4`} src={'http://localhost:3001/' + infos.url} />
                            <div className='w-[120px] mx-auto mb-2'>{infos.title}</div>
                            {/* <div className='w-[120px] mx-auto'>{infos.writer}</div> */}
                        </div>
                        <div>
                            <textarea className='bg-mainColor dark:bg-mainDark p-4 w-80 h-80 outline-none rounded-2xl mr-4 ml-8'></textarea>
                        </div>
                    </div>
                    {/* <div className='h-10 -left-10 bg-mainDark -bottom-5 relative'> */}
                        <button className={`dark:text-white bg-mainColor dark:bg-mainDark px-4 py-2 rounded-full`} onClick={() => BookDelete(props.infos.id)}>Criar nova Resenha</button>
                    {/* </div> */}
                </div>
            </Modal>
        </div>
    )
}