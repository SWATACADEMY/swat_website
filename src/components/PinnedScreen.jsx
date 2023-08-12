// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const PinningSection = () => {
  return (
    <div className="">
      <div className="pin">
        <div className="box">
          <div className="place-center">
            <div>
              <div className="button-container">
                <div className="tag">Since 2009</div>
              </div>
              <h2 className=" text-base md:text-lg whitespace-wrap lg:text-5xl xl:text-7xl">
                Over a <span className="text-[#cc3c39]" >Decade</span> of Youth Empowerment
              </h2>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-16 lg:px-32 px-4" style={{ background: "#FFD5C3" }}>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="left">
              <div className="tag">Upcoming Events</div>
              <h3 className="font-bold lg:text-3xl text-[#353535]" style={{ paddingTop: "2rem" }}>
                National Campus Retreat 2024
              </h3>
              <p className="max-w-[449px] lg:max-w-[60%] text-[#353535] mt-5">
              In this event we emphasize strategic thinking and planning,
               equipping future leaders with the ability to analyze complex
                situations and make informed decisions.
              </p>
              <div className="text-base" style={{ paddingTop: "2rem" }}>
                <ul>
                  <li>Date: In view</li>
                  <li>
                    Venue: TBD
                  </li>
                  <li>Registration: TBD</li>
                </ul>
              </div>
              <div style={{ padding: "3rem 0" }} className="btn-parent">
                <div className="btn whitespace-nowrap">Register Now</div>
                <div className="btn whitespace-nowrap" style={{ paddingLeft: "2rem" }}>
                  Learn More
                </div>
              </div>
            </div>
            <div className="right">
              <img src="./right.png" alt="" />
            </div>
          </div>
        </div>

        {/* second */}
        <div className="py-8 lg:py-16 lg:px-32 px-4" style={{ background: "#E9EEEA" }}>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="left">
              <div className="tag">Upcoming Events</div>
              <h3 className="font-bold lg:text-3xl text-[#353535]" style={{ paddingTop: "2rem" }}>Rendezvous 2023</h3>
              <p style={{ paddingTop: "1rem" }}>
              Year-End Celebration to cherish the memories of the past year 
              and welcome the new one with a burst of excitement! with 
              food, vibrant music and thrilling game.
              </p>
              <div className="other" style={{ paddingTop: "2rem" }}>
                <ul>
                  <li>Date: In view</li>
                  <li style={{ padding: "0.8rem 0" }}>
                    Venue: TBD
                  </li>
                  <li>Registration: TBD</li>
                </ul>
              </div>
              <div style={{ padding: "3rem 0" }} className="btn-parent">
                <div className="btn whitespace-nowrap">Register Now</div>
                <div className="btn whitespace-nowrap" style={{ paddingLeft: "2rem" }}>
                  Learn More
                </div>
              </div>
            </div>
            <div className="right">
              <img src="./right2.png" alt="" />
            </div>
          </div>
        </div>
        {/* Third */}
        <div className="py-8 lg:py-16 lg:px-32 px-4" style={{ background: "#ECDECC" }}>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="left">
              <div className="tag">Upcoming Events</div>
              <h3 className="font-bold lg:text-3xl text-[#353535]" style={{ paddingTop: "2rem" }}>
                S.W.A.T Creatives Conference
              </h3>
              <p style={{ paddingTop: "1rem" }}>
              A transformative event exploring creativity, innovation, 
              and spiritual intelligence for personal and professional growth.
              </p>
              <div className="other" style={{ paddingTop: "2rem" }}>
                <ul>
                  <li>Date: 14t-15th October 2023</li>
                  <li style={{ padding: "0.8rem 0" }}>
                    Venue: LCCI, Ikeja, Lagos
                  </li>
                  <li>Registration: N10,000</li>
                </ul>
              </div>
              <div style={{ padding: "3rem 0" }} className="btn-parent">
                <div className="btn whitespace-nowrap">Register Now</div>
                <div className="btn whitespace-nowrap" style={{ paddingLeft: "2rem" }}>
                  Learn More
                </div>
              </div>
            </div>
            <div className="right">
              <img src="./right3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PinningSection;
