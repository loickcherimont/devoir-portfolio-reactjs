import Address from "../../Address";
import AddressListItem from "./AddressListItem";
import "./contact.css";
import FormField from "./FormField";

function Contact() {
    return <>
        <section className="contact p-3">
            <div className="contact__header d-flex flex-column align-items-center justify-content-center text-center">
                <h1 className="nunito-sans--bold">Contact</h1>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            </div>
            <div className="container p-3">
                <div className="row shadow rounded p-3">

                    {/* Contact form */}
                    <div className="col-md d-flex flex-column gap-3">
                        <h3 className="nunito-sans--bold">Formulaire de contact</h3>
                        <form className="d-flex flex-column">
                            <FormField type={"text"} label={"Votre nom"} htmlFor={"fullName"} />
                            <FormField type={"email"} label={"Votre adresse mail"} htmlFor={"email"} />
                            <FormField type={"tel"} label={"Votre numéro de téléphone"} htmlFor={"phone"} />
                            <FormField type={"text"} label={"Sujet"} htmlFor={"subject"} />
                            <FormField type={"textarea"} label={"Votre message"} htmlFor={"message"} />
                            <div className="mb-3 d-flex justify-content-center flex-shrink-1">
                                <button type="submit" className="btn btn-primary">Envoyer</button>
                            </div>
                        </form>
                    </div>
                    {/* Admin infos */}
                    <div className="col-md">
                        <h3 className="nunito-sans--bold">Mes coordonnées</h3>
                        <Address>
                            <iframe title="Adresse de John Doe - Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7646.505015285557!2d4.791485771140021!3d45.77790483494154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sen!2sfr!4v1773218168954!5m2!1sen!2sfr" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="contact__iframe"></iframe>
                        </Address>

                    </div>
                </div>
            </div>
        </section></>;
}

export default Contact;