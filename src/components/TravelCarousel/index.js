import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import JapanImage from '../../images/Japan.jpg'
import RomeImage from '../../images/Rome.jpg'
import SanDiegoImage from '../../images/SanDiego.jpg'
import {IMG} from './TravelCarouselElements.js'



const TravelCarousel = () => {
    return (
        <Carousel showThumbs={false}>
        <div >
            <a href="https://docs.google.com/document/d/1RdcjNccSGktC8PjAoMC68owEXO50l7xYBKaxjcwi7ho/edit?usp=sharing">
            <IMG src={RomeImage} />
            <p className="legend"> Some tips based on 10 weeks spent abroad! Click here to view the guide!   </p>
            </a>
        </div>
        <div>
            <a href="https://docs.google.com/document/d/1PVXGxkwPAS2jS7QHya0BkVRfNfdd4X6I0v0JMQLXJ8U/edit?usp=sharing">
            <IMG src={JapanImage} />
            <p className="legend"> Currently working on! Some tips for a month spent traveling across Japan! Click here to view the guide! </p>
            </a>
        </div>
        <div>
            <a href="https://docs.google.com/document/d/1q-SuVgerW12IWBVOO7bXDJZ62UzrJIdRia--apN4Ofk/edit?usp=sharing">
            <IMG src={SanDiegoImage} />
            <p className="legend"> Currently working on! Some tips from the city I grew up in! Click here to view the guide! </p>
            </a>
        </div>
    </Carousel>
    );
};
 
export default TravelCarousel;