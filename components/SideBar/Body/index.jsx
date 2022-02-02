import React from 'react';
import WrapperSpecification from "./Specification/wrapper";
import WrapperCoding from "./Coding/wrapper";
import WrapperKnowledge from "./Knowledge/wrapper";

const BodySideBar = () => {
    return (
        <div className="body-profile p-7 pt-0 mt-52">
            <WrapperSpecification/>
            <WrapperCoding/>
            <WrapperKnowledge/>
        </div>
    );
};

export default BodySideBar;
