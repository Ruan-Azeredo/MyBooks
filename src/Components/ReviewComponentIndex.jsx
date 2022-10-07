import Image from "next/image"
import limitText from "../functions/limitText"
import TrataBook from "../functions/TrataBook"

export default function ReviewsComponentIndex(props) {
    const resp = props.resp

    const transformDate = (resp) => {
        const dia = resp.createdAt[8] + resp.createdAt[9]
        const mes = resp.createdAt[5] + resp.createdAt[6]
        const ano = resp.createdAt[2] + resp.createdAt[3]
        return dia + '/' + mes + '/' + ano
    }

    return (
        <div className={`bg-mainColor dark:bg-mainDark h-32 w-96 mr-16 relative rounded-3xl`}>
            <img alt="" layout="fill" className={`h-[180px] w-[120px] rounded-3xl absolute -top-16 left-4`} src={'http://localhost:3001/' + TrataBook(resp.book_id)}/>
            <div className={`left-[150px] relative pt-2`}>{transformDate(resp)}</div>
            <div className={`left-[150px] relative pt-2 w-56`}>{limitText(resp.text, 80)}</div>
        </div>
    )
}