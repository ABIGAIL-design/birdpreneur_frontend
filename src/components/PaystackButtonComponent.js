import React, {useState, useEffect, useContext} from 'react'
import { PaystackButton } from 'react-paystack'
import {mainFunctions} from "../providers/MainProviders"
import {doc, setDoc, getFirestore} from "firebase/firestore"
export default function PaystackButtonComponent(imported_data) {
    const {userDetails} = useContext(mainFunctions)
    const onSuccess = (result) =>{
        // alert("Successfull")
        const db = getFirestore()
        setDoc(doc(db, "paystack", result.reference), result)
    }
    const onClose = () =>{
        alert("Closed")
    }
    const [componentProps, setComponentProps] = useState(
        {
            email:"",
            amount:50000,
            metadata:{
                uid:323233,
                farm:4345555,
            },
            publicKey:"pk_test_c986904da0d542e132353a0e444e013d8b03093d",
            text:"Invest Now",
            onSuccess,
            onClose,

        }
    )

    useEffect(()=>{
        var zzz = {...componentProps} //pouring values of arrays into another array
        zzz.amount = Number(imported_data.price) * 100 
        if(typeof zzz.metadata !== "undefined"){
            zzz.metadata.farm = imported_data.fid
            zzz.metadata.uid = userDetails.uid
            zzz.metadata.quantity = 1
            zzz.metadata.unitprice = imported_data.price
        }
        zzz.email = userDetails.email
        console.log(zzz)
        setComponentProps(zzz)
    },[imported_data])
    return (

        <div>
            <PaystackButton {...componentProps} className='btn btn-primary' />
        </div>
    )
}
