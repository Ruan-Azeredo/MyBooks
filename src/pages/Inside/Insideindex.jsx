import axios from "axios"
import Router from "next/router"
import { useContext, useEffect, useState } from "react"
import BookComponent from "../../components/BookComponent"
import HeaderComponent from "../../components/HeaderComponent"
import ReviewsComponentIndex from "../../components/ReviewComponentIndex"
import SeeMoreComponent from "../../components/SeeMoreComponent"
import SidebarComponent from "../../components/SidebarComponent"
import UserComponent from "../../components/UserComponent"
import WritersIndexComponent from "../../components/WritersIndexComponent"
import BookContent from "../../content/BookContent"
import ReviewContentIndex from "../../content/ReviewContentIndex"
import AuthContext from "../../Context/AutenticaçãoContext"
import BooksContext from "../../Context/BooksContext"
import DarkModeContext from "../../Context/DarkModeContext"
import WritersContext from "../../Context/WritersContext"
import ordenaAdicionadosRecentes from "../../functions/OrdenaAdicionadosRecentes"

export default function Insideindex() {

    const { idCooked } = useContext(AuthContext)
    const { setWritersglobal } = useContext(WritersContext)
    const { booksglobal, setBooksglobal } = useContext(BooksContext)

    const {tema} = useContext(DarkModeContext)

    const [reviews, setReviews] = useState()


    useEffect(() => {
        if (idCooked == null) {
            Router.replace('/')
        } else {
            axios.get(`http://localhost:3001/users/books/${idCooked}`)
            .then((result) => setBooksglobal(result.data))
            
            axios.get(`http://localhost:3001/users/writers/${idCooked}`)
            .then((result) => setWritersglobal(result.data))
            
            axios.get(`http://localhost:3001/users/reviews/${idCooked}`)
            .then((result) => setReviews(result.data))
        }
    }, [setBooksglobal, setWritersglobal])

    const arrayBooks = booksglobal
    ordenaAdicionadosRecentes(arrayBooks)
    
    const renderizaReview = (resp, index) => {
        if(index <= 1){
            return (
                <div key={resp.id} className={``}>
                    <ReviewsComponentIndex resp={resp} index={true}/>
                </div>
            )
        }
    }

    return (
        <div className={`${tema}`}>

            <div className={`grid grid-cols-6 bg-white dark:bg-[#464646] text-[#464646] dark:text-white`}>
                <HeaderComponent/>
                <UserComponent />
                <ReviewContentIndex index={true}>
                    {reviews?.map((resp, index) => (
                        renderizaReview(resp, index)
                    ))}
                </ReviewContentIndex>
                <SidebarComponent />
                <BookContent>
                    {arrayBooks?.map(resp => (
                        <div key={resp.id}>    
                            <BookComponent resp={resp} />
                        </div>
                    ))}
                </BookContent>
                <WritersIndexComponent/>
            </div>
        </div>
    )
    
}