import { useState, useEffect } from 'react'
import Background from './components/Background'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const App = () => {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, 'users')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers()
  }, [])

  const usersArray = users.map(user => [
    {
      id: Math.random(),
      userName: user.name,
      userDept: user.dept
    }
  ])

  return (
    <div>
      <Background sentUserData={usersArray} />
    </div>
  )
}

export default App
