import React, {useState, useContext, useEffect} from 'react'
import {getDocs, getDoc,doc, getFirestore, collection, query, where} from "firebase/firestore"
import {mainFunctions} from "../providers/MainProviders"
import SectionHeader from './SectionHeader';
export default function Investments() {
    const {userDetails, formatMoney} = useContext(mainFunctions);
    const db = getFirestore()
    const [transactions, setTransactions] = useState([])
    const [filteredTransactions, setFilteredTransactions] = useState([])
    const [searchText, setSearchText] = useState("")
    
    const filterTransactions = () =>{
        var ft = transactions.filter((thistransaction, index)=>{
        var found = false;
        var s = searchText + "";
        s = s.toLowerCase()
        
        var detail = thistransaction.detail + ""
        detail = detail.toLowerCase()
        var amount = thistransaction.amount + ""
        
        if(detail.includes(s)){
         found = true
        }
        
        if(amount.includes(s)){
            found = true
        }
        
        return found;
        })
        
        
        setFilteredTransactions(ft)
    }
    const getTransactions =  async () => {
        const tnx = await getDocs(query(collection(db, "transactions"), where("user_id","==",  userDetails.uid)))
        var tnx_list = [];
        tnx.forEach((doc)=>{
            var thistransaction = doc.data()
            thistransaction.id = doc.id //Added Id to the Farm Data
            tnx_list.push(thistransaction) //Pushed this farm's data to farm list
        })
        
        setTransactions(tnx_list) // Put farm list in All Farms
        console.log(tnx_list)
    }

   
    useEffect(()=>{
        getTransactions()
       
    },[])
    
    useEffect(()=>{
        filterTransactions()
       
    },[transactions, searchText])
    return (
        <div className="container">
        <SectionHeader title="Transactions"></SectionHeader>    
        <div className=''>
        <div className='tablefilter'>
           <input className='search'
           onChange={(e)=>{
           setSearchText(e.target.value)
           }}
           placeholder='Search Transactions'
           ></input>
        </div>
        <table class="table">
        <thead>
          <tr>
           <th scope="col">#</th>
           <th scope="col">Details</th>
           <th scope="col">Amount</th>
           <th scope="col">Paid On</th>
         </tr>
        </thead>
        <tbody>
        {filteredTransactions.map((thistransaction, index)=>{
        return(
            <tr key={index}>
               <th scope="row">{Number(index) + 1}</th>
                <td>{thistransaction.detail}</td>
                <td>{formatMoney((Number(thistransaction.amount)/100),thistransaction.currency)}</td>
                <td>{thistransaction.created_at.replace("T"," ").replace(".000Z","")}</td>
            </tr>
        )
        })}
        </tbody>
        </table>
        {JSON.stringify(filteredTransactions) === "[]" &&
            <div className='dumb_row'>No Transacton found</div >
        }
          
        </div>
        </div>
    )
}
