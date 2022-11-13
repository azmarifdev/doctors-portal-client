import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesCard = [
        {
            id: 1,
            icon: cavity,
            title: 'Fluoride Treatment',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 2,
            icon: fluoride,
            title: 'Cavity Filling',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 3,
            icon: whitening,
            title: 'Teeth Whitening',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
    ];
    return (
        <div>
            <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-primary">
                    Our Services
                </h3>
                <h2 className="text-2xl font-semibold text-gray-900">
                    Services We Provide
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-6">
                {servicesCard.map((serviceCard) => (
                    <Service serviceCard={serviceCard} key={servicesCard.id} />
                ))}
            </div>
        </div>
    );
};

export default Services;
