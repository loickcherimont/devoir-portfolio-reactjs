function FormField({ type, label, htmlFor }) {
    return type === "textarea"
        ?
        <div className="mb-3">
            <label htmlFor={htmlFor} className="form-label" style={{ width: "100%" }}>
                <textarea type="textarea" id={htmlFor} className="form-control contact__textarea" placeholder={label} required aria-required />
            </label>
        </div>
        : <div className="mb-3">
            <label type={type} htmlFor={htmlFor} className="form-label" style={{ width: "100%" }}>
                <input type={type} className="form-control" id={htmlFor} placeholder={label} required aria-required />
            </label>
        </div>
}

export default FormField;