import WriterModalComponent from "./WriterModalComponent";

export default function EditWritersComponent(props) {
    
    return (
        <div className="bg-gradient-to-br from-neutral-200 via-neutral-50 to-neutral-50
        dark:bg-gradient-to-br dark:from-neutral-700 dark:via-neutral-700 dark:to-neutral-700
        sombra rounded-3xl my-5 mr-5 p-3 flex flex-col justify-between h-28">
            <div className="mx-2 text-lg leading-6">{props.resp.name}</div>
            <div className="flex justify-between">
                <WriterModalComponent value='Update' />
                <WriterModalComponent value='Delete'/>
            </div>
        </div>
    )
}