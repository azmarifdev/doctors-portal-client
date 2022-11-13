import React from 'react';

const Review = ({ review }) => {
    const { reviewText, photo, name, country } = review;
    return (
        <div className="p-6 card card-body shadow-lg bg-slate-200">
            <h1>{reviewText}</h1>
            <div className="flex my-4 gap-4">
                <figure>
                    <img src={photo} className="w-14" alt="" />
                </figure>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-semibold">{name}</h1>
                    <h1>{country}</h1>
                </div>
            </div>
        </div>
    );
};

export default Review;
