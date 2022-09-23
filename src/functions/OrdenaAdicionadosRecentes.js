export default function ordenaAdicionadosRecentes(arrayBooks){
    let k = 0
    arrayBooks?.map(key => {
        if (arrayBooks[k + 1] != undefined) {
            if (key.createdAt < arrayBooks[k + 1].createdAt) {
                const listAux = arrayBooks[k]
                arrayBooks[k] = arrayBooks[k + 1]
                arrayBooks[k + 1] = listAux
                ordenaAdicionadosRecentes(arrayBooks)
            }
        }
        k++
    })
}