import React from 'react';

const AppointmentOption = ({ option }) =>
{
    const { slots, name } = option
    console.log(option);
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Not Available'}</p>
                <p>
                    {slots.length} {slots.length > 0 ? 'spaces' : 'space'}
                </p>
                <div className="card-actions justify-end">
                    <button className="btn mx-auto btn-primary">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;