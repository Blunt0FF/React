import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {UserContext} from '../context/UserContext'

export default function RegistrationForm() {
    const {loginUser} = useContext(UserContext)
    const { register, handleSubmit } = useForm()

    function submit(data){
        loginUser(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="login">Login:</label>
            <input id="login" type="text" placeholder="Login" {...register('login', {required: true})}/>

            <label htmlFor="email">E-mail:</label>
            <input id="email" type="email" placeholder="E-mail" {...register('email', {required: true})}/>

            <label htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Password" {...register('password', {required: true, minLength:6})}/>

            <button>Register</button>            

        </form>
    )
}