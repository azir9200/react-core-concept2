import { useEffect, useState } from "react"

export default function Posts() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>My user list:{users.length}</h3>
    </div>
  )
}