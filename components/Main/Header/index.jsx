import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
    const start = "<";
    const end = ">";
    return (
        <div className="wrapper-header-main relative overflow-hidden h-96 sm:h-[440px]">
            <img src="cover-header.jpg" alt="background"/>
            <div
                className="wrapper-content-header px-8 absolute top-0 w-full h-full flex overflow-hidden">
                <div className="img-content-header w-full h-80 mx-auto relative overflow-hidden mt-14">
                    <img src="cover-header.jpg" alt="background"/>

                    <div
                        className="text-white absolute top-0 flex flex-col justify-evenly w-full h-80 py-14 px-4 sm:px-14 text-center lg:text-left transition-0.5">
                        <h1 className="font-extrabold text-xl sm:text-4xl mb-4">
                            Front-End coding,<br/> the pleasure of creation
                        </h1>
                        <div>
                            {start}<span className="font-mono text-sm text-brand">code</span>{end}
                            <ReactTypingEffect
                                text={["Interested in Front-End.", "Familiar with UI & UX and web concepts.", "In search of opportunity and experience.", "Developing..."]}
                                className={"font-mono text-sm mx-1"}
                                speed={100}
                                eraseSpeed={75}
                                eraseDelay={2500}
                                typingDelay={500}
                            />
                            {start}/<span className="font-mono text-sm text-brand">code</span>{end}
                        </div>
                        <a className="font-mono text-sm bg-brand py-3 mt-7 text-black font-extrabold tracking-widest w-40 block text-center mx-auto lg:ml-0 hover:opacity-70 transition"
                           href="#works">Lets Go...
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
