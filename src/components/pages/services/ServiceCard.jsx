function ServiceCard({ serviceCardInfo }) {
    const {id, title, body, svg: { classType, pathD } } = serviceCardInfo;
    return <div id={`card-${id}`} className="col-md card d-flex align-items-center justify-content-center text-center p-3 gap-3" style={{ width: "18rem"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class={`bi bi-${classType} text-primary`} viewBox="0 0 16 16">
            <path d={`${pathD}`} />
        </svg>
        <div className="card-body">
            <h2 className="card-title nunito-sans--bold fs-5">{title}</h2>
            <p className="card-text fs-6">{body}</p>
        </div>
    </div>
}

export default ServiceCard;