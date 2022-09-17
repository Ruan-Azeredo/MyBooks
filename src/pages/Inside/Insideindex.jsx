import axios from "axios"
import Router from "next/router"
import { useContext, useEffect, useState } from "react"
import BookComponent from "../../components/BookComponent"
import ReviewsComponentIndex from "../../components/ReviewComponentIndex"
import SeeMoreComponent from "../../components/SeeMoreComponent"
import SidebarComponent from "../../components/SidebarComponent"
import UserComponent from "../../components/UserComponent"
import BookContent from "../../content/BookContent"
import ReviewContentIndex from "../../content/ReviewContentIndex"
import AuthContext from "../../Context/AutenticaçãoContext"
import BooksContext from "../../Context/BooksContext"
import WritersContext from "../../Context/WritersContext"

export default function Insideindex() {

    // const { iduserglobal, photoglobal } = useContext(AuthContext)
    const iduserglobal = 2
    const { setWritersglobal } = useContext(WritersContext)
    const { booksglobal, setBooksglobal } = useContext(BooksContext)

    const [books, setBooks] = useState()
    const [writers, setWriters] = useState()
    const [reviews, setReviews] = useState()


    useEffect(() => {
        if (iduserglobal == null) {
            Router.replace('/')
        } else {
            axios.get(`http://localhost:3001/users/books/${iduserglobal}`)
            .then((result) => setBooksglobal(result.data))
            
            axios.get(`http://localhost:3001/users/writers/${iduserglobal}`)
            .then((result) => setWritersglobal(result.data))
            
            axios.get(`http://localhost:3001/users/reviews/${iduserglobal}`)
            .then((result) => setReviews(result.data))
        }
    }, [])

    const renderizaReview = (resp) => {
        if(resp.id <= 2){
            return (
                <div key={resp.id} className={``}>
                    <ReviewsComponentIndex resp={resp} />
                </div>
            )
        }
    }

    return (
        <div className={`grid grid-cols-6`}>
            <div>Ola usuario de id {iduserglobal}</div>
            <UserComponent />
            <ReviewContentIndex>
                {reviews?.map(resp => (
                    renderizaReview(resp)
                ))}
                <SeeMoreComponent/>
            </ReviewContentIndex>
            <SidebarComponent />
            <BookContent>
                {booksglobal?.map(resp => (
                    <div key={resp.id}>    
                        <BookComponent resp={resp} />
                    </div>
                ))}
            </BookContent>
        </div>
    )
    
}