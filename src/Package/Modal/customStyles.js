export default function customStyles(tema) {

    let cor = null
    let backg = null
    if (tema == 'light') {
        cor = '#ffffff'
        backg = 'rgb(255, 255, 255, 0.8)'
    } else {
        cor = '#464646'
        backg = 'rgb(70, 70, 70, 0.8)'
    }
    
    const customStyles = {
        overlay: {
            background: backg
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '4px',
            backgroundColor: cor,
        },
    };

    return { customStyles }
}