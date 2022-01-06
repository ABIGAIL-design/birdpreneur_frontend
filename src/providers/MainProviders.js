import React,{useState, useEffect} from 'react'
import {app} from '../firebase_config'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
export default function MainProviders(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userDetails, setUserDetails] = useState(false)
    const [err, setErr ] = useState('')
    const [authTrigger, setAuthTrigger] = useState(0)
    
    const auth = getAuth()

    useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
        if(user !== userDetails){
            if(user){
            setUserDetails({...user})
            setIsAuthenticated(true) 
            }else{
                setUserDetails({})
                setIsAuthenticated(false)
            }
        }
        })
    },[authTrigger])

    return (
        <mainFunctions.Provider
        value={{ 
            err,
            setErr,
            userDetails, setUserDetails,
            isAuthenticated,
            authTrigger, setAuthTrigger    
        }}
        >
            {props.children}
        </mainFunctions.Provider>
    )
}

export const mainFunctions = React.createContext()
