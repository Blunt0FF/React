import { useContext } from "react"
import {UserContext} from '../context/UserContext'


export default function UserProfile(){
    const {data, userLogOut} = useContext(UserContext)
    

    return(
        <div>
            <h3>User profile</h3>
            <p>Login: {data.login}</p>
            <p>E-mail: {data.email}</p>
            <button onClick={userLogOut}>Logout</button>
        </div>
    )
}