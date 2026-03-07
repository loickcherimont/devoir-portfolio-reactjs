import { useEffect, useState } from 'react';
import imgBanner from '../../../assets/img/banner.jpg';
import ServiceCard from './ServiceCard';
import "./services.css";

function Services() {
    const [serviceCardInfos, setServiceCardInfos] = useState([]);
    useEffect(() => {

        const fetchServiceCardInfos = async (url) => {

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des informations du services.");
                }
                const data = await response.json();
                setServiceCardInfos(data);
            } catch (error) {
                console.log(error);
            }
        }

        let ignore = false;

        fetchServiceCardInfos('./api.services.json');

        return () => {
            ignore = true;
        }
    }, []);
    return <>
        <img src={imgBanner} className="img-fluid" alt="Bannière" />
        <section className="d-flex flex-column align-items-center">
            <header className="d-flex flex-column align-items-center justify-content-center text-center">
                <h1 className="nunito-sans--bold">Mon offre de services</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
            </header>
            <hr class="border border-primary border-3 opacity-75" style={{ width: "25rem"}}/>
            <div className="row gap-3 justify-content-center p-3">
                {serviceCardInfos.length !== 0 ? serviceCardInfos.map((serviceCardInfo, idx) => <ServiceCard key={idx} serviceCardInfo={serviceCardInfo} />) : null}
            </div>
        </section>
    </>
}

export default Services;