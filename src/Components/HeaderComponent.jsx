import ButtonDarkModeComponent from "./ButtonDarkModeComponent";

export default function HeaderComponent() {
    return (
        <div className={`py-2 col-start-1 col-end-7 flex bg-brancoTransparencia backdrop-blur-sm z-30 fixed top-0`}>
            <div className={`ml-[200px]`}>
                <div className={`ml-2 font-semibold`}>MyBooks.com</div>
                <div className={`ml-[4px] h-1 w-[110px] -top-[6px] -z-30 relative bg-yellow-300 dark:bg-blue-600`}></div>
            </div>
            <div className={`flex-row flex justify-end ml-[750px]`}>
                <div className={`font-semibold hover:text-yellow-400`}>Perfil</div>
                <ButtonDarkModeComponent/>
            </div>
        </div>
    )
}