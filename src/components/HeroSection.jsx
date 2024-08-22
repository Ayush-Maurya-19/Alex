import React from "react";
import "../App.css";

const HeroSection = () => {
  return (
    <div className="background">
      <img
        className="heroimg"
        src="/assets/Emailer_02-Final-05.png"
        alt="bannerimage"
      />
      <div className="hero1 pt-4">
        <img
          width={"100"}
          height={"50"}
          className="logo"
          src="/assets/test.png"
          alt="bannerimage"
        />
        <img
          width={"400"}
          src="/assets/time.png"
          alt="limitedTimeOfferimg"
          className="limitedTimeOfferimg"
        />
      </div>
      <div className="hero2">
        <p className="herotext1">
          The Alex{" "}
          <span className="herotext1.1" style={{ fontWeight: "700" }}>
            Monsoon
          </span>
          <span className="herotext1.2"> Special</span>
        </p>
        <img
          className="heroimg2"
          src="/assets/Emailer_02-Final-04.png"
          alt="ALEXMonsoonSpecialImg"
        />
      </div>
      {/*------------------------ Section 2 ------------------------*/}
      <div>
        <p className="herotext2">
          <span style={{ fontWeight: "650" }}>The Package</span> Includes
        </p>
        {/*------------------------ Section 2 Images ------------------------*/}
        <div className="px-4">
          <div className="row px-md-5  my-5   text-white">
            <div className="row my-1">
              <div className="col-6 p-0">
                <div className="row m-0">
                  <div className="col-4">
                    <img src="/assets/Emailer_02-09.png" alt="sdsfghjkl" />
                  </div>
                  <div className="col-8">
                    <p>Electromagnet with Demagnetizer</p>
                  </div>
                </div>
              </div>
              <div className="col-6 ">
                <div className="row">
                  <div className="col-4">
                    <img src="/assets/Emailer_02-12.png" alt="sdsfghjkl" />
                  </div>
                  <div className="col-8">
                    <p>Auto Lubrication</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-2 m-0 p-0">
              <div className="col-6 ">
                <div className="row ">
                  <div className="col-4">
                    <img src="/assets/Emailer_02-10.png" alt="sdsfghjkl" />
                  </div>
                  <div className="col-8">
                    <p>Coolant Attachment</p>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="row ">
                  <div className="col-4">
                    <img
                      src="/assets/Emailer_02-Final-12.png"
                      alt="sdsfghjkl"
                    />
                  </div>
                  <div className="col-8 p-0">
                    <p>Servo Controlled In-feed axis with MPG</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-0 p-0">
              <div className="col-6 ">
                <div className="row">
                  <div className="col-4">
                    <img
                      src="/assets/Emailer_02-Final-10.png"
                      alt="sdsfghjkl"
                    />
                  </div>
                  <div className="col-8 ">
                    <p>Semi-Automatic Dress Cycle with Auto-retract</p>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="row">
                  <div className="col-4">
                    <img
                      src="/assets/Emailer_02-Final-11.png"
                      alt="sdsfghjkl"
                    />
                  </div>
                  <div className="col-8">
                    <p>Unbeatable Value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*------------------------ Section 3 ------------------------*/}
      <div className="text-center  px-0">
        <p className="section3Text">Select your Table Size</p>
      </div>
      <div className="row m-0">
        <div className="col p-0">
          <div className="tablesizeimg">
            <p>800 x 400 mm</p>
          </div>
        </div>
        <div className="col p-0 ">
          <div className="tablesizeimg">
            <p>800 x 400 mm</p>
          </div>
        </div>
      </div>
      {/*------------------------ Section 3 ------------------------*/}

      <div className=" section3  pb-4">
        <h1 className="whyChooseText">Why Choose ALEX</h1>
        <div className="section3points">
          <div className="row">
            <div className="col-2 ms-4">
              <img width={55} src="/assets/gtr.png" alt="section3" />
            </div>
            <div className="col-8 text-start ms-1 pt-3 ">
              <p>When every Micron Counts</p>
              <p>When Speed Matters</p>
              <p>Where Stiggness = Best in Class Finish</p>
              <p>ALEX Intelligencce programmed into the macchine</p>
              <p>50+ Years of Reliability and Service</p>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------- section 4 ----------------*/}
      <div className="text-center">
        <h1 style={{ fontWeight: "700" }}>Hear from Our Happy Customers</h1>
        <h4 style={{ fontWeight: "500" }}>Check out our client testimonials</h4>
        <div className="row section4ClientsImg">
          <div className="col-6">
            <img
              width={160}
              src="/assets/pune-testimonial-2-scaled.webp"
              alt="client1"
            />
          </div>
          <div className="col-6">
            <img
              width={160}
              src="/assets/pune-testimonial-1-scaled.webp"
              alt="client2"
            />
          </div>
        </div>
      </div>
      {/* --------------------- section 5 ----------------*/}

      <div className="section5-bg">
        <div className="row mx-0">
          <div className="col-5 section5LeftText1">
            <p className="m-0 text-center">Experience Precisoin with ALEX.</p>
            <p className="text-center ">Book Your Mansoon Package, Today!</p>
          </div>
          <div className="col-7 section5LeftText2">
            <div>
              <p>www.alexmachinetools.com</p>
            </div>
            <div>
              <p>+91704591771</p>
            </div>
            <div>
              <p>contact@alexmachinetools.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------- section 6 ----------------*/}
      <div className="section6-bg">
        <div className="d-flex flex-row justify-content-center gap-3 ms-5 mx-0">
          <div className=" ">
            <p>Follow us on - </p>
          </div>
          <div className="">
            <img src="/assets/icon1.png" width={30} alt="" />
          </div>

          <div className="">
            <img src="/assets/icinyou.png" width={30} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
