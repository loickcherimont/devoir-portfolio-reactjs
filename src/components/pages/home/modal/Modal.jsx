import ModalBody from "./ModalBody";

function Modal() {
    return <>
        {/* Button to show modal */}
        <button type="button" className="btn btn-danger position-relative" data-bs-toggle="modal" data-bs-target="#modalForGithubProfileInfos">En savoir plus</button>

        {/* Content */}
        <div className="modal fade" id="modalForGithubProfileInfos" tabIndex="-1" aria-labelledby="modalForGithubProfileInfos" aria-hidden="true" data-bs-theme="dark">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title fs-5" id="modalForGithubProfileInfos">Mon profil Github</h2>
                        <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fermer la modale" />
                    </div>
                    <ModalBody />
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Modal;