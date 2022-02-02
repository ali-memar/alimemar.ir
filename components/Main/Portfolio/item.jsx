import React, {useEffect, useState} from 'react';

const ItemPortfolio = (props) => {

    const techs = props.techs.split(",").map(Function.prototype.call, String.prototype.trim);
    const [isHidden, setIsHidden] = useState();

    useEffect(() => {
        if (props.filterTech === "All") {
            setIsHidden(false)
        } else if (techs.includes(props.filterTech)) {
            setIsHidden(false)
        } else {
            setIsHidden(true)
        }
    }, [props.filterTech]);

    return (
        <div className={`item-work relative ${isHidden ? "hidden" : ""}`}>
            <a className="group" href={props.url} target="blank" title={props.titleUrl}
               aria-label={props.titleUrl}>
                <div
                    className="bg-[#191923] bg-opacity-95 opacity-0 hover:opacity-100 transition absolute top-0 left-0 w-full h-full z-10 p-4">
                    <div
                        className="wrapper-description-work relative flex flex-col text-center h-full justify-between border-t border border-dashed border-gray-400 text-brand">
                        <h3
                            className="title-work text-xl font-semibold h-full w-full group-hover:translate-y-[60%] ease-linear transition-transform">
                            {props.title}
                        </h3>
                        <hr
                            className="mx-auto w-11 h-[1px] scale-0 group-hover:scale-100 ease-linear transition-transform bg-brand border-0"/>
                        <p
                            className="description-work text-gray-300 font-light text-sm h-full w-full group-hover:translate-y-[-65%] ease-linear transition-transform self-end flex justify-center items-end">
                            {props.techs}
                        </p>
                    </div>
                </div>
                <div className="wrapper-img-work h-full w-full overflow-hidden">
                    <img
                        className="img-work mx-aut group-hover:scale-125 ease-linear transition-transform h-full w-full object-cover object-center"
                        src={props.cover} alt={props.titleUrl}/>
                </div>
            </a>
        </div>
    );
};

export default ItemPortfolio;
