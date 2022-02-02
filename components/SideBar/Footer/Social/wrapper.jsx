import React from 'react';
import ItemSocial from "./item";

const WrapperSocial = () => {
    return (
        <div className="social flex justify-center h-12 items-center gap-6">
            <ItemSocial url={"https://linkedin.com/in/alimemar/"}
                        title={"alimemar"}
                        icon={"linkedin-in"}
            />
            <ItemSocial url={"https://github.com/ali-memar"}
                        title={"ali-memar"}
                        icon={"github"}
            />
            <ItemSocial url={"#"}
                        title={"alimemar.ir"}
                        icon={"instagram"}
            />
        </div>
    );
};

export default WrapperSocial;
