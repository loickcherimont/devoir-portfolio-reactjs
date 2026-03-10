import PortfolioCard from "./PortfolioCard";

function RowPortfolio({rowInfos}) {
    console.log(rowInfos);
    return (
        <div className="row flex-column flex-md-row gap-3 p-3">
            {rowInfos.map((cardInfo, idx) => <PortfolioCard key={idx} portfolioCardInfo={cardInfo} />)}
        </div>
    );
}

export default RowPortfolio;