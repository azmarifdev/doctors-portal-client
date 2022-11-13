import React from 'react';
import banner from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';

const Banner = () => {
    return (
        <div>
            <div
                className="hero bg-opacity-0"
                style={{ background: `url(${bg})`, opacity: 1 }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="lg:w-1/2 rounded-lg shadow-2xl"
                        alt=""
                    />
                    <div className="">
                        <h1 className="text-5xl font-bold">
                            Your New Smile Starts Here
                        </h1>
                        <p className="py-6">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                        </p>
                        <ButtonPrimary>Get Started</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
