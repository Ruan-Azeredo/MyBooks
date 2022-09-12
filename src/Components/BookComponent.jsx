import TrataWriter from '../functions/TrataWriter'

export default function BookComponent(props) {
    const resp = props.resp
    return (
        <div>
            <img src={resp.cover} />
            <div>{resp.title}</div>
            <div>{TrataWriter(resp.writer_id)}</div>
            <button>Update</button>
            <button>Delete</button>
        </div>
    )
}