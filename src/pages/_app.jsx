import { AutenticaçãoProvider } from "../Context/AutenticaçãoContext"
import { BooksProvider } from "../Context/BooksContext"
import { DarkModeProvider } from "../Context/DarkModeContext"
import { WritersProvider } from "../Context/WritersContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AutenticaçãoProvider>
      <WritersProvider>
        <BooksProvider>
          <DarkModeProvider>
            <Component {...pageProps} />
          </DarkModeProvider>
        </BooksProvider>
      </WritersProvider>
    </AutenticaçãoProvider>
  )
}

export default MyApp
