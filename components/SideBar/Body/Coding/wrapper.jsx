import React from 'react';
import ItemCoding from "./item";

const WrapperCoding = () => {
    return (
        <div className="wrapper-program-language py-4 text-white border-b border-[#404047] mb-3">
            <h3 className="font-bold text-sm">Coding</h3>
            <div className="items-coding pt-5 pb-4 text-sm font-semibold">
                <ItemCoding lang={"HTML"} amount={"90"}/>
                <ItemCoding lang={"CSS"} amount={"95"}/>
                <ItemCoding lang={"Js"} amount={"70"}/>
                <ItemCoding lang={"C++"} amount={"55"}/>
            </div>
        </div>
    );
};

export default WrapperCoding;
