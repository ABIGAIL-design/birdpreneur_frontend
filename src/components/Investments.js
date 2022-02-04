import React, {useState, useContext, useEffect} from 'react'
import {getDocs, 
getDoc,
doc, 
getFirestore, 
collection, 
query, 
where, 
Timestamp,} from "firebase/firestore"
import {mainFunctions} from "../providers/MainProviders"

import SectionHeader from './SectionHeader';
import { Link } from 'react-router-dom';
export default function Investments() {
    const servertime = Timestamp.now().toMillis();
    const {userDetails, formatMoney} = useContext(mainFunctions);
    const db = getFirestore()
    const [investmentLists, setInvestmentLists] = useState([])
   

    const getInvestments =  async ()  =>{
        var inv = [];
        const investments = await getDocs(query( collection(db, "investments"), where("owner", "==", userDetails.uid)))
        investments.forEach(async (res)=>{
         var this_inv = res.data();
         this_inv.id =  this_inv.farm_id;
         inv.push(this_inv)
         
        //   const investments = await getDocs( collection(db, "investments"), where("owner", "==", userDetails.uid);
        //   console.log(res.id, "=>", res.data());       
        })
        
        setInvestmentLists(inv)
        
        
    }
    useEffect(()=>{
      getInvestments()
       
    },[])
    
    const toTimestamp = (strDate) =>{
    var datum = Date.parse(strDate);
    return datum/1000
    }
    return (
        <div className="container"> 
            <SectionHeader title="Farms"></SectionHeader>
            <div className='col investment_wrapper'>
            {JSON.stringify(investmentLists) === "[]" &&
            <div className='investment_box dumb' ></div>
            }
            {investmentLists.map((thisInvestment, index)=>{
            // JSON.stringify()
                var farm_details = JSON.parse(thisInvestment.farm)
                var maturity_timestamp = toTimestamp(thisInvestment.created_at) 
                + (Number(thisInvestment.duration) * 86400)
                
                var dateObject = new Date(maturity_timestamp * 1000)
                var humanDateFormat = dateObject.toLocaleDateString()
                return(
                    <span key={index}>
                    <div className='investment_box' >
                    <div className="maturity_date">Matures on {humanDateFormat}</div>
                        {typeof farm_details !== "undefined" &&
                        <span>
                        <h4>{farm_details.name}</h4>
                        <p>ROI: {thisInvestment.roi}</p>
                        <p>Units: {thisInvestment.quantity}</p>
                        <p>{formatMoney(thisInvestment.amount / 100)}</p>
                        {servertime > dateObject &&
                        <span>
                        <Link to="/withdraw"
                        state={{thisInvestment: thisInvestment}}
                        >
                        <button className='btn btn-primary'>Withdraw</button>
                        </Link>
                        </span>
                        }
                        </span>
                        }
                        
                    </div>
                    
                    </span>
                )
            })}
            </div>
        </div>
    )
}
