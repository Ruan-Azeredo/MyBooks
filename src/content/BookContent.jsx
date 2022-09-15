export default function (props) {
    return (
        <div className={`w-full flex col-start-2 col-end-6`}>
            <div className={`
                grid grid-cols-4 w-full
            `}>
                {props.children}
            </div>
        </div>
    )
}