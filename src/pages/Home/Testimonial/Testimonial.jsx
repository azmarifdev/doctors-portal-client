import React from 'react';
import icon from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            reviewText:
                'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            photo: people1,
            name: 'Maruf Chowdhury',
            country: 'Sweden',
        },
        {
            id: 2,
            reviewText:
                'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            photo: people2,
            name: 'Af Nan',
            country: 'England',
        },
        {
            id: 3,
            reviewText:
                'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            photo: people3,
            name: 'RS Ruhul',
            country: 'America',
        },
    ];
    return (
        <div>
            <div className="flex justify-between mx-10 items-center">
                <div>
                    <h1>Testimonial</h1>
                    <h1>What Our Patients Says</h1>
                </div>
                <figure>
                    <img src={icon} className="w-40" alt="" />
                </figure>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-6 lg:grid-cols-3">
                {reviews.map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
