export default function EditWritersContent(props) {
    return (
        <div className="col-start-6 col-end-7 relative mt-20">
            <h2 className="text-xl font-bold mb-10">Autores</h2>
            {props.children}
        </div>
    )
}