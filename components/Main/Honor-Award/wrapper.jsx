import React from 'react';
import ItemHonorAward from "./item";

const WrapperHonorAward = () => {
    return (
        <div className="warpper-honor-award px-8 text-white mt-6 mb-8 lg:mt-0">
            <h2 className="font-bold text-xl">Honor & Award</h2>
            <ItemHonorAward title={"ICPC Competition"}
                            date={"Dec 2020"}
                            description={"Twenty-ninth of Country and second of Qom universities in the final ICPC Competition."}
            />
        </div>
    );
};

export default WrapperHonorAward;
