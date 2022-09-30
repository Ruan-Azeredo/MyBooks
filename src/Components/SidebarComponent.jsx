import OptionsComponent from "./OptionsComponent";

export default function SidebarComponent() {
    return (
        <div className={`w-full flex col-start-1 col-end-2 fixed left-8 top-[310px]`}>
            <div className={`
                w-40 h-80 rounded-3xl grid
                bg-gradient-to-br from-neutral-200 via-neutral-50 to-neutral-50 sombra
                font-semibold flex-col text-center justify-items-center py-4
                
            `}>
                <button className="w-16 hover:text-yellow-400">+ Autor</button>
                <button className="w-16 hover:text-yellow-400">+ Livro</button>
                <button className="w-16 hover:text-yellow-400">Resenhas & Autores</button>
                <button className="w-16 hover:text-yellow-400">Logout</button>
            </div>
        </div>
    )
}