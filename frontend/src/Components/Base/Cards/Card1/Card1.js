import React, {useEffect, useState} from "react";
import axios from "axios";
import config from "../../../../config.json";
import "./Card1.css"
function Card1 () {
  const [lang,setLang]=useState([]);

  useEffect(() => {

    axios.get(`${config.apiUrl}/langue/`)
      .then((response) => {
        setLang(response.data);

      })
      .catch((error) => {
        console.log(error);

      });
  });


  if(lang.length!==0) {
      return (
          <section>
              <h1 id="lng">Langues</h1>
              <div className="container">
                  <div className="row">
                      {lang.map((element, key) =>
                          <div className="col-12 col-sm-6 col-lg-3 float-on-hover" key={key}>
                              <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s"
                                   style={{
                                       "visibility": "visible",
                                       "animationDelay": "0.4s",
                                       "animationName": "fadeInUp"
                                   }}>

                                  <div className="advisor_thumb"><img src={`${config.mediaUrl}` + element.image}
                                                                      alt="" style={{"width": "200px"}}/>


                                  </div>

                                  <div className="single_advisor_details_info">
                                      <h6>{element.langue}</h6>
                                      {
                                          element.score !== null &&
                                          <div>
                                              <hr/>
                                              <h6>{"Niveau: " + element.score}</h6>
                                          </div>


                                      }


                                  </div>
                              </div>
                          </div>
                      )}
                  </div>

              </div>
          </section>

      )
  }
}

export default Card1;
