import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const AvailableAppointment = ({ selectedDate }) =>
{
    const [ options, setOptions ] = useState([])
    useEffect(() =>
    {
        fetch('AppointmentOptions.json')
            .then((res) => res.json())
            .then((data) => setOptions(data));
    }, [])

    return (
        <div>
            <h1 className="text-center">
                You have selected : {format(selectedDate, 'PP')}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6">
                {options.map(option => <AppointmentOption key={option._id} option={option} />)}
            </div>
        </div>
    );
};

export default AvailableAppointment;
