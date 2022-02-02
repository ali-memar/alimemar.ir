import React from 'react';
import ItemKnowledge from "./item";

const WrapperKnowledge = () => {
    return (
        <div className="wrapper-knowledge py-4 text-white mb-4">
            <h3 className="font-bold text-sm mb-5">Knowledge</h3>
            <ItemKnowledge skills={"Bootstrap, TailwindCss, Sass"}/>
            <ItemKnowledge skills={"jQuery, ReactJs, NextJS"}/>
            <ItemKnowledge skills={"AngularJs, VueJs, NuxtJs"}/>
            <ItemKnowledge skills={"Git"}/>
        </div>
    );
};

export default WrapperKnowledge;
