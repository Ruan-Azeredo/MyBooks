import { useContext, useState } from "react";
import Modal from "react-modal";
import DarkModeContext from "../Context/DarkModeContext";
import DataContext from "../Context/DataContext";
import customStyles from '../Package/Modal/customStyles';

export default function SidebarComponent() {
    const { data } = useContext(DataContext)
    const {tema} = useContext(DarkModeContext)

    const [title, setTitle] = useState()
    const [cover, setCover] = useState()
    const [writer, setWriter] = useState()
    const [autor, setAutor] = useState()

    //modal
    const [modalIsOpen, setIsOpen] = useState(false)
    const [define, setDefine] = useState()
    const openModal = () => {
        setDefine(event.target.value)
        setIsOpen(true)
    }
    const closeModal = () => setIsOpen(false)
    const customStylesM = customStyles(tema).customStyles
    console.log('customStyles:',customStylesM)

    const getTitle = () => setTitle(event.target.value)
    const getCover = () => {
        setCover(URL.createObjectURL(event.target.files[0]))
    }
    const getWriter = () => {
        setWriter(event.target.value)
    }
    const getAutor = () => setAutor(event.target.value)
    
    return (
        <div className={`w-full flex col-start-1 col-end-2 fixed left-8 top-[310px]`}>
            <div className={`
                w-40 h-80 rounded-3xl grid
                bg-gradient-to-br from-neutral-200 via-neutral-50 to-neutral-50
                dark:bg-gradient-to-br dark:from-neutral-700 dark:via-neutral-700 dark:to-neutral-700
                sombra
                font-semibold flex-col text-center justify-items-center py-4
                
            `}>
                <button className="w-16 hover:text-yellow-400 dark:hover:text-blueDark" onClick={openModal} value='Autor'>+ Autor</button>
                <button className="w-16 hover:text-yellow-400 dark:hover:text-blueDark" onClick={openModal} value='Livro'>+ Livro</button>
                <button className="w-16 hover:text-yellow-400 dark:hover:text-blueDark">Resenhas & Autores</button>
                <button className="w-16 hover:text-yellow-400 dark:hover:text-blueDark">Logout</button>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStylesM}>
                {define == 'Autor' ? (
                    <div className={`mx-5 ${tema}`}>
                        <div className={`w-full flex flex-row pb-5 dark:text-white`}>
                            <div className="w-full">ADICIONAR AUTOR</div>
                            <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
                        </div>
                        <form>
                            <div className={`mr-5 dark:text-white`}>
                                    <label>Autor</label>
                                    <input type="text" onChange={getAutor} required className={`flex bg-mainColor dark:bg-mainDark rounded-md w-72 h-10 pl-2 mb-10 `} />
                            </div>
                            <button className={`dark:text-white`}>Criar novo Autor</button>
                        </form>
                    </div>
                ): (
                    <div className={`mx-5 ${tema}`}>
                        <div className={`w-full flex flex-row pb-5 dark:text-white`}>
                            <div className="w-full ">ADICIONAR LIVRO</div>
                            <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
                        </div>
                        <form>
                            <div className={`flex flex-row`}>
                                <div className={`flex flex-col mr-5 dark:text-white`}>

                                    <label>Titulo</label>
                                    <input type="text" onChange={getTitle} required className={`flex bg-mainColor dark:bg-mainDark  rounded-md w-72 h-10 pl-2 mb-10 `} />

                                    <label>Autor</label>                   
                                    <select name="select" required onChange={() => getWriter()} className={`flex bg-mainColor dark:bg-mainDark rounded-md w-72 h-10 pl-2`}>
                                        <option data-default disabled selected className=""></option>
                                        {data.map(key => (
                                            <option value={key.writer_id} key={key}>{key.escritor}</option>
                                        ))}
                                    </select>
                    
                                </div>

                                <div className={`bg-mainColor dark:bg-mainDark text-white rounded-md p-2 pb-4`}>

                                    <input type="file" required onChange={() => getCover()} className={`file:text-amber-300 dark:file:text-blueDark file:bg-white file:border-none rounded-full file:px-2 file:font-semibold border-2 border-white m-2 pr-1`} />
                                    
                                    {cover ? (
                                        <img alt="" src={cover} className={`h-48 w-32 rounded-2xl mx-auto`} />
                                    ): (
                                        <div className={`h-48 w-32 rounded-2xl mx-auto`}></div> 
                                    )}

                                </div>
                            </div>
                            <button className={`dark:text-white`}>Criar novo Livro</button>
                        </form>
                    </div>
                )}
            </Modal>
        </div>
    )
}