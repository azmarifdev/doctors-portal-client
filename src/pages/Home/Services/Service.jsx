import React from 'react';

const Service = ({ serviceCard }) =>
{
    const { title, info, icon } = serviceCard;
    return (
        <div className="card bg-slate-200 shadow-xl p-6">
            <figure>
                <img src={icon} alt="" />
            </figure>
            <div className="text-center card-body">
                <h1 className="font-bold leading-8">{title}</h1>
                <h2 className="font-semibold">{info}</h2>
            </div>
        </div>
    );
};

export default Service;