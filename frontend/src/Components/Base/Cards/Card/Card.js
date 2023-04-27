import React, {useEffect, useState} from "react";
import axios from "axios";
import config from "../../../../config.json";
import parse from "html-react-parser";
import "./Card.css"

function Card () {
   const [competences, setCompetences] = useState([]);
   const [types, setTypes] = useState([]);

    useEffect(() => {

    axios.get(`${config.apiUrl}/type/`)
      .then((response) => {
        setTypes(response.data);

      })
      .catch((error) => {
        console.log(error);

      });

    axios.get(`${config.apiUrl}/competence/`)
      .then((response) => {
        setCompetences(response.data);

      })
      .catch((error) => {
        console.log(error);

      });


  });

   return(
        <div id="Card">
              {types.map((t,tkey) =>
              <div className="container" key={tkey}>
                  <section>
                          <div className="container">
                              <h1 id={t.type} >{t.type}</h1>
                              <div className="row">
                                  {competences.map((c,ckey) =>

                                        c.type === t.type &&
                                           <div className="col-md-4 float-on-hover animate fadeInDown two" key={ckey}>
                                          <div className="blog-card blog-card-blog">
                                              <div className="blog-card-image"><div><img alt="" className="img-fluid img"
                                                                                                                    src={`${config.mediaUrl}`+c.image}/></div>
                                                  <div className="ripple-cont"></div>
                                              </div>
                                              <div className="blog-table">
                                                  <h6 className="blog-category blog-text-success"><i
                                                      className="far fa-newspaper"></i>&nbsp;{c.title}</h6>
                                                  <h4 className="blog-card-caption"
                                                      style={{
                                                          "margin": "-31px 0px 8px",
                                                          "marginBottom": "-6px",
                                                          "marginTop": "-26px",
                                                          "height":"40.7px"
                                                      }}><a
                                                      href="/src/Components/Pages"><br/><br/><br/></a></h4>
                                                  <p className="blog-card-description">{parse(c.text)}</p>
                                              </div>
                                          </div>

                                      </div>


                                      )}

                              </div>
                          </div>

                  </section>

              </div>
              )}
          </div>

   )
}

export default Card;
