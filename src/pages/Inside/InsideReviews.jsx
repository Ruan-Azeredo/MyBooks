import axios from "axios"
import { useContext, useEffect, useState } from "react"
import HeaderComponent from "../../components/HeaderComponent"
import ReviewsComponentIndex from "../../components/ReviewComponentIndex"
import SidebarComponent from "../../components/SidebarComponent"
import UserComponent from "../../components/UserComponent"
import ReviewContentIndex from "../../content/ReviewContentIndex"
import AuthContext from "../../Context/AutenticaçãoContext"
import DarkModeContext from "../../Context/DarkModeContext"
import WritersContext from "../../Context/WritersContext"

export default function InsideReviews() {
    const { idCooked } = useContext(AuthContext)
    const tema = useContext(DarkModeContext)

    const { setWritersglobal } = useContext(WritersContext)
    const [reviews, setReviews] = useState()

    useEffect(() => {
        if (idCooked == null) {
            Router.replace('/')
        } else {            
            axios.get(`http://localhost:3001/users/writers/${idCooked}`)
            .then((result) => setWritersglobal(result.data))
            
            axios.get(`http://localhost:3001/users/reviews/${idCooked}`)
            .then((result) => setReviews(result.data))
        }
    })

    return (
        <div className={`${tema}`}>
            <div className={`grid grid-cols-6 bg-white dark:bg-[#464646] text-[#464646] dark:text-white`}>
                <HeaderComponent />
                <UserComponent />
                <SidebarComponent />
                <ReviewContentIndex>
                    {reviews?.map(resp => (
                        <div key={resp.id} className={``}>
                        <ReviewsComponentIndex resp={resp} />
                    </div>
                    ))}
                </ReviewContentIndex>
            </div>
        </div>
    )
}