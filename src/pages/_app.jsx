import { AutenticaçãoProvider } from "../Context/AutenticaçãoContext"
import { BooksProvider } from "../Context/BooksContext"
import { WritersProvider } from "../Context/WritersContext"
import "../styles/globals.css"


function MyApp({ Component, pageProps }) {
  return (
    <AutenticaçãoProvider>
      <WritersProvider>
        <BooksProvider>
          <Component {...pageProps} />
        </BooksProvider>
      </WritersProvider>
    </AutenticaçãoProvider>
  )
}

export default MyApp
