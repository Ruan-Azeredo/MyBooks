import { AutenticaçãoProvider } from "../Context/AutenticaçãoContext"
import { BooksProvider } from "../Context/BooksContext"
import { DarkModeProvider } from "../Context/DarkModeContext"
import { DataProvider } from "../Context/DataContext"
import { WritersProvider } from "../Context/WritersContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AutenticaçãoProvider>
      <WritersProvider>
        <BooksProvider>
          <DarkModeProvider>
            <DataProvider>
              <Component {...pageProps} />
            </DataProvider>
          </DarkModeProvider>
        </BooksProvider>
      </WritersProvider>
    </AutenticaçãoProvider>
  )
}

export default MyApp
