import { AutenticaçãoProvider } from "../Context/AutenticaçãoContext"
import { WritersProvider } from "../Context/WritersContext"


function MyApp({ Component, pageProps }) {
  return (
    <AutenticaçãoProvider>
      <WritersProvider>
        <Component {...pageProps} />
      </WritersProvider>
    </AutenticaçãoProvider>
  )
}

export default MyApp
