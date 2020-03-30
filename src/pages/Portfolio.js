import React from "react";
import Card from "../components/Card";
import portfolio from "../db/portfolio.json";
import "./pages.css";
 
function PortfolioCard() {
    return (
        <div className="container">
            <div className="row centered" >
                {portfolio.map((portfolio) => {
                    return (
                        <div className="col-sm-4 col-md-4">
                            <Card {...portfolio} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PortfolioCard;


