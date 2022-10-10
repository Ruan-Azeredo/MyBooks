import SeeMoreComponent from "../components/SeeMoreComponent";

export default function ReviewContentIndex(props) {
    return (
        <div className="flex flex-row mt-28 col-start-2 col-end-7">
            <div className="grid grid-cols-2 gap-16">           
                {props.children}
            </div>{
                props.index == true ? (
                    <SeeMoreComponent/>
                ) : null
            }
        </div>
    )
}