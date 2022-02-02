import React from 'react';
import ItemPortfolio from "./item";

const WrapperPortfolio = (props) => {
    return (
        <dev className="wrapper-works grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {/*qombroker*/}
            <ItemPortfolio url={"https://qombroker.ir/"}
                           titleurl={"qombroker"}
                           title={"Qom Broker"}
                           techs={"HTML, CSS, Bootstrap, Js"}
                           cover={"qombroker.jpg"}
                           filterTech={props.filterTech}
            />
            {/*sahebKhoune*/}
            <ItemPortfolio url={"https://alimemar.ir/SahebKhoune/"}
                           titleurl={"SahebKhoune"}
                           title={"Saheb Khoune"}
                           techs={"HTML, CSS, Bootstrap, Js"}
                           cover={"saheb-khoune.jpg"}
                           filterTech={props.filterTech}
            />
            {/*hot coffee*/}
            <ItemPortfolio url={"https://alimemar.ir/HotCoffee/"}
                           titleurl={"HotCoffee"}
                           title={"Hot Coffee"}
                           techs={"HTML, CSS, Tailwind"}
                           cover={"hot-coffee.jpg"}
                           filterTech={props.filterTech}
            />
            {/*travel blog*/}
            <ItemPortfolio url={"https://alimemar.ir/TravelBlog/"}
                           titleurl={"Travel-Blog"}
                           title={"Travel Blog"}
                           techs={"HTML, CSS, Js, Tailwind"}
                           cover={"travel-blog.jpg"}
                           filterTech={props.filterTech}
            />
            {/*mntn */}
            <ItemPortfolio url={"https://alimemar.ir/MNTN/"}
                           titleurl={"MNTN"}
                           title={"MNTN"}
                           techs={"HTML, CSS, Tailwind"}
                           cover={"mntn.jpg"}
                           filterTech={props.filterTech}
            />
            {/*photographer blog*/}
            <ItemPortfolio url={"https://alimemar.ir/Photographer-Blog/"}
                           titleurl={"Photographer-Blog"}
                           title={"Photographer"}
                           techs={"HTML, CSS, Js, Tailwind"}
                           cover={"photographer-blog.jpg"}
                           filterTech={props.filterTech}
            />
            {/*qwery */}
            <ItemPortfolio url={"https://alimemar.ir/QWERy/"}
                           titleurl={"QWERy"}
                           title={"QWERy"}
                           techs={"HTML, CSS, Js, Tailwind"}
                           cover={"qwery.jpg"}
                           filterTech={props.filterTech}
            />
        </dev>
    );
};

export default WrapperPortfolio;
