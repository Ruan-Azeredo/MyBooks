import TrataBook from "../functions/TrataBook"

export default function ReviewsComponentIndex(props) {
    const resp = props.resp
    return (
        <div className={`bg-mainColor h-32 w-96 mr-16 relative rounded-3xl`}>
            <img className={`h-[180px] w-[120px] rounded-3xl absolute -top-16 left-4`} src={TrataBook(resp.book_id)} />
            <div className={`left-36 relative`}>{ resp.createdAt }</div>
            <div className={``}>{ resp.text }</div>
        </div>
    )
}