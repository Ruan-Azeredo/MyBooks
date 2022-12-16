import SeeMoreComponent from "../components/SeeMoreComponent";

export default function ReviewContentIndex(props) {
    const col = props.index != true ? '6' : '7'
    return (
        <div className={`flex flex-col mt-20  z-[0] col-start-2 col-end-${col}`}>
            {props.index != true ? (
                <div className={`mb-20 text-xl font-bold`}>Resenhas</div>
            ) : null}
            <div className="flex flex-row">
                <div className="grid grid-cols-2 gap-16 pt-10">           
                    {props.children}
                </div>{
                    props.index == true ? (
                        <SeeMoreComponent/>
                    ) : null
                }
            </div>
        </div>
    )
}