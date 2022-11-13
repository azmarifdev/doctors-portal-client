import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';
const Care = () => {
    return (
        <div className=" mx-auto flex justify-center">
            <div className="hero">
                <div className="hero-content flex-col gap-20 lg:flex-row">
                    <img
                        src={treatment}
                        alt=""
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <ButtonPrimary>Get Started</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;