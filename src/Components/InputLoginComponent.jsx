export default function InputLoginComponent(props) {
    return (
        <input type={props.type} onChange={props.onChange} className={`px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none`}/>
    )
}