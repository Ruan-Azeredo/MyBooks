export default function SeeMoreComponent() {
    return (
        <div>
            <div className={`bg-amber-100 h-32 w-56 relative rounded-l-3xl`}>
                <div className={`
                h-[180px] w-[120px] rounded-3xl absolute -top-16 left-4 bg-amber-100
                `}></div>
                <div className={`pt-28 pl-8 absolute -top-16 left-7 font-bold text-xl`}>+ Resenhas</div>
            </div>

        </div>
    )
}