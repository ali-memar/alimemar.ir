import React from 'react';
import HeaderSideBar from "./Header";
import BodySideBar from "./Body";
import FooterSideBar from "./Footer";

const SideBar = (props) => {
    return (
        <section id="side-menu"
                 className={`absolute w-72 z-20 h-screen transition-0.5 -left-72 lg:left-0 ${props.toggleMenu ? "!left-0" : ""}`}>
            <div
                className="wrapper-side-menu bg-[#20202a] h-full flex flex-col overflow-y-scroll scroll-slider !p-0 fixed w-72">
                <HeaderSideBar/>
                <BodySideBar/>
                <FooterSideBar/>
            </div>
        </section>
    );
};

export default SideBar;
