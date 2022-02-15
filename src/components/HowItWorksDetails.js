import React from 'react'

export default function HowItWorksDetails() {
    return (
        <section className='Homepage-section'>
            
            <div className="container">
            <div className="farm">
            <div className="row">
            <div className="col-sm-5 col-xs-12">
              <div className="list-group" id="list-tab" role="tablist " >
                <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-register" role="tab" aria-controls="list-home">Register</a>
                <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-portfolio" role="tab" aria-controls="list-profile">Select Portfolio</a>
                <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-invest" role="tab" aria-controls="list-messages">Invest</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-relax" role="tab" aria-controls="list-settings">Relax, watch your Investment grow</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-impacts" role="tab" aria-controls="list-settings">Inspect your impacts</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-reinvest" role="tab" aria-controls="list-settings">Recieve your share / re-invest</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-recharge" role="tab" aria-controls="list-settings">Recharge Your Account</a>
              

              </div>
            </div>
            <div className="col-xs-12 col-sm-6 decisionText mx-2 mt-3">
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="list-register" role="tabpanel" aria-labelledby="list-home-list">
                 <p>If you want to make money from farming without having to work hard, want to get into farming, want to rent out your land/facilities, or want to refer a loved one to the initiative Our Youth Jobs, you can register here ...</p>

                 </div>
                <div className="tab-pane fade" id="list-portfolio" role="tabpanel" aria-labelledby="list-profile-list">
                   <p>Browse our farm funding package deal offerings. Select the funding package deal you have an interest in, and we do the rest. The unit of funding for every package deal is 1 acre for crop farms or with the aid of using the wide variety of farm animals for animal farms (e.g. consistent with a hundred birds for poultry). The minimal funding is 100 units. In the farm element page, you'll be capable of examine the funding portfolio info and additionally see the wide variety of jobs so one can be supplied to the unemployed youths thru your funding.</p>
                </div>
                <div className="tab-pane fade" id="list-invest" role="tabpanel" aria-labelledby="list-messages-list">
                   <p>
                   Once you click on Invest Now, you should purchase the farm funding devices of your interest. To make it smooth for our traders everywhere in the world, Birdpreneur has included a couple of gateways via which you could pay. You will pay through debit card, credit scorecard, and online financial institution transfer. Once you've bought your funding package(s), you could now loosen up and watch your cash grow.
                  </p>
                </div>
                <div className="tab-pane fade" id="list-relax" role="tabpanel" aria-labelledby="list-settings-list">
                  <p>Browse our farm funding package deal offerings. Select the funding package deal you have an interest in, and we do the rest. The unit of funding for every package deal is 1 acre for crop farms or with the aid of using the wide variety of farm animals for animal farms (e.g. consistent with a hundred birds for poultry). The minimal funding is 100 units. In the farm element page, you'll be capable of examine the funding portfolio info and additionally see the wide variety of jobs so one can be supplied to the unemployed youths thru your funding.</p>
                </div>
                
                <div className="tab-pane fade" id="list-impacts" role="tabpanel" aria-labelledby="list-settings-list">
                <p>
                  Once you click on Invest Now, you should purchase the farm funding devices of your interest. To make it smooth for our traders everywhere in the world, Birdpreneur has included a couple of gateways via which you could pay. You will pay through debit card, credit scorecard, and online financial institution transfer. Once you've bought your funding package(s), you could now loosen up and watch your cash grow.
                  </p>
                </div>
               
                
                <div className="tab-pane fade" id="list-reinvest" role="tabpanel" aria-labelledby="list-settings-list">
                <p>
                Browse our farm funding package deal offerings. Select the funding package deal you have an interest in, and we do the rest. The unit of funding for every package deal is 1 acre for crop farms or with the aid of using the wide variety of farm animals for animal farms (e.g. consistent with a hundred birds for poultry). The minimal funding is 100 units. In the farm element page, you'll be capable of examine the funding portfolio info and additionally see the wide variety of jobs so one can be supplied to the unemployed youths thru your funding.
                </p>
                </div>
                

                <div className="tab-pane fade" id="list-recharge" role="tabpanel" aria-labelledby="list-settings-list">
                <p>
                Under the farm information page, you'll be capable of seeing farm status. Based on our complete statistics and enterprise expertise, we stable in-depth coverage insurance for every farm. You can discover certain data approximately the coverage insurance below the farm information page. We will offer you periodic video and image updates of your farm, which you may get right of entry to via your eFarm account on our website.
                </p>
                </div>
              
              
              </div>
            </div>
          </div>

          <div className="button" style={{marginTop: "100px", marginLeft: "40px"}}>
            <a href="/farms "><button className="b_btn btn btn-primary">Browse Farms</button></a>
          </div>

        </div>
        </div>  
            
        </section>
    )
}
