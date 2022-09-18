import React from 'react';

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-left pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#3c96bd]">About</p>
                    </div>
                </div>

                <div></div>

                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-left text-4xl font-bold">
                        <p>
                            Hi, I'm Dan. Please take a look around and check out my work.
                        </p>
                    </div>

                    <div>
                        <p>
                            I am passionate about building amazing websites that improve the lives of those around me.
                            I specialise in web development for clients such as individuals and small businesses using
                            the latest technologies to give your visitors the best possible experience. Reach out to me
                            to find out what I can do for you.

                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;
