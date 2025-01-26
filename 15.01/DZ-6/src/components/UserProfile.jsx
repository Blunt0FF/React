import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function UserProfile() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const fetchUser = async() => {
        try{
            setLoading(true)
            setError(null)
            const response = await axios.get('https://randomuser.me/api/')
            setUser(response.data.results[0])
        }catch (e){
            setError(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser()
    },[])
// или     useEffect(() =>  fetchUser,[])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error:{error.message}</div>
    }
    if (!user) {
        return <div>Could not find user</div>
    }
  return (
    <div className='card'>
        <img src={user.picture.medium} alt="Profile picture" />
        <h2>{user.name.first} {user.name.last}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <button onClick={fetchUser}>Load new user</button>
    </div>
  )
}
