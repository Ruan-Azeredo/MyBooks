import { useContext } from "react";
import AuthContext from "../Context/AutenticaçãoContext";
import ButtonDarkModeComponent from "./ButtonDarkModeComponent";

export default function HeaderComponent() {
    const { photoCooked, nameCooked } = useContext(AuthContext)

    return (
        <div className={`py-2 col-start-1 col-end-7 flex bg-brancoTransparencia dark:bg-cinzaTransparencia backdrop-blur-sm z-30 fixed w-full h-12 top-0`}>
            <div className={`ml-[200px]`}>
                <div className={`ml-2 font-semibold`}>MyBooks.com</div>
                <div className={`ml-[4px] h-1 w-[110px] -top-[6px] -z-30 relative bg-yellow-300 dark:bg-blueDark`}></div>
            </div>
            <div className={`flex-row flex justify-end ml-[600px]`}>
                <div className={`font-semibold justify-center mx-28 hover:mx-[10.5px] grid justify-items-center felx-col hover:text-yellow-400 dark:hover:text-blueDark group`}>Perfil
                    <div className={`bg-mainColor h-5 w-5 relative rotate-45 mx-auto mt-1 hidden group-hover:flex`}></div>
                    <div className={`bg-mainColor h-32 w-60 rounded-xl relative -top-3 hidden group-hover:flex`}>
                        {/* <img src={photoCooked} referrerPolicy="no-referrer" alt="" className={`h-10 w-10 rounded-xl relative top-4 left-6`} /> */}
                        {/* <div className="relative left-10 top-3 w-36 text-white">{nameCooked}</div> */}
                    </div>
                </div>
                <ButtonDarkModeComponent/>
            </div>
        </div>
    )
}