//Tratamento de dados: pega o writer_id que vem de books, e o compara com os ids dos escritores para pegar o nome referente a eles, assim, passamos os ids dos escritores e retornamos os nomes do sescritores.
const TrataWriter = (writer_id, writers, y = 0, respss = null) => {
    
    if (writers[y].id == writer_id) {
        respss = writers[y].name
        console.log('resp:', respss)
        return respss
    }
    
    if (writers[y+1] != null) {
        y = y +1
        return TrataWriter(writer_id, writers, y, respss)
    }
}

export default TrataWriter