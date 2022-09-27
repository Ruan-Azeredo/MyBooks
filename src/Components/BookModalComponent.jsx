import { useState } from 'react';
import Modal from 'react-modal';
import BookUpdate from '../functions/BookUpdate';
import { customStyles } from '../Package/Modal/customStyles';

export default function BookModalComponent(props) {

    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [title, setTitle] = useState()
    const [cover, setCover] = useState()

    const getTitle = () => setTitle(event.target.value)
    const getCover = () => {
        setCover(URL.createObjectURL(event.target.files[0]))
        console.log(cover)
    }
    const variavel = cover
    return (
        <div className=''>
            <button onClick={openModal} className={`py-[2px] mx-1 px-2 rounded-full font-normal text-base bg-${props.color}`}>{props.value}</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input type="text" placeholder='Titulo' defaultValue={props.infos?.title} onChange={getTitle}/>
                    <input type="file" placeholder='capa' onChange={getCover} />
                    <img src={variavel} className={`h-40`} />
                    <button onClick={() => BookUpdate(props.infos.id, title, cover)}>Atualize um livro</button>
                </form>
            </Modal>
        </div>
  );
}