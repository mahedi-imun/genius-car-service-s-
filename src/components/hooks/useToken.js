import { async } from "@firebase/util"
import axios from "axios"
import { useEffect, useState } from "react"

const useToken = (user) => {

    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        const getToken = async () => {
            if (email) {
                const { data } = await axios.post('https://obscure-hollows-03844.herokuapp.com/login', { email });

                setToken(data.accessToken)
                localStorage.setItem('accessToken', data.accessToken)
            }

        }
        getToken()
    }, [user])
    return [token]
}
export default useToken