import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProviders"
import {doc, updateDoc, getFirestore} from 'firebase/firestore'
export default function Countries() {
    // 
    const {
        setDisplayCurrency,
        userDetails,
        displayCurrency
      }  = useContext(mainFunctions)
    return (
        <div className="top_header">
          <select 
          className="countries_select"
          style={{
             width:"200px",
            height:"30px",
            padding:"0 10px",
            fontFamily:"Roboto"
          }}
          onChange={(e)=>{
          setDisplayCurrency(e.target.value)
          console.log(userDetails)
          if(typeof userDetails.uid !== "undefined"){
           updateDoc(doc(getFirestore(), "profiles", userDetails.uid),{country: e.target.value})
          }}
        }
          value={displayCurrency}
          >
            <option value="NGN">{`\uD83C\uDDF3\uD83C\uDDEC`} Nigeria</option>
            <option value="KES">{`\uD83C\uDDF0\uD83C\uDDEA`} Kenya</option>
            <option value="GHC">{`\uD83C\uDDEC\uD83C\uDDED`} Ghana</option>
          </select>  
        </div>
    )
}
