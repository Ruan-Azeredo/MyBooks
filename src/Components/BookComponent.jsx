import TrataWriter from '../functions/TrataWriter'

export default function BookComponent(props) {
    const resp = props.resp
    return (
        <div className={`oi`}>
            <img className={`h-60 w-40 rounded-3xl mb-4`} src={resp.cover} />
            <div className={`font-semibold text-base w-[180px] mb-2`}>{resp.title}</div>
            <div className={`text-xs mb-4`}>{TrataWriter(resp.writer_id)}</div>
            <div className={`flex flex-row justify-center content-center w-40`}>
                <button className={`py-[2px] px-2 mx-1 rounded-full bg-mainColor`}>Update</button>
                <button className={`py-[2px] px-2 mx-1 rounded-full bg-deleteColor`}>Delete</button>
            </div>
        </div>
    )
}