import React, {useState} from 'react'

export default function MissionBoard() {

  const [showTab, setShowTab] = useState(0)
  return (
    <section className='mission_section'>
        <div>
            <div className="tab_title"
            onClick={()=>
                {
                    if(showTab !== 1)
                        setShowTab(1)
                    else
                        setShowTab(0)
                }}
            ><h4>Vision</h4>
                {/* <i class="fa-brands fa-instagram"></i> */}
            </div>
            {showTab === 1 &&
            <div className="tab_body"><p>To rebuild a robust and sustainable agricultural enterprise in Africa.</p></div>
            }
        </div>
        <div>
            <div className="tab_title"
            onClick={()=>
                {
                    if(showTab !== 2)
                        setShowTab(2)
                    else
                        setShowTab(0)
                }}
            ><h4>Mission</h4></div>
            {showTab === 2 &&
            <div className="tab_body"><p>To be the most important hub of digitally connected, clever and glad farm lovers. Raise a brand new era of colourful farmers.</p></div>
            }
        </div>
        <div>
            <div className="tab_title"
            onClick={()=>
                {
                    if(showTab !== 3)
                        setShowTab(3)
                    else
                        setShowTab(0)
                }}

            ><h4>Goals</h4></div>
            {showTab === 3 &&
            <div className="tab_body"><p>Optimize resources (monetary, mechanization mad man-power) correctly to make certain global food security and generate wealth for all through agriculture. Aid the nation in reducing the high rate of poverty by creating a source of livelihood and facilitating job opportunities in the agricultural sector.</p></div>
            }
        </div>
        <div>
            <div className="tab_title"
            onClick={()=>
                {
                    if(showTab !== 4)
                        setShowTab(4)
                    else
                        setShowTab(0)
                }}
            ><h4>Value</h4></div>
            {showTab === 4 &&
            <div className="tab_body"><p>
            <b>Excellence</b> Whatever is really well worth doing in any respect is really well worth doing excellently. 
            The quality, protection, and affordability of our farm produce are of significance to us. 
            We care approximately the fitness of our clients and feature their exceptional interest at heart. 
            <b>Friendship</b> We value group work. We are so big we will accommodate as many farm lovers as possible, and we can't afford to lose any of our clients
            </p></div>
            }
        </div>
    </section>
  )
}
