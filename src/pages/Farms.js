import React,{useEffect, useState, useContext} from 'react'
import {getDocs, getFirestore, collection} from "firebase/firestore"
import PaystackButtonComponent from '../components/PaystackButtonComponent';

import {mainFunctions} from "../providers/MainProviders"
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle2';
import ProductsDetails from '../components/ProductsDetails';
import FarmDetails from '../components/FarmDetails';

export default function Farms() {
    const {
        isAuthenticated,
        formatMoney,
        farmFilter, 
        setFarmFilter,
        farmCategory, 
        setFarmCategory
    } = useContext(mainFunctions)
    const db = getFirestore()
    const [allFarms, setAllFarms] = useState([])
    const [filteredFarms, setFilteredFarms] = useState([])
    
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
        const search = window.location.search
        const params = new URLSearchParams(search)
        var category = params.get('category')
        if(typeof category !== "undefined" && category !== null){
           setFarmCategory(category.toLowerCase()) 
        }
    },[])

    useEffect(()=>{
       setFarmCategory(farmFilter) 
    },[farmFilter])
    
    useEffect(()=>{
        if(farmCategory !== ""){
            var c = allFarms.filter((thisfarm)=>{
                if(typeof thisfarm.category !== "undefined"){
                    if(thisfarm.category.toLowerCase() === farmCategory){
                        return true
                    }
                }
                return false
            })
            setFilteredFarms(c)
        }else{
            setFilteredFarms(allFarms)
        }
    },[allFarms, farmCategory])
    
    

    return (
        <div className='container'>
        <PageTitle title={farmCategory + " Farms "} />
        <div className=''>
            {filteredFarms.map((thisfarm, index)=>{
                return(
                  <div key={index} className='farm_list_box row mt-3 mb-3'>
                      <div className='inner'>

                        <div className="image"
                        style={{
                            background:"url("+thisfarm.img+")",
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                            backgroundRepeat:"no-repeat"

                        }}
                        >

                        </div>
                        <div className="details float-left">
                      <p><strong>Location:</strong> {thisfarm.location}</p>
                      <p><strong>Price:</strong> {formatMoney(thisfarm.price)}</p>
                      <p><strong>Farmers:</strong> {thisfarm.farmers}</p>
                      <p><strong>Size:</strong> {thisfarm.size}</p>
                      <p><strong>Employees:</strong> {thisfarm.employees} Youths</p>
                      <p><strong>Invest units:</strong> {thisfarm.units}</p>
                      <p><strong>ROI: </strong>{thisfarm.roi}% (Fixed)</p>
                        {!isAuthenticated &&
                        <span>
                            <Link to="/register">
                            <button className='btn btn-primary'>Invest Now</button>
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

        {/* <ProductsDetails /> */}
        <FarmDetails />
        </div>
    )
}
