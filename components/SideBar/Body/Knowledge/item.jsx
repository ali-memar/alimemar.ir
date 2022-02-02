import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const ItemKnowledge = (props) => {
    return (
        <div className="item-knowledge text-sm mb-1">
            <span className="text-[#8c8c8c]">
                <span className="text-brand mr-2 text-[10px]">
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span>{props.skills}</span>
            </span>
        </div>
    );
};

export default ItemKnowledge;
