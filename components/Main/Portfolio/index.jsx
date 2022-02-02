import React, {useState} from 'react';
import WrapperPortfolio from "./wrapper";

const Portfolio = () => {
    const [filterTech, setFilterTech] = useState("All");

    return (
        <section id="works" className="px-8 text-white mt-6 mb-8 lg:mt-0 overflow-hidden">
            <h2 className="mb-6 font-bold text-xl">Portfolio</h2>
            <div className={"text-center my-5"}>
                <span className={`mx-3 cursor-pointer ${filterTech === "All" ? "text-brand" : ""}`}
                      onClick={() => {
                          setFilterTech("All")
                      }}>All</span>
                <span className={`mx-3 cursor-pointer ${filterTech === "Bootstrap" ? "text-brand" : ""}`}
                      onClick={() => {
                          setFilterTech("Bootstrap")
                      }}>Bootstrap</span>
                <span className={`mx-3 cursor-pointer ${filterTech === "Tailwind" ? "text-brand" : ""}`}
                      onClick={() => {
                          setFilterTech("Tailwind")
                      }}>Tailwind</span>
                <span className={`mx-3 cursor-pointer ${filterTech === "Js" ? "text-brand" : ""}`}
                      onClick={() => {
                          setFilterTech("Js")
                      }}>Js</span>
            </div>
            <WrapperPortfolio filterTech={filterTech}/>
        </section>
    );
};

export default Portfolio;
