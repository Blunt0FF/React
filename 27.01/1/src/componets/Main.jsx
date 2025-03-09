import { useContext } from "react";
import RegistrationForm from "./RegistrationForm";
import UserProfile from "./UserProfile";
import {UserContext} from "../context/UserContext";

export default function Main(){
    const {isRegistred} = useContext(UserContext)
    
    return(
        <main>
            {isRegistred ? <UserProfile/> : <RegistrationForm/>}            
        </main>
        
    )
}