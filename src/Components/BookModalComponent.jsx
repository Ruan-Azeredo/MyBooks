import { useContext, useState } from 'react';
import Modal from 'react-modal';
import AuthContext from '../Context/AutenticaçãoContext';
import DarkModeContext from '../Context/DarkModeContext';
import DataContext from '../Context/DataContext';
import BookDelete from '../functions/BookDelete';
import BookUpdate from '../functions/BookUpdate';
import customStyles from '../Package/Modal/customStyles';

const axios = require('axios')

export default function BookModalComponent(props) {

    const { data } = useContext(DataContext)
    const { tema } = useContext(DarkModeContext)
    const { idCooked } = useContext(AuthContext)

    //modal
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const customStylesM = customStyles(tema).customStyles

    const [title, setTitle] = useState()
    const [cover, setCover] = useState()
    const [writer, setWriter] = useState()
    const [file, setFile] = useState()


    const getTitle = () => setTitle(event.target.value)
    const getCover = () => {
        setCover(URL.createObjectURL(event.target.files[0]))
        let formData = new FormData()
        formData.append('cover', event.target.files[0])
        setFile(formData)
    }
    const getWriter = () => {
        setWriter(event.target.value)
    }

    const color = props.value == 'Update' ? 'bg-mainColor dark:bg-mainDark' : 'bg-deleteColor dark:bg-deleteDark'

    return (
        <div>
            <button onClick={openModal} className={`py-[2px] mx-1 px-2 rounded-full font-normal text-base ${color}`}>{props.value}</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStylesM}
                contentLabel="Example Modal">
                
                {props.value == 'Update' ? (
                    <div className={`mx-5 ${tema}`}>

                        <div className={`w-full flex flex-row pb-5 dark:text-white`}>
                            <div className="w-full">ATUALIZAR LIVRO</div>
                            <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
                        </div>
                        <form>
                            <div className={`flex flex-row `}>
                                <div className={`flex flex-col mr-5 dark:text-white`}>

                                    <label>Titulo</label>
                                    <input type="text" defaultValue={props.infos.title} onChange={getTitle} className={`flex bg-mainColor dark:bg-mainDark rounded-md w-72 h-10 pl-2 mb-10 `} />

                                     <label>Autor</label>                   
                                    <select type="text" onChange={()=>getWriter()} className={`flex bg-mainColor dark:bg-mainDark rounded-md w-72 h-10 pl-2`}>
                                    {data.map(key => (
                                        <option value={key.writer_id} key={key} selected={key.writer_id == props.infos.writer_id ? true : false}>{key.escritor}</option>
                                    ))}
                                    </select>
                                    
                                </div>

                                <div className={`bg-mainColor dark:bg-mainDark text-white rounded-md p-2 pb-4`}>

                                    <input type="file" placeholder='capa' onChange={() => getCover()} className={`file:text-amber-300 dark:file:text-blueDark file:bg-white file:border-none rounded-full file:px-2 file:font-semibold border-2 border-white m-2 pr-1`} />
                                    
                                    <img alt="" src={cover == undefined ? 'http://localhost:3001/' + props.infos.url : cover} className={`h-48 w-32 rounded-2xl mx-auto`} />

                                </div>
                            </div>
                            
                            <button className={`dark:text-white`} onClick={() => BookUpdate(idCooked, props.infos.writer_id, writer, props.infos.id, props.infos.title, title, file, props.infos.name, props.infos.url)}>Atualize um livro</button>
                        </form>
                    </div>

                ) : (
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
                }
            </Modal>
        </div>
  );
}