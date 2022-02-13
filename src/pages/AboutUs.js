import React from 'react';
import MissionBoard from '../components/MissionBoard';
import PageTitle from '../components/PageTitle';
import Testimonials from '../components/Testimonials';
export default function AboutUs() {
  return <div>
      <PageTitle title="About Us" />
      <section>
      <div className='container'>
        <div className='row about_box'>
          <div className='col-md-6  '>
          <h4 className=''>About Birdpreneur</h4>
            <p>Birdpreneur Africa is an agritech business enterprise primarily based in Ogun State, Nigeria, and Rwanda. We accomplice with skilled farmers and agronomists for farm production, the usage of contemporary farming equipment, strategies, and inputs as a way to produce exact quality, secure, and less expensive farm produces for a developing population. Our farm of over one hundred acres is located in Ogun State. We have both crop and cattle farms including soybeans, maize, poultry, goat, and so on. Our farming sports and methods are done in managed environments, allowing and improving clean produce and protection for cattle.</p>
          </div>
          <div className='col-md-6 ' style={{
              background:"url(BP4.jpeg)",
              backgroundSize:"cover",
              borderRadius:"10px",
          }}></div>
        </div>
      </div>
      </section>
      <MissionBoard />
      <section className='more_box'>
      <div className='container'>
      <div className='row'>
          <div className='col-sm-12'>
            <h2>We create endless possibilities for everyone to get involved in the system and enterprise of agriculture.</h2>
          </div>
          <div className='col-sm-3'>
              <div className='inner'>
                  <div className='opening_icon icon produce_icon'></div>
                  <h4>Opening</h4>
                  <p>Choose farm(s) to open after cautiously analyzing vital elements like crop or livestock season, marketplace value, land availability, and so on.</p>
              </div>
          </div>
          <div className='col-sm-3'>
              <div className='inner'>
                  <div className='opening_icon icon partnership_icon'></div>
                  <h4>Partnership</h4>
                  <p>Liaise with capability outfit for mechanization and additionally empower farmers through presenting them with contemporary-day equipment, top-notch seeds, and schooling on the new technological know-the way to enable green large-scale production.</p>  
              </div>
          </div>
          <div className='col-sm-3'>
              <div className='inner'>
                  <div className='opening_icon icon production_icon'></div>
                  <h4>Production</h4>
                  <p>Scale-up manufacturing with the usage of agricultural equipment to mechanize farm works and processes. Field professionals are assigned to every farm to monitor manufacturing from cultivation to harvest.</p>  
              </div>
          </div>
          <div className='col-sm-3'>
              <div className='inner'>
                  <div className='opening_icon icon distribution_icon'></div>
                  <h4>Sale & Disbursement</h4>
                    <p>After harvest are offered to our customers called off-takers. Funds are distributed accordingly to the respective farm sponsor.</p>  
                </div>
          </div>
      </div>

      </div>
      </section>
      <Testimonials />

  </div>;
}
