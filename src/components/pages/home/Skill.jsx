function Skill({ color, progressValue, children }) {
    return (
        <div>
            <div>{children} {progressValue}%</div>
            <div className="progress" role="progressbar" aria-label={`Progress in ${children}`} aria-valuenow={progressValue} aria-valuemin="0" aria-valuemax="100">
                <div className={`progress-bar bg-${color}`} style={{ width: `${progressValue}%` }}></div>
            </div>
        </div>
    );
}

export default Skill;