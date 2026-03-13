import { Helmet } from "react-helmet";
import Address from "../../Address";
import AccordionItem from "./AccordionItem";
import "./mentions-legales.css";

function MentionsLegales() {
    return <section className="p-3">
        <Helmet>
            <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <div className="mentions-legales__header d-flex flex-column align-items-center justify-content-center text-center">
            <h1 className="nunito-sans--bold fw-bold">Mentions légales</h1>
        </div>
        <div className="container p-3">
            <div className="accordion" id="accordionExample">
                <AccordionItem id={"editeurDuSite"} title={"Editeur du site"}>
                    <Address />
                </AccordionItem>
                <AccordionItem id={"hebergeur"} title={"Hébergeur"}>
                    <h4 className="nunito-sans--bold fw-bold">alwaysdata</h4>
                    <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                    <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe me-1" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                        </svg>
                        <a href="https://www.alwaysdata.com" title="Lien vers site alwaysdata" className="text-decoration-underline" aria-label="Lien vers site alwaysdata">www.alwaysdata.com</a>
                    </div>
                </AccordionItem>
                <AccordionItem id={"credits"} title={"Crédits"}>
                    <h4 className="nunito-sans--bold fw-bold">Crédits</h4>
                    <p>Ceci site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" title="Lien vers le Centre Européen de formation" className="text-decoration-underline" aria-label="Lien vers le Centre Européen de formation">Centre Européen de formation</a>.</p>
                    <p className="fst-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/" title="Lien vers Pixabay" className="text-decoration-underline" aria-label="Lien vers Pixabay">Pixabay</a>.</p>
                    <p className="fst-italic">La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" title="Lien vers la favicon - Flaticon" className="text-decoration-underline" aria-label="Lien vers la favicon - Flaticon">John doe Icons erstellt von Freepik - Flaticon</a></p>
                </AccordionItem>
            </div>
        </div>
    </section>;
}

export default MentionsLegales;