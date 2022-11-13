import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {
    return (
        <header className="my-6">
            <div className="hero">
                <div className="hero-content flex flex-col gap-20 lg:flex-row-reverse justify-evenly">
                    <figure>
                        <img
                            src={chair}
                            className="max-w-sm rounded-lg shadow-lg"
                            alt=""
                        />
                    </figure>
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;