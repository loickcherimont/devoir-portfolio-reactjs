import './home.css';
import Skill from '../../Skill';
import Modal from '../../Modal';

function Home() {

    return <>
        {/* Hero */}
        <section className="hero text-white d-flex flex-column align-items-center justify-content-center">
            <h1 className="nunito-sans--bold">Bonjour, je suis John Doe</h1>
            <h2 className="nunito-sans--bold">Développeur web full stack</h2>
            <Modal />
        </section>
        <section className="">
            <div className="container p-3">
                <div className="row shadow rounded">
                    <div className="col-md d-flex flex-column gap-3">
                        <h3 className="nunito-sans--bold">A propos</h3>
                        <img src={`./img/john-doe-about.jpg`} alt="Portrait de John Doe" className="img-fluid" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur iure consectetur quibusdam accusamus repellat numquam suscipit repellendus ducimus illo quaerat eius deserunt necessitatibus, odit amet harum asperiores beatae maiores. Repellat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur iure consectetur quibusdam accusamus repellat numquam suscipit repellendus ducimus illo quaerat eius deserunt necessitatibus, odit amet harum asperiores beatae maiores. Repellat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur iure consectetur quibusdam accusamus repellat numquam suscipit repellendus ducimus illo quaerat eius deserunt necessitatibus, odit amet harum asperiores beatae maiores. Repellat.</p>
                    </div>
                    <div className="col-md">
                        <h3 className="nunito-sans--bold">Mes compétences</h3>
                        <Skill color={"danger"} progressValue={90}>HTML5</Skill>
                        <Skill color={"info"} progressValue={80}>CSS3</Skill>
                        <Skill color={"warning"} progressValue={70}>JAVASCRIPT</Skill>
                        <Skill color={"success"} progressValue={60}>PHP</Skill>
                        <Skill progressValue={50}>REACT</Skill>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Home;