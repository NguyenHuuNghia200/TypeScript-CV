import { useState } from "react"

const Video9 = () => {

    const [name, setName] = useState<string>("Nghia")
    return (
        <div> Example video 9: {name}</div>
    )
}
export default Video9