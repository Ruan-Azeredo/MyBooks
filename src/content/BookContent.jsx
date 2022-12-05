export default function BookContent(props) {
    return (
        <div className={`w-full flex col-start-2 col-end-6 z-[0]`}>
            <div className={`w-full text-xl font-bold`}>Livros
            <div className={`
                grid grid-cols-4 w-full mt-4 font-medium
            `}>
                {props.children}
            </div>
            </div>
        </div>
    )
}