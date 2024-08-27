import React from 'react';

const WhyUs = () => {
    return (
        <div className="mt-[var(--section-padding)] h-full w-full flex-custom-center ">
            <div className='w-[90%]'>
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 flex justify-between">
                        <div className="w-full">
                            <video
                                className="w-full object-contain"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/videos/BusinessAudit.mp4" type="video/mp4" className=''/>
                            </video>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center text-white space-y-8 mt-8 sm:mt-0">
                        <h2 className="text-2">Why You Might Consider Working With Us:</h2>
                        <div className="space-y-4">
                            <p className="text-4">
                                Sources
                                <br />
                                We monitor and evaluate more than 460 million sources of information every single day.
                            </p>
                            <p className="text-4">
                                Technology
                                <br />
                                Our systems work with the latest crawling technology and AI-powered text mining.
                            </p>
                            <p className="text-4">
                                Talent
                                <br />
                                Our monitoring and analytics experts excel in both digital media expertise and industry knowledge.
                            </p>
                            {/* <p className="text-4">
                                Insights
                                <br />
                                Our hybrid and customizable insight model sets the standard for advanced intelligence.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
