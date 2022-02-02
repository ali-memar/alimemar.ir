import React from 'react';

const ItemSpecification = (props) => {
    return (
        <div className="item-specification mb-2 flex justify-between">
            <p className="">{props.title}:</p>
            <p className="text-[#8c8c8c]">{props.value}</p>
        </div>
    );
};

export default ItemSpecification;
