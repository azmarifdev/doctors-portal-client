import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import bg from '../../../assets/images/appointment.png';
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <div
            className="bg-slate-200 flex justify-center mt-32 mb-10 items-center gap-12"
            style={{ background: `url(${bg})` }}>
            <figure>
                <img src={doctor} className="-mt-32" alt="" />
            </figure>
            <div className="w-1/2">
                <h1 className="text-primary text-2xl font-bold">Appointment</h1>
                <h1 className="text-white font-bold text-4xl my-8">
                    Make an appointment Today
                </h1>
                <h1 className="text-white mb-8">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsumis that it has a
                    more-or-less normal distribution of letters,as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page
                </h1>
                <Link to="/appointment">
                    <ButtonPrimary>Get Started</ButtonPrimary>
                </Link>
            </div>
        </div>
    );
};

export default Appointment;
