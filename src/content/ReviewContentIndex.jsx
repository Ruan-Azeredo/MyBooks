import SeeMoreComponent from "../components/SeeMoreComponent";

export default function ReviewContentIndex(props) {
    return (
        <div className="flex flex-col mt-20 col-start-2 col-end-7">
            {props.index != true ? (
                <div className={`mb-24 text-xl font-bold`}>Resenhas</div>
            ) : null}
            <div className="flex flex-row">
                <div className="grid grid-cols-2 gap-16">           
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