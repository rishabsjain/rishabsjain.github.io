import React from 'react';
import TravelCard from '../components/travelcard';

const listOfCards = [
    {
        title: "San Diego",
        desc: "Some Basic Recommendations for San Diego!",
        link: "",
    },
    {
    title: "Rome",
    desc: "Spent 10 weeks studying in Rome.",
    link: "https://docs.google.com/document/d/1RdcjNccSGktC8PjAoMC68owEXO50l7xYBKaxjcwi7ho/edit?usp=sharing",
    }

]

const showCards = () => {
    let toShow = []
    for(let i = 0; i < listOfCards.length; i++){
        let curCard = listOfCards[i]
        toShow.push(<TravelCard
            title= {curCard.title}
            desc= {curCard.desc}
            link= {curCard.link}
        />)
    }
    return (
        <div class="container-fluid">
            {toShow}
        </div>)
}

export default function Travel(){
return (
    <React.Fragment>
    <h2> Travel Guides!</h2>
    {showCards()}
    </React.Fragment>

)
};