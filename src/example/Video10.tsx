import React, { useState } from "react";
import './Video10.css'

interface IProps {
    defaultName: string;
    defaultAge: number | string;
}
const Video10 = (props: IProps) => {


    const { defaultName, defaultAge } = props
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number | string>(defaultAge);
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [selectCity, setSelectCity] = useState<string>('Hà Nội')
    const [users, setUsers] = useState<Iuser[]>([
        { name: "Eric", age: 25, city: "Hà Nội" },
        { name: "Eric1", age: 26, city: "Đà Nẵng" },
        { name: "Eric2", age: 27, city: "Hồ Chí Minh" },
    ])

    interface Iuser {
        name: string;
        age: number | string;
        city: string;
    }
    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);


    const handlesubmit = (e: React.FormEvent<HTMLInputElement>) => {
        const user = {
            name: name,
            age: age,
            city: selectCity
        }
        setUsers([...users, user])
        setName('')
        setAge('')
        setSelectCity("Hà Nội")
    }
    const handleChangName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)

    }
    return (
        <>
            <div>Example video 10:  hello worldasdsa </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input type="text" value={name} onChange={handleChangName} /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input type="text" value={age} onChange={(event) => setAge(event.target.value)} /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select onChange={(event) => setSelectCity(event.target.value)}>
                        {city.map((item, index) => {
                            return (
                                <option key={index}>{item}</option>
                            )
                        })}

                    </select>
                </div>

                <input type="submit" value="Submit" onClick={handlesubmit} />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 &&
                            users.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.city}</td>
                                    </tr>
                                )
                            })}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;