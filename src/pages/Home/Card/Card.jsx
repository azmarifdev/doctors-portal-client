import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import CardInfo from './CardInfo';

const Card = () => {
    const cardsInfo = [
        {
            id: 1,
            icon: clock,
            title: 'Opening Hours',
            info: 'Lorem Ipsum is simply dummy text of the pri',
            bg_class: 'bg-gradient-to-r from-primary to-secondary',
        },
        {
            id: 2,
            icon: marker,
            title: 'Visit our location',
            info: 'Brooklyn, NY 10036, United States',
            bg_class: 'bg-accent',
        },
        {
            id: 3,
            icon: phone,
            title: 'Contact us now',
            info: '+000 123 456789',
            bg_class: 'bg-gradient-to-r from-secondary to-primary',
        },
    ];
    return (
        <div className="grid gap-6 my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cardsInfo.map((cardInfo) => (
                <CardInfo cardInfo={cardInfo} key={cardInfo.id}></CardInfo>
            ))}
        </div>
    );
};

export default Card;
