import limitText from '../functions/limitText'
import TrataWriter from '../functions/TrataWriter'

export default function BookComponent(props) {
    const resp = props.resp

    return (
        <div className={`mb-4`}>
            <div className={`absolute pt-24 px-8 -z-20`}>+ Resenha</div>
            <button>
                <img className={`h-60 w-40 rounded-3xl mb-4 hover:opacity-20 z-30`} src={resp.cover}/>
            </button>
            <div className={`h-[90px]`}>
                <div className={`font-semibold text-base w-[180px] mb-2`}>{limitText(resp.title, 40)}</div>
                <div className={`text-xs mb-4`}>{TrataWriter(resp.writer_id)}</div>
            </div>
            <div className={`flex flex-row justify-center content-center w-40`}>
                <button className={`py-[2px] px-2 mx-1 rounded-full font-normal text-base bg-mainColor`}>Update</button>
                <button className={`py-[2px] px-2 mx-1 rounded-full font-normal text-base bg-deleteColor`}>Delete</button>
            </div>
        </div>
    )
}