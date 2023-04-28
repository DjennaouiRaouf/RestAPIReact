import React, {useEffect, useState} from "react";
import "./Card3.css";
import axios from "axios";
import config from "../../../../config.json";
import parse from "html-react-parser";

function Card3 () {
    const [prof, setProf] = useState({})

    useEffect(() => {

        axios.get(`${config.apiUrl}/profile/`)
            .then((response) => {
                setProf(response.data);

            })
            .catch((error) => {
                console.log(error);

            });
    });
    if(Object.keys(prof).length!==0)
    {
        return (
        <section>
            <h1 id="prof">Profil</h1>
            <section className="py-4 py-xl-5">
                <div className="container">
                    <div className=" border rounded border-0 border-dark overflow-hidden"
                         style={{"background": "transparent"}}>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="text-dark p-4 p-md-5">
                                    <h2 className="fw-bold text-dark mb-3">{prof.nom + ' ' + prof.prenom}</h2>
                                    <div className="mb-4"><p>{prof.text}</p></div>
                                    <div className="my-3"><a className="btn btn-primary btn-lg me-2" role="button"
                                                             href={`${config.mediaUrl}` + prof.cv}><i
                                        className="fas fa-download"></i></a><a
                                        className="btn btn-light btn-lg" role="button"
                                        href="https://www.overleaf.com/" target="_blank" rel="noopener noreferrer"><i
                                        className="far fa-edit"></i></a></div>
                                </div>
                            </div>
                            <div className="col-md-6 order-first order-md-last center" style={{"minHeight": "200px"}}>
                                <img alt=""
                                     className="center"
                                     src={`${config.mediaUrl}` + prof.photo_de_profil}/></div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
    }
}

export default Card3;
