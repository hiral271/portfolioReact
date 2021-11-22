import React from "react";
import "./about.css"
import data from "../../data.json"

const About = () => (

    <div className="section about-section " id="about">
        <div className="container">
            <div className="row align-items-center flex-row-reverse">
                <div className="col-lg-6">
                    <div className="about-text go-to">
                        <h3 className="dark-color">About Me</h3>
                        <h6 className="theme-color lead">Web-Devloper </h6>
                        <p>Results-driven Web-developer professional with certificate from Rutgers coding Bootcamp. Seeking to leverage my professional expertise within software developer company’s and transition into an effective web-developer.</p>
                        <div className="row about-list">
                            <div className="col-md-6">
                                <div className="media">
                                    <label>Birthday</label>
                                    <p>22 july 1990</p>
                                </div>
                                <div className="media">
                                    <label>Age</label>
                                    <p>30 Yr</p>
                                </div>
                                <div className="media">
                                    <label>Origin</label>
                                    <p>India</p>
                                </div>
                                <div className="media">
                                    <label>Address</label>
                                    <p>New Jersey, USA</p>
                                </div>

                                <div className="media">
                                    <label>Freelance</label>
                                    <p>Available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-avatar"></div>
                </div>
            </div>
            <div className="counter">
                <div className="row">
                    <div className="col-6 col-lg-3">
                        <div className="count-data text-center">
                            <h6 className="count h2" data-to="500" data-speed="500">Rutgers Coding Bootcamp</h6>
                            <p className="m-0px font-w-600">GED</p>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="count-data text-center">
                            <h6 className="count h2" data-to="150" data-speed="150">FedEx Ground </h6>
                            <p className="m-0px font-w-600">Working now </p>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="count-data text-center">
                            <h6 className="count h2" data-to="850" data-speed="850">Administrator</h6>
                            <p className="m-0px font-w-600">India 2016-2018</p>
                        </div>
                    </div>
                    <div>


                    </div>

                </div>
            </div>

            <br></br>
            <div class="container">
                <h2>Expertise </h2>
                <div className="row">


                    <div id="boxs1">
                        <img id="js" src={data[8].link}>

                        </img>
                    </div><br></br>


                    <div id="boxs2">
                        <img id="mysql" src={data[9].link}></img>


                    </div><br></br>

                    <div id="boxs3">
                        <img id="html" src={data[10].link}></img>
                    </div><br></br>



                    <div id="boxs6">
                        <img id="css" src={data[13].link}></img>
                    </div><br></br>

                    <div id="boxs4">
                        <img id="react" src={data[11].link}></img>
                    </div><br></br>

                    <div id="boxs5">
                        <img id="bootstrap" src={data[12].link}></img>
                    </div><br></br>

                </div>







            </div>
        </div>
    </div>



);

export default About;
