import React from 'react';

const ItemHonorAward = (props) => {
    return (
        <div className="item-honor-award relative border-l-2 border-brand pl-3 ml-1 mt-6">
            <h3 className="title-honor-award font-semibold text-base sm:text-lg !leading-3">
                {props.title}
            </h3>
            <p className="date-honor-award text-[#8c8c8e] mb-1.5 mt-2.5 text-sm sm:text-base">
                {props.date}
            </p>
            <p className="description-honor-award text-[#cacaca] text-sm sm:text-base">
                {props.description}
            </p>
        </div>
    );
};

export default ItemHonorAward;
