import React from 'react';
import ToggleBtn from "../ToggleBtn";
import Header from "./Header";
import Portfolio from "./Portfolio";
import HonorAward from "./Honor-Award";
import Footer from "./Footer";

const Main = (props) => {
    return (
        <section id="main">
            <div
                className={`wrapper-main flex flex-col min-h-screen relative transition-0.5 lg:ml-72 ${props.toggleMenu ? "!ml-0" : ""}`}>

                {/*toggle btn*/}
                <ToggleBtn toggleMenu={props.toggleMenu} setToggleMenu={props.setToggleMenu}/>

                {/*header*/}
                <Header/>

                {/*portfolio */}
                <Portfolio/>

                {/*honor & award*/}
                <HonorAward/>

                {/*footer*/}
                <Footer/>
            </div>
        </section>
    );
};

export default Main;
