import { AutenticaçãoProvider } from "../Context/AutenticaçãoContext"

function MyApp({ Component, pageProps }) {
  return (
    <AutenticaçãoProvider>
      <Component {...pageProps} />
    </AutenticaçãoProvider>
  )
}

export default MyApp
