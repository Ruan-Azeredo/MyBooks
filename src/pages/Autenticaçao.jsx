import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import app from '../Services/firebase'

export default function Autenticação() {

    const handleGoogleSingIn = () => {

        const auth = getAuth(app)

        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <button onClick={handleGoogleSingIn}>Autenticar</button>
    )
}