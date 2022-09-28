import limitText from '../functions/limitText'
import TrataWriter from '../functions/TrataWriter'
import BookModalComponent from './BookModalComponent'

export default function BookComponent(props) {
    const resp = props.resp

    const infos = {id: resp.id, title: resp.title, cover: resp.cover}

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
                <BookModalComponent value='Update' color='mainColor' infos={infos} />
                <BookModalComponent value='Delete' color='deleteColor' infos={infos} />
            </div>
        </div>
    )
}