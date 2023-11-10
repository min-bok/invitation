import { useParams } from "react-router-dom"
import Com from "./Com"
import data from "./data"
import { useEffect, useRef, useState } from "react"

export default function Test() {
    const idRef = useRef(3)
    const [input, setInput] = useState({
        id: idRef.current,
        url: `http://localhost:3000/test/${idRef.current}`,
        title: "",
        content: '',
    })

    const handleOnchange = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const test = (id) => {
        console.log("id")
        setInput({
          ...input,
          ["id"]: id,
          ["url"]: `http://localhost:3000/test/${id}`,
        });
      };
    
      const create = () => {
        idRef.current++;
        test(idRef.current);
        data.push(input);
        localStorage.setItem("data", JSON.stringify(data));
    }

    return (
    <>
        <h1 onClick={create}>create</h1>
        <form>
            <input type="text" name="title" onChange={handleOnchange}/>
            <input type="text" name="content" onChange={handleOnchange}/>
        </form>
    </>)
}
