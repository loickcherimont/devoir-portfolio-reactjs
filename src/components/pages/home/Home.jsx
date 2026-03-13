import './home.css';
import Skill from './Skill';
import Modal from './modal/Modal';

function Home() {

    const skills = [
        {
            color: "danger",
            progressValue: 90,
            tech: "HTML5",
        },
        {
            color: "info",
            progressValue: 80,
            tech: "CSS3",

        },
        {
            color: "warning",
            progressValue: 70,
            tech: "JAVASCRIPT",

        },
        {
            color: "success",
            progressValue: 60,
            tech: "PHP",

        },
        {
            color: "",
            progressValue: 50,
            tech: "REACT",
        }
    ];

    return <div className="homepage">
        {/* Hero */}
        <section className="homepage__hero text-white d-flex flex-column align-items-center justify-content-center">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <Modal />
        </section>
        {/* About and skills */}
        <section className="p-3">
            <div className="container">
                <div className="row shadow rounded">
                    <div className="col-md d-flex flex-column gap-3 p-5">
                        <h3 className="homepage__heading-3">A propos</h3>
                        <img src={`./img/john-doe-about.jpg`} alt="Portrait de John Doe" className="img-fluid" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur iure consectetur quibusdam accusamus repellat numquam suscipit repellendus ducimus illo quaerat eius deserunt necessitatibus, odit amet harum asperiores beatae maiores. Repellat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur iure consectetur quibusdam accusamus repellat numquam suscipit repellendus ducimus illo quaerat eius deserunt necessitatibus, odit amet harum asperiores beatae maiores. Repellat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur iure consectetur quibusdam accusamus repellat numquam suscipit repellendus ducimus illo quaerat eius deserunt necessitatibus, odit amet harum asperiores beatae maiores. Repellat.</p>
                    </div>
                    <div className="col-md p-5">
                        <h3 className="homepage__heading-3">Mes compétences</h3>
                        <div className="d-flex flex-column gap-3">
                            {skills.map((skill, idx) => <Skill key={idx} color={skill.color} progressValue={skill.progressValue}>{skill.tech}</Skill>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Home;