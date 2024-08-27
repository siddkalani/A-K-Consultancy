import React from 'react';

const Report = () => {
    return (
        <div className="mt-[var(--section-padding)] h-full w-full flex-custom-center bg-black">
            <div className='w-[90%] '>
            <div className="flex flex-col sm:flex-row py-[var(--section-padding)] bg-black">
                <div className="flex-1 flex flex-col">
                    <div className="mt-auto mb-auto text-white space-y-8">
                        <h2 className="text-2 text-white">Our latest report on thought Leadership</h2>
                        <p className="text-4 text-white">
                            Opposing right-wing extremism - the Thought Leadership Award 2024 is dedicated to a political topic for the first time. Find out which of the 250 largest German companies successfully position themselves.
                        </p>
                        <p className="text-4 text-white">
                            Opposing right-wing extremism - the Thought Leadership Award 2024 is dedicated to a political topic for the first time. Find out which of the 250 largest German companies successfully position themselves.
                        </p>
                        <p className="text-4 text-white">
                            Opposing right-wing extremism - the Thought Leadership Award 2024 is dedicated to a political topic for the first time. Find out which of the 250 largest German companies successfully position themselves.
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex justify-end items-center mt-8 sm:mt-0">
                    <a href="/thoughtleadershipaward.html">
                        <img
                            alt=""
                            className="object-fill xs:h-100vh h-[33rem] w-[27rem]"
                            loading="lazy"
                            srcSet="/fileadmin/user_upload/Gegen_Rechts.png"
                        />
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Report;
