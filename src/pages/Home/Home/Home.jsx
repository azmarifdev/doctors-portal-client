import React from 'react';
import Appointment from '../AppointmentMake/AppointmentMake';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Care from '../Care/Care';
import Connected from '../Connected/Connected';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className="mx-5">
            <Banner />
            <Card />
            <Services />
            <Care />
            <Appointment />
            <Testimonial />
            <Connected/>
        </div>
    );
};

export default Home;
