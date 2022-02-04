import React,{useState, useContext} from 'react'
import { useLocation } from 'react-router-dom'
import Investments from '../components/Investments'
import PageTitle from '../components/PageTitle'
import TransactionTable from '../components/TransactionTable'
import  CurrencyInput from 'react-currency-input-field'
import { Placeholder } from 'react-bootstrap'
import {doc, setDoc, getFirestore, collection, Timestamp} from "firebase/firestore"
import {mainFunctions} from "../providers/MainProviders"

const  db = getFirestore()
const servertime  = Timestamp.now().toMillis()


export default function Withdraw() {
    const {
        displayCurrency, converter
      }  = useContext(mainFunctions)
    const location = useLocation()
    const [moneyValue, setMoneyValue] = useState(0)
    const {thisInvestment} = location.state;
    return (
        <div>
            <PageTitle title="Request" />
            
            <div style={{
            maxWidth:"300px",
            padding:"20px",
            margin:"auto"
            }}>
            <CurrencyInput
            className='currency_input'
            style={{
            width:"100%",
            height: "40px"
            }}
            placeholder="Please enter amount to withdraw"
            defaultValue={1}
            name="amount"
            value={moneyValue}
            prefix={displayCurrency}
            onValueChange={(value, name)=>{
            var max = Number(converter(thisInvestment.amount / 100, displayCurrency))
            if(value <= max){
            console.log(value, max)
                setMoneyValue(value)
            }}}
            
            />
            <div className="btn btn-primary"
            onClick={()=>{
            var requestRef = collection(db, "requests")
            
            setDoc(doc(requestRef, 
            thisInvestment.id + servertime + Math.floor(Math.random()*90000) + 10000),
            {
            request: "Withdrawal from Investment Account",
            amount: moneyValue,
            currency: thisInvestment.currency,
            investment: thisInvestment.id,
            date_requested:servertime, 
            }).then(()=>{
            alert("sent")
            })
        }}
            
            >Request</div>
            </div>
            
            
        </div>
    )
}
