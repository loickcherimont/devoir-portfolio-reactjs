import { useEffect, useState } from "react";
import RowPortfolio from "./RowPortfolio";
import "./portfolio.css";

function Portfolio() {
    const [portfolioRowsInfos, setPortfolioRowsInfos] = useState([]);
    useEffect(() => {

        const fetchPortfolioRowsInfos = async (url) => {

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des informations du portfolio.");
                }
                const data = await response.json();
                setPortfolioRowsInfos(data);
            } catch (error) {
                console.log(error);
            }
        }

        let ignore = false;

        fetchPortfolioRowsInfos('./api/portfolio.json');

        return () => {
            ignore = true;
        }
    }, []);
    return <>
        <img src={`./img/banner.jpg`} className="img-fluid" alt="Bannière" />
        <section className="d-flex flex-column align-items-center">
            <header className="d-flex flex-column align-items-center justify-content-center text-center">
                <h1 className="nunito-sans--bold">Portfolio</h1>
                <p>Voici quelques-unes de mes réalisations</p>
            </header>
            <hr className="border border-primary border-3 opacity-75" style={{ width: "25rem" }} />
            {/* <div className=""> */}
                {portfolioRowsInfos.map((rowsInfos, rowIdx) =>
                    <RowPortfolio key={rowIdx} rowInfos={rowsInfos} />
                )}
            {/* </div> */}


        </section >
    </>
}

export default Portfolio;