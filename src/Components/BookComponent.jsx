import { useContext } from 'react'
import WritersContext from '../Context/WritersContext'
import limitText from '../functions/limitText'
import TrataWriter from '../functions/TrataWriter'
import BookModalComponent from './BookModalComponent'
import { IconPencil } from './icons'

export default function BookComponent(props) {

    const { writersglobal } = useContext(WritersContext)
    const resp = props.resp
    const escritorTratado = TrataWriter(resp.writer_id, writersglobal)

    const infos = { id: resp.id, title: resp.title, name: resp.name, url: resp.url, writer: escritorTratado, writer_id: resp.writer_id, createdAt: resp.createdAt }

    return (
        <div className={`mb-8`}>
            <button>
                <div className='absolute -mt-3 ml-28 rounded-md bg-anilDark pt-4 pb-2 px-1 text-white pointer'>
                    <div className={`-rotate-12`}>{IconPencil}</div>
                </div>
                <img alt='' layout='fill' className={`h-60 w-40 rounded-3xl mb-4`} src={'http://localhost:3001/' + resp.url}/>
            </button>
            <div className={`h-[90px]`}>
                <div className={`font-semibold text-base w-[180px] mb-2`}>{limitText(resp.title, 40)}</div>
                <div className={`text-xs mb-4`}>{escritorTratado}</div>
            </div>
            <div className={`flex flex-row justify-center content-center w-40`}>
                <BookModalComponent value='Update' infos={infos} />
                <BookModalComponent value='Delete' infos={infos} />
            </div>
        </div>
    )
}