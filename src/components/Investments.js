import React, {useState, useContext, useEffect} from 'react'
import {getDocs, getDoc,doc, getFirestore, collection, where} from "firebase/firestore"
import {mainFunctions} from "../providers/MainProviders"
export default function Investments() {
    const {userDetails} = useContext(mainFunctions);
    const db = getFirestore()
    const [investmentLists, setInvestmentLists] = useState([])
    
    const getInvestments =  async ()  =>{
        var inv = [];
        const investments = await getDocs( collection(db, "investments"), where("owner", "==", userDetails.uid))
        investments.forEach(async (res)=>{
         var this_inv = res.data();
        this_inv.id = res.id
         var farm_id = this_inv.farm_id;
         await getDoc(doc(getFirestore(), 'farm', farm_id))
          .then(async (result)=>{
            this_inv.farm_details = result.data()
            var m = [...investmentLists]
            await m.push(this_inv);
            console.log(m)
            await setInvestmentLists(m);
          })
        //   const investments = await getDocs( collection(db, "investments"), where("owner", "==", userDetails.uid);
        //   console.log(res.id, "=>", res.data());       
        })
        
    }
    useEffect(()=>{
      getInvestments()
       
    },[])
    return (
        <div className="container"> 
            <div className='col investment_wrapper'>
            {investmentLists.map((thisInvestment, index)=>{
                return(
                    <span key={index}>
                    <div className='investment_box' >
                        {typeof thisInvestment.farm_details !== "undefined" &&
                        <span>
                        <h4>{thisInvestment.farm_details.name}</h4>
                        <p>ROI: {thisInvestment.roi}</p>
                        <p>Units: {thisInvestment.quantity}</p>
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
