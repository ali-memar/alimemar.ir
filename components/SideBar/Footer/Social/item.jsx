import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ItemSocial = (props) => {
    return (
        <div className="item-social">
            <a className="hover:opacity-70 transition" href={props.url}
               target="blank" title={props.title} aria-label={props.title}>
                <FontAwesomeIcon icon={['fab', `${props.icon}`]} />
            </a>
        </div>
    );
};

export default ItemSocial;
