import React, {useState} from 'react'

export default function ProductsDetails() {
  const [tab, setTab] = useState(0);
  return (
      <div className='row farm_details'>
          <div className='row col-sm-12 farm_details_titles'>
              <div className={`col-sm-3 col-xs-12 this_title ${tab === 0 ? "active": ""}`}
              onClick={()=>setTab(0)}
              >My Money</div>
              <div className={`col-sm-3 col-xs-12 this_title ${tab === 1 ? "active": ""}`}
              onClick={()=>setTab(1)}
              >Insurance Policy</div>
              <div className={`col-sm-3 col-xs-12 this_title ${tab === 2 ? "active": ""}`}
              onClick={()=>setTab(2)}
              >Return & VAT</div>
              <div className={`col-sm-3 col-xs-12 this_title ${tab === 3 ? "active": ""}`}
              onClick={()=>setTab(3)}
              >Farm's Story</div>
          </div>

          <div className='row col-sm-12 farm_details_body'>
              {tab === 0 &&
              <div className=''>
                If you want to make money from farming without having to work hard, want to get into farming, want to rent out your land/facilities, or want to refer a loved one to the initiative Our Youth Jobs, you can register here ...
              </div>
              }{tab === 1 &&
              <div className=''>
              Insurance Policy: Insured by Leadway Assurance. Leadway Multiperil Insurance policy will be bought for the farm. Scenario A: If the crops are lost before Harvest, the insurance policy will pay back the costs of replanting your crops and growing your crops to maturity less the policy co-pay. The co-pay is the amount subtracted from the amount claimed to get the amount payable to your farm. Co-pay can be up to 10%. Scenario B: If the crops are lost or damaged during harvest, the insurance policy will pay back the market value of crops lost or damaged during harvest.
              </div>
              }{tab === 2 &&
              <div className=''>
              Return & VAT: You will get a 16% return on investment in 6 months. At the end of your contract duration, you will receive both capital and return but you will also pay VAT of 5% on the return to the government.
              </div>
              }{tab === 3 &&
              <div className=''>
              Return & VAT: You will get a 16% return on investment in 6 months. At the end of your contract duration, you will receive both capital and return but you will also pay VAT of 5% on the return to the government.
              </div>
            }
          </div>

      </div>
  )
}
