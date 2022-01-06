import React from 'react'

export default function Investinfarm() {
    return (
        <section className='Homepage-section'>
            
            <div className="container" style={{backgroundColor: "rgb(241, 238, 238)"}}>
            <div className="farm">
             <h2 style={{}}>Invest in a Farm</h2>

            <div className="row">
            <div className="col-4" style={{marginLeft: "10px", height: "130px"}}>
              <div className="list-group" id="list-tab" role="tablist" >
                <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Select your farm</a>
                <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Invest & get returns</a>
                <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Watch your farm grow</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Earn profits</a>
              </div>
            </div>
            <div className="col-6">
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                   <h5 style={{marginLeft: "6%"}}>Decide which farm you are interested in.</h5>
                   <p style={{marginRight: "25%", color: "rgb(73, 70, 70)"}}> See the return and contract duration. Read the farmers’ <br/> story and evaluate impact. Review the risk assessment level.</p></div>
                <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                   <h5 style={{marginRight: "10%"}}>Choose the farm offers that work best for you.</h5>
                   <p style={{marginRight: "25%", color: "rgb(73, 70, 70)"}}> You can change the number of units you want, add more <br/> farms, update cart, make payment and get receipt instantly</p></div>
                <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                   <h5 style={{marginRight: "10%"}}> Receive monthly photo and video updates on farm progress.</h5>
                  <p style={{marginRight: "25%", color: "rgb(73, 70, 70)"}}>You can book a farm visit anytime. See faces of those <br/> you are impacting and you can speak with them too.</p> </div>
                <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                    <h5 style={{marginRight: "10%"}}>Get your funds + your profit straight to your bank account</h5>
                    <p style={{marginRight: "25%", color: "rgb(73, 70, 70)"}}> At the end of production cycle (i.e. contract duration),<br/> we pay you back your fund and profit. Guaranteed!</p></div>
              </div>
            </div>
          </div>

          <div className="button" style={{marginTop: "10%", marginLeft: "45%"}}>
            <a href="/farms "><button type="button" className="btn btn-danger" style={{color: "black", marginBottom: "4%", padding: "2%"}}>Browse Farms</button></a>
          </div>

        </div>
        </div>  
            
        </section>
    )
}
