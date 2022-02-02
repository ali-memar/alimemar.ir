import React from 'react';

const ItemCoding = (props) => {
    return (
        <div className="item-coding justify-center items-center mb-4">
            <div className="value-item-coding flex justify-between mb-2">
                <span>{props.lang}</span><span className="text-[#cacaca]">{props.amount}%</span>
            </div>
            <div className="bg-[#191923] rounded-full w-full block">
                <div className={'w-[' + props.amount + '%]'}>
                    <div className="progress-value rounded-full bg-brand h-1 overflow-hidden"/>
                </div>
            </div>
        </div>
    );
};

export default ItemCoding;
