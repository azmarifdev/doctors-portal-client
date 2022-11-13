import React from 'react';

const CardInfo = ({ cardInfo }) => {
    const { title, info, bg_class, icon } = cardInfo;
    console.log(cardInfo);
    return (
        <div className={`card text-white md:card-side p-6 shadow-xl ${bg_class}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default CardInfo;
