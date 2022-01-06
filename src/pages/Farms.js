import React,{useEffect, useState, useContext} from 'react'
import {getDocs, getFirestore, collection} from "firebase/firestore"
import PaystackButtonComponent from '../components/PaystackButtonComponent';

import {mainFunctions} from "../providers/MainProviders"
import { Link } from 'react-router-dom';

export default function Farms() {
    const {
        isAuthenticated
    } = useContext(mainFunctions)
    const db = getFirestore()
    const [allFarms, setAllFarms] = useState([]);
    // [{name:Oyo Farms, location:Oyo},{name:Ogun Farms, location:Ogun}]
    // {}
    const getFarms =  async () => {
        const farms = await getDocs(collection(db, "farm"))
        var farm_list = [];
        
        farms.forEach((doc)=>{
            var thisfarm = doc.data()
            thisfarm.id = doc.id //Added Id to the Farm Data
            farm_list.push(thisfarm) //Pushed this farm's data to farm list
        })
        setAllFarms(farm_list) // Put farm list in All Farms
        console.log(farm_list)
    }

    useEffect(()=>{
        getFarms()
    },[])

    return (
        <div className='container'>
        <div className=''>
            {allFarms.map((thisfarm, index)=>{
                return(
                  <div key={index} className='farm_list_box row'>
                      <div className='inner'>

                        <div className="image"
                        style={{
                            background:"url("+thisfarm.img+")",
                            backgroundSize:"100%",
                            backgroundPosition:"center"

                        }}
                        >

                        </div>
                        <div className="details float-left">
                      <h3>{thisfarm.name}</h3>
                      <p>Location: {thisfarm.location}</p>
                      <p>Price: {thisfarm.price}</p
                      >
                        {!isAuthenticated &&
                        <span>
                            <Link to="/login">
                            <button className='btn btn-primary'>Login to Invest</button>
                            </Link>
                        </span>
                        }
                        {isAuthenticated && 
                        <PaystackButtonComponent price={thisfarm.price} fid={thisfarm.id} /> }
                      </div>
                      </div>
                  </div>  
                )
            })}
        </div>
        </div>
    )
}
