import Image from 'next/image';
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import DataContext from '../Context/DataContext';
import BookDelete from '../functions/BookDelete';
import BookUpdate from '../functions/BookUpdate';
import { customStyles } from '../Package/Modal/customStyles';

export default function BookModalComponent(props) {

    const {data} = useContext(DataContext)

    //modal
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [title, setTitle] = useState()
    const [cover, setCover] = useState()
    const [writer, setWriter] = useState()


    const getTitle = () => setTitle(event.target.value)
    const getCover = () => {
        setCover(URL.createObjectURL(event.target.files[0]))
    }
    const getWriter = () => {
        setWriter(event.target.value)
    }
    const chamaUpdate = (id, title, writer, cover, createdAt) => {
        const t = title
        const w = writer
        const c = cover

        if (title == null) {
            t = props.infos.title
        }
        if (writer == null) {
            w = props.infos.writer_id
        }
        if (cover == null) {
            c = props.infos.cover
        }
        BookUpdate(id, t, w, c, createdAt)
    }




    // let base64String = "";
  
    // function imageUploaded() {
    //     var file = document.querySelector(
    //         'input[type=file]')['files'][0];
    
    //     var reader = new FileReader();
    //     console.log("next");
        
    //     reader.onload = function () {
    //         base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    
    //         const imageBase64Stringsep = base64String;
    
    //         alert(imageBase64Stringsep);
    //         console.log(base64String);
    //         setString(btoa)
    //     }
    //     reader.readAsDataURL(file);
    //     console.log('string:',string)
    // }
    
    
    // function stringConversor() {
    //     console.log('string:',atob(string))
    // }
    
    // function displayString() {
    //     console.log("Base64String about to be printed");
    //     alert(base64String);
    //     console.log('string:',string)
    // }

    const variavel = cover
    
    return (
        <div>
            <button onClick={openModal} className={`py-[2px] mx-1 px-2 rounded-full font-normal text-base bg-${props.color}`}>{props.value}</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                
                {props.value == 'Update' ? (
                    <div className={`mx-5`}>

                        <div className={`w-full flex flex-row pb-5`}>
                            <div className="w-full">ATUALIZAR LIVRO</div>
                            <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
                        </div>
                        <form>
                            <div className={`flex flex-row`}>
                                <div className={`flex flex-col mr-5`}>

                                    <label>Titulo</label>
                                    <input type="text" placeholder='Titulo' defaultValue={props.infos.title} onChange={getTitle} className={`flex bg-mainColor rounded-md w-72 h-10 pl-2 mb-10 `} />

                                     <label>Autor</label>                   
                                    <select type="text" placeholder='Autor' onChange={()=>getWriter()} className={`flex bg-mainColor rounded-md w-72 h-10 pl-2`}>
                                    {data.map(key => (
                                        <option value={key.writer_id} key={key} selected={key.writer_id == props.infos.writer_id ? true : false}>{key.escritor}</option>
                                    ))}
                                    </select>
                                    
                                </div>

                                <div className={`bg-mainColor rounded-md p-2 pb-4`}>

                                    <input type="file" placeholder='capa' onChange={() => getCover()} className={`file:text-amber-300 file:bg-white file:border-none rounded-full file:px-2 file:font-semibold border-2 border-white m-2 pr-1`} />
                                    
                                    <img alt="" src={variavel == undefined ? props.infos.cover : variavel} className={`h-48 w-32 rounded-2xl mx-auto`} />

                                </div>
                            </div>
                            <button onClick={() => chamaUpdate(props.infos.id, title, writer, cover, props.infos.createdAt)}>Atualize um livro</button>
                        </form>
                                {/* <button onClick={()=>displayString()}>
                                    Display String
                                </button> */}
                    </div>

                ) : (
                    <div className={`mx-5`}>
                    <div className={`w-full flex flex-row pb-5`}>
                        <div className="w-full">DELETAR LIVRO</div>
                        <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
                    </div>
                    <form>
                        <div className={` mr-5`}>
                                <div type="text" className={`flex text-xl bg-mainColor dark:bg-mainDark w-80 rounded-xl p-5 mb-10 `}>Tem certeza que deseja deletar este livro?</div>
                        </div>
                        <button onClick={() => BookDelete(props.infos.id)}>Apagar o livro</button>
                    </form>
                </div>
                )
                }
            </Modal>
        </div>
  );
}