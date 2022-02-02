import {useState} from "react";
import Head from 'next/head'
import SideBar from "../components/SideBar";
import Main from "../components/Main";

const Home = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className={"!max-w-[1440px] mx-auto relative"}>
            <Head>
                <title>Ali Memar</title>
                <meta charSet="utf-8"/>
                <meta name="description" content="Ali Memar | Front-End Developer"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:title" content="Ali Memar"/>
                <meta property="og:url" content="alimemar.ir"/>
                <link rel="icon" href="favicon.ico"/>
            </Head>

            <div
                className={`cover-bg-toggle-menu absolute w-full h-full bg-[#1e1e28e0] z-20 transition-0.5 ${!toggleMenu ? "opacity-0 z-0" : ""}`}
                onClick={() => {
                    setToggleMenu(false)
                }}/>

            {/*side bar*/}
            <SideBar toggleMenu={toggleMenu}/>

            {/* main */}
            <Main toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        </div>
    );
};

export default Home;
