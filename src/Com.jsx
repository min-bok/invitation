import { useState } from "react"
import { useParams } from "react-router-dom"

export default function Com() {
    const getlocal = () => {
        return JSON.parse(localStorage.getItem("data"))
    }
    const id = useParams()
    const [data, setData] = useState(getlocal)
    const filterd = data && data.filter(el => el.id === Number(id.id))

    return (<>
    <h1>{filterd[0].title}</h1>
    <p>{filterd[0].content}</p>
    </>)
}
