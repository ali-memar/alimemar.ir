import React from 'react';

const ToggleBtn = (props) => {
    return (
        <div
            className={`wrapper-toggle-btn fixed top-9 -left-2.5 z-20 transition-0.5 lg:hidden ${props.toggleMenu ? "!left-[276px]" : ""}`}>
            <button type="menu"
                    className="toggle-btn bg-[#24242f] text-[#8c8c8c] transform -rotate-90 outline-none rounded-b-full px-4 py-1 font-bold text-2xl shadow"
                    onClick={() => {
                        props.setToggleMenu(!props.toggleMenu)
                    }}>
                <img className={`transition-0.5 !animate-bounce ${props.toggleMenu ? "rotate-180" : ""}`}
                     src="arrow-menu.png" alt="arrow"/>
            </button>
        </div>
    );
};

export default ToggleBtn;
