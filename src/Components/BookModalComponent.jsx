import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal';
import BookDelete from '../functions/BookDelete';
import BookUpdate from '../functions/BookUpdate';
import { customStyles } from '../Package/Modal/customStyles';

export default function BookModalComponent(props) {

    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [title, setTitle] = useState()
    const [cover, setCover] = useState()

    const [string, setString] = useState()

    const getTitle = () => setTitle(event.target.value)
    const getCover = () => {
        setCover(URL.createObjectURL(event.target.files[0]))
        console.log('cover:',cover)
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
        <div className=''>
            <button onClick={openModal} className={`py-[2px] mx-1 px-2 rounded-full font-normal text-base bg-${props.color}`}>{props.value}</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                
                {props.value == 'Update' ? (
                    <div className={`mx-5`}>
                        <div className={`w-full flex flex-row pb-5`}>
                            <div>UPDATE</div>
                            <button onClick={closeModal} className={`flex justify-end w-full`}>[x]</button>
                        </div>
                        <form>
                            <div className={`flex flex-row`}>
                                <div className={`flex flex-col mr-5`}>
                                    <label>Titulo</label>
                                    <input type="text" placeholder='Titulo' defaultValue={props.infos?.title} onChange={getTitle} className={`flex bg-mainColor rounded-md w-72 h-10 pl-2 mb-10 `} />
                                     <label>Autor</label>                   
                                    <input type="text" placeholder='Autor' className={`flex bg-mainColor rounded-md w-72 h-10 pl-2`}/>
                                </div>
                                <div className={`bg-mainColor rounded-md p-2 pb-4`}>
                                    <input type="file" placeholder='capa' onChange={()=>getCover()} className={`file:text-amber-300 file:bg-white file:border-none rounded-full file:px-2 file:font-semibold border-2 border-white m-2 pr-1`} />
                                    <img alt="variavel" layout='fill' src={variavel} className={`h-48 w-32 rounded-2xl mx-auto`} />
                                </div>
                            </div>
                            <button onClick={() => BookUpdate(props.infos.id, title, cover)}>Atualize um livro</button>
                        </form>
                                <button onClick={()=>displayString()}>
                                    Display String
                                </button>
                    </div>

                ) : (
                    <>
                        <h2>Hello</h2>
                        <button onClick={closeModal}>close</button>
                        <div>DELETE</div>
                        <form>
                            <button onClick={() => BookDelete(props.infos.id)}>Apague um livro</button>
                        </form>
                    </>
                )
                }
            </Modal>
        </div>
  );
}