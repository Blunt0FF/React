import { createContext, useState } from "react";


export const UserContext = createContext(null);

// function useState(defaultState) {
//     // logic
//     // state => состояние == данные 
//     // setState => функция для изменения состояния
//     return [state, setState]
// }

// function sum(a, b) {
//     return a + b;
// }

// const result = sum(3, 7)
// const useStateResult = useState(false) // useStateResult = [state, setState]
// const state = useStateResult[0] // state
// const setState = useStateResult[1] // setState
// const [state, setState] = useState(false)


export function UserContextProvider({children}){

    const [isRegistred, setIsRegistred] = useState(false)
    const [data, setData] = useState(null)
    function loginUser(userData){
        setIsRegistred(true)
        setData(userData)
    }
    function userLogOut(){
        setIsRegistred(false)
        setData(null)
    }
    return(
        <UserContext.Provider value={{loginUser, data, isRegistred, userLogOut}}>
            {children}
        </UserContext.Provider>
    )
}

