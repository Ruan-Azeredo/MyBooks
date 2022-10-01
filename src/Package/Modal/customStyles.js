export default function customStyles(tema) {

    let cor = null
    if (tema == 'light') {
        cor = '#ffffff'
    } else {
        cor = '#464646'
    }
    
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: cor
        },
    };

    return { customStyles }
}