import React,{useState, useEffect} from 'react'
import {app} from '../firebase_config'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

import {getDocs, getFirestore, collection, getDoc, doc} from "firebase/firestore"

export default function MainProviders(props) {
    const db = getFirestore()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userDetails, setUserDetails] = useState({})
    const [userProfile, setUserProfile] = useState({})
    const [err, setErr ] = useState('')
    const [authTrigger, setAuthTrigger] = useState(0)
    const [conversionRate, setConversionRate] = useState({})
    const [displayCurrency, setDisplayCurrency] = useState("NGN")
    const [farmFilter, setFarmFilter] = useState("")
    
    const auth = getAuth()
    const formatMoney = (amount, currency="NGN")=>{
    
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: displayCurrency,

    });
    var convertedRate = converter(amount, displayCurrency, currency)
    return formatter.format(convertedRate); /* $2,500.00 */
    }
    
    const converter = (amount=0, destination="NGN", base="NGN") =>{
    
        if(typeof conversionRate[base] !== undefined && 
        typeof conversionRate[destination] !== "undefined"){
            var basetonaira = Number(amount) / Number(conversionRate["NGN"].value)
            var nairatosource = basetonaira * Number(conversionRate[destination].value)
            return nairatosource;    
        }
        return 0

    
    }
    
    useState(()=>{
    getDocs(collection(db,"converter"))
    .then((results)=>{
    var cR = {};
    results.forEach(async (doc)=>{
        var currency = doc.id
        cR[currency] = doc.data()
        await setConversionRate(cR)
        console.log(cR)
    })
    })
    
    },[]);
    
    useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
        if(user !== userDetails){
            if(user){
            setUserDetails({...user})
            setIsAuthenticated(true) 
            
            getDoc(doc(getFirestore(), 'profiles', user.uid))
            .then((profile)=>{
            var userprofile = {...profile.data()}
            setUserProfile(userprofile)
            var curr = "NGN"
            if(userprofile.country !== ""){
             curr = userprofile.country
            }
            setDisplayCurrency(curr)
            })
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
            formatMoney,
            err,
            setErr,
            userDetails, setUserDetails,
            isAuthenticated,
            authTrigger, setAuthTrigger,
            displayCurrency, setDisplayCurrency,
            converter, 
            userProfile,
            farmFilter, 
            setFarmFilter
        }}
        >
            {props.children}
        </mainFunctions.Provider>
    )
}

export const mainFunctions = React.createContext()
