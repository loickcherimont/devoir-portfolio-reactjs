function PortfolioCard({ portfolioCardInfo }) {
    const { id, src, alt, title, shortDescription, footer } = portfolioCardInfo;
    return <div className="col-md">
        <div id={`card-${id}`} className="card text-center" style={{ maxWidth: "18rem" }}>
            <img src={`./img/portfolio/${src}`} className="card-img-top" alt={alt} />
            <div className="card-body">
                <h2 className="card-title nunito-sans--bold fs-5">{title}</h2>
                <p className="card-text">{shortDescription}</p>
                <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-body-secondary">{footer}</div>
        </div>
    </div>

}

export default PortfolioCard;