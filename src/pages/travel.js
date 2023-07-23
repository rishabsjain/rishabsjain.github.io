import React from 'react';
import TravelCarousel from '../components/TravelCarousel';
 
//Need to figure out how to fix the sizing issue on the website
const Travel = () => {
    return (
        <React.Fragment>
        <h2> This is to document some of my travels and the various tips I have for each place I visited</h2>
        <section>
        <TravelCarousel/>
        </section>
        
        </React.Fragment>
    );
};
 
export default Travel;