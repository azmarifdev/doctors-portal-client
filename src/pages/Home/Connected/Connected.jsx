import React from 'react';
import bg from '../../../assets/images/appointment.png'

const Connected = () => {
    return (
        <div
            className="flex justify-center items-center"
            style={{ background: `url(${bg})` }}>
            <div className="">
                <div className='text-center'>
                    <h1 className="text-primary font-semibold text-lg">
                        Contact Us
                    </h1>
                    <h1 className="text-white font-bold text-2xl">
                        Stay connected with us
                    </h1>
                </div>
                <form>
                    <input w- type="email" />
                </form>
            </div>
        </div>
    );
};

export default Connected;