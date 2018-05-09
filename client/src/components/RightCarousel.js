import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import whatIsIt from '../assets/images/standing-desk.svg';
import whyUseIt from '../assets/images/robot.svg';
import easeOfUse from '../assets/images/launch.svg';
require('../styles/right_carousel.css');

export default class RightCarousel extends Component {

    render() {

        return(
            <Carousel 
                className="right_carousel" 
                dragging={true}
                autoplay={true}
                autoplayInterval={3000}
                edgeEasing="easeInBounce"
                speed={700}
            >
                <div className="carousel_slide">
                    <img className="what_is_it_image" src={whatIsIt} alt="What is it?"/>
                    <h3>Live schedule your timetable with friends / colleagues.</h3>
                </div>
                <div className="carousel_slide">
                    <img className="why_use_it_image" src={whyUseIt} alt="What is it?"/>
                    <h3>Use it to enhance productivity by avoiding schedule collision.</h3>
                </div>
                <div className="carousel_slide">
                    <img className="ease_of_use_image" src={easeOfUse} alt="What is it?"/>
                    <h3>Easy to use. Manage on the go. Make Remote life easier.</h3>
                </div>
            </Carousel>
        );
    }
}