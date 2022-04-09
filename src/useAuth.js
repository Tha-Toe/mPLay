import { useEffect, useState } from "react";
import axios from "axios";

export default function useAuth(code) {

    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresInToken] = useState()

    useEffect(() => {
        axios.post('https://musicplayserver.herokuapp.com/login', {
            code,
        }).then(res => {
            console.log(res.data)

            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresInToken(res.data.expiresIn)
            window.history.pushState({},null,"/")

        })
        .catch((err) => {
            console.log(err)
            window.location = "/"
        })
    },[code])

    useEffect(() => {
        if(!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios
            .post('https://musicplayserver.herokuapp.com/refresh', {
                refreshToken,
            }).then(res => {
                setAccessToken(res.data.accessToken)
                setExpiresInToken(res.data.expiresIn)
            })
            .catch((err) => {
                window.location = "/"
                console.log(err)
            })
        }, (expiresIn -60) * 1000)
        return() => clearInterval(interval)
    },[refreshToken,expiresIn])

    return accessToken
}