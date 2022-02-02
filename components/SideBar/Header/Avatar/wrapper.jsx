import React from 'react';

const WrapperAvatar = () => {
    return (
        <div className="wrapper-avatar relative">
            <img className="rounded-full mx-auto w-24"
                 src="" alt="avatar"/>
            <div className="ping absolute right-20 bottom-0">
                <span className="flex h-3 w-3 relative">
                    <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6e6e76] opacity-75"/>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand"/>
                </span>
            </div>
        </div>
    );
};

export default WrapperAvatar;
