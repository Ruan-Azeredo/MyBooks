import Image from "next/image"
import limitText from "../functions/limitText"
import TrataBook from "../functions/TrataBook"
import ReviewModalComponent from "./ReviewModalComponent"

export default function ReviewsComponentIndex(props) {
    const resp = props.resp

    const transformDate = (resp) => {
        const dia = resp.createdAt[8] + resp.createdAt[9]
        const mes = resp.createdAt[5] + resp.createdAt[6]
        const ano = resp.createdAt[2] + resp.createdAt[3]
        return dia + '/' + mes + '/' + ano
    }

    const secondPartUrl = TrataBook(resp.book_id)

    console.log('resp in inside Reviews',resp)

    return (
        <div>
            <div className={`bg-mainColor dark:bg-mainDark h-32 w-96 mb-6 relative rounded-3xl`}>
                <img alt="" layout="fill" className={`h-[180px] w-[120px] rounded-3xl absolute -top-16 left-4`} src={'http://localhost:3001/' + secondPartUrl}/>
                <div className={`left-[150px] relative pt-2`}>{transformDate(resp)}</div>
                <div className={`left-[150px] relative pt-1 w-56 text-sm`}>{limitText(resp.text, 120)}</div>
            </div>
                {props.index == false ? (
                <div className="mb-5 flex justify-center">
                    <ReviewModalComponent value='Read' infos={resp} url={secondPartUrl} />
                        <ReviewModalComponent value='Update' infos={resp} url={secondPartUrl}/>
                        <ReviewModalComponent value='Delete' infos={resp} url={secondPartUrl}/>
                    </div>
                ) : null}
        </div>
    )
}