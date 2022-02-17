
import React, { useEffect, useState } from 'react';

export default function Testimonials() {
const [testimonials, setTestimonials] = useState([
    {
        testimony:"You can raise a heifer from birth abd the wait until year three to decide whether you are going to keep are offspring. With chicken, you can run a flock every 8weeks with the right input thanks to Birdpreneuer",
        client:"Umar"
    },
    {
        testimony:"Unlike the standard expected lose rates of roughly 10 percent, my farm averages of an impressive loss rate of two-to-three percent, well below the industry average. The reason behind this rate is Birdpreneur.",
        client:"John Phillips, Farmer"
    },
    {
        testimony:"You can raise a heifer from birth abd the wait until year three to decide whether you are going to keep are offspring. With chicken, you can run a flock every 8weeks with the right input thanks to Birdpreneuer",
        client:"Umar"
    },
])

const [showing, setShowing] = useState(0)

const moveForward = () =>{
    var newShowing = (showing + 1) % testimonials.length
    setShowing(newShowing)
}

const moveBackward = () =>{
    var newShowing = (showing + 1) % testimonials.length
    setShowing(newShowing)
}
const moveTestimony = () =>{
    setInterval(moveForward, 3000);

}

useEffect(()=>{
    moveTestimony()
},[])

  return <div>

<section className="testimonial text-center">
        <div className="container">
            <div className="heading white-heading" style={{
            color:"#fff", 
            fontFamily:"montserrat",
            fontSize:"24px",
            fontWeight:"medium"
            }}>
                Testimonials
            </div>
            <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="testimonial4_slide">
                            <p>{testimonials[showing].testimony }</p>
                            <h4>{testimonials[showing].client}</h4>
                        </div>
                    </div>
     
                </div>
                <div className="carousel-control-prev"
                onClick={()=>{moveBackward()}}
                >
                    <span className="carousel-control-prev-icon"></span>
                </div>
                <div className="carousel-control-next"
                onClick={()=>{moveForward()}}
                >
                    <span className="carousel-control-next-icon"></span>
                </div>
            </div>
        </div>
    </section>
  </div>;
}
