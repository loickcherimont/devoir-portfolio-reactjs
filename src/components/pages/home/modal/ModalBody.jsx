import { useEffect, useState } from "react";
import ModalList from "./ModalList";

function ModalBody() {
    const [profile, setProfile] = useState({
        id: 0,
        avatarUrl: "",
        name: "",
        htmlUrl: "",
        bio: "",
        publicRepositories: 0,
        followers: 0,
        following: 0,
    });

    useEffect(() => {

        const fetchInfos = async (url) => {

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des informations du profil Github");
                }
                const data = await response.json();

                setProfile({
                    id: data.id,
                    avatarUrl: data.avatar_url,
                    name: data.name,
                    htmlUrl: data.html_url,
                    bio: data.bio,
                    publicRepositories: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                })
            } catch (error) {
                console.log(error);
            }
        }

        let ignore = false;

        fetchInfos("https://api.github.com/users/github-john-doe");

        return () => {
            ignore = true;
        }
    }, []);
    return <div className="modal-body">
        <div className="container-fluid">
            <div className="row">
                {/* Portrait */}
                <div className="col-md justify-content-center">
                    <img src={profile.avatarUrl || null} alt="Avatar Github de John Doe" className="img-fluid" />
                </div>
                {/* Writing infos */}
                <ModalList profile={profile} />
            </div>
        </div>
    </div>
}

export default ModalBody;