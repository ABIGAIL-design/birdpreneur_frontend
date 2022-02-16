import React,{useContext} from 'react'
import PageTitle from '../components/PageTitle2'
import {mainFunctions} from "../providers/MainProviders"
import {Link} from "react-router-dom"

export default function AllFarms() {
    const {
        setFarmFilter
     }  = useContext(mainFunctions)
    
  return (
    <div>


<div className="container">

                <PageTitle title="Our Farms"/>

                <div className="allfarms row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                    <div className="card">
                        <img src="https://res.cloudinary.com/dyv5h7hdy/image/upload/v1641318746/chicks1_gxxjht.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Create wealth and impact lives through our poultry farming. Invest now and get up to at least <b>15% ROI</b></h5>
                        
                        
                        <Link to="/farms?category=poultry" 
                        onClick={()=>setFarmFilter("poultry")}
                        >
                            <button type="button" className="btn btn-primary">Learn More</button>
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <img src="https://res.cloudinary.com/dyv5h7hdy/image/upload/v1641318693/soya2_psqwgs.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">We give everyone the oppurtunuty to create wealth through soyabeans farming. Invest now and get up to  <b>18% ROI</b></h5>
                        
                        <Link to="/farms?category=soyabeans" 
                        onClick={()=>setFarmFilter("soyabeans")}
                        >
                        <button type="button" className="btn btn-primary"> Learn More</button></Link>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://res.cloudinary.com/dyv5h7hdy/image/upload/v1644425927/goat_bzw15s.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                            
                            <h5 className="card-text"> You don't need to move out of your confort zoon to make cool cash through goat farming. Invest now and get up to <b>16% ROI</b></h5>
                            <Link to="/farms?category=goat" 
                            onClick={()=>setFarmFilter("goat")}
                            >
                            <button type="button" className="btn btn-primary">Learn More</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <img src="https://res.cloudinary.com/dyv5h7hdy/image/upload/v1644425760/maize_fyfxqz.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Maize is a global essencial food. Invest now and get up to <b>15% ROI</b></h5>
                        
                        <Link to="/farms?category=maize" 
                        onClick={()=>setFarmFilter("maize")}
                        >
                        <button type="button" className="btn btn-primary">Learn More</button></Link>
                        </div>
                    </div>
                    </div>


                </div>
                </div>
    </div>
  )
}
