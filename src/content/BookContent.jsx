export default function (props) {
    return (
        <div className={`w-full flex`}>
            <div className={`
                grid grid-cols-4 gap-4 w-4/6 m-auto
            `}>
                {props.children}
            </div>
        </div>
    )
}