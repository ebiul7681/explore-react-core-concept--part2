import { useEffect, useState } from "react"

export default function Users(){
    const [users, setState] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div>
          <h3>users: {users.length} </h3>
        </div>
    )
}





// 1. declare a state to hold data
// 2. useEffect with callback dependency