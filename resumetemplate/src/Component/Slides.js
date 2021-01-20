
import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Login.css'

class Slides extends Component {
    render() {
        return (
            <div>


                <div align="center" className="w-30 bg-success" >

                    <div >

                        <Carousel >

                            <div class="s1-img">

                                <h1 class="display-3 text-primary"><b>SERVICES PROVIDED BY US</b></h1>
                                <h3 class="text-md-left  "><b>Alignment Options</b></h3>
                                <h4 class="text-md-left text-success "> -Center Alignment</h4>
                                <h4 class="text-md-left text-success ">  -Left Alignment</h4>
                                <h4 class="text-md-left text-success  ">  -Right Alignment</h4>
                                <h3 class="text-md-left  "><b>Downlod Option</b></h3>
                                <h4 class="text-md-left text-success "> -PDF Format</h4>
                            </div>
                            <div class="align-img ">
                                <h3 class="text-center text-primary "><b>Alignment Options</b></h3>

                            </div>
                            <div class="dow-img">
                                <h3 class="text-center text-primary "><b>Download Option</b></h3>
                            </div>
                            <div class="team-img">
                                <h3 class="text-center text-primary "><b>OUR TEAM</b></h3>
                                <h4 class="text-md-left text-success "> -Adesh Puthran</h4>
                                <h4 class="text-md-left text-success ">  -Akhila Relangi</h4>
                                <h4 class="text-md-left text-success  ">  -Chandu S</h4>
                                <h4 class="text-md-left text-success  ">  -Maneesha</h4>
                                <h4 class="text-md-left text-success  ">  -Laleeta Suryavanshi</h4>
                                <h4 class="text-md-left text-success  ">  -Shruti Gupta</h4>
                            </div>

                        </Carousel>
                        <div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }


}

export default Slides