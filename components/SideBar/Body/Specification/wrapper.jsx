import React from 'react';
import ItemSpecification from "./item";

const WrapperSpecification = () => {
    return (
        <div
            className="wrapper-specifications py-4 font-semibold text-sm text-white border-b border-[#404047] mb-3">
            <ItemSpecification title={"Country"} value={"Iran"}/>
            <ItemSpecification title={"City"} value={"Qom"}/>
            <ItemSpecification title={"Age"} value={"20"}/>
            <ItemSpecification title={"Email"} value={"alimemar80@gmail.com"}/>
        </div>
    );
};

export default WrapperSpecification;
