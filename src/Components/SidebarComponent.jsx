import OptionsComponent from "./OptionsComponent";

export default function SidebarComponent() {
    return (
        <div className={`w-full flex col-start-1 col-end-2 fixed left-8 top-[310px]`}>
            <div className={`
                w-40 h-80 rounded-3xl
                bg-gradient-to-br from-neutral-200 via-neutral-50 to-neutral-50 sombra
                
            `}>
                <OptionsComponent value='+ Autor'></OptionsComponent>
                <OptionsComponent value='+ Livro'></OptionsComponent>
                <OptionsComponent value='Resenhas & Autores'></OptionsComponent>
                <OptionsComponent value='Logout'></OptionsComponent>
            </div>
        </div>
    )
}