import React, {useEffect, useState} from "react";
import "./Card2.css"
import axios from "axios";
import config from "../../../../config.json";
function Card2 () {
  const [projet,setProjet]= useState([]);

  useEffect(() => {

    axios.get(`${config.apiUrl}/projet/`)
      .then((response) => {
        setProjet(response.data);

      })
      .catch((error) => {
        console.log(error);

      });
  });


  if(projet.length!=0){
  return(
       <section style={{"backgroundColor":"transparent"}}>
                <h1 id="proj">Projets</h1>
            <div  className="container-fluid" style={{"backgroundColor":"transparent"}} >
                <div className="row" style={{"backgroundColor":"transparent"}}>
                    <div className="col-lg-12" style={{"backgroundColor":"transparent"}}>
                        <div className="card" style={{"backgroundColor":"transparent"}}>
                            <div className="card-body">
                                <h4 className="card-title mb-5"> </h4>

                                <div className="hori-timeline" dir="ltr">
                                    <ul className="list-inline events">
                                        {projet.map((element,key) =>
                                        <li className="list-inline-item event-list animate fadeInDown two " key={key}>
                                            <div className="px-4 ">
                                                <div className="event-date bg-soft-primary text-primary">{element.annee}</div>
                                                <h5 className="font-size-16 hiding">{element.titre}</h5>
                                                <p className="text-muted">{element.text}</p>

                                            </div>
                                        </li>
                                        )}


                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </section>
  )
    }
}

export default Card2;
