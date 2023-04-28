import React, {useEffect, useState} from "react";
import axios from "axios";
import config from "../../../config.json";

function Foot () {
    const [flag,setFlag]=useState({})

      useEffect(() => {

        axios.get(`${config.apiUrl}/avatar/`)
          .then((response) => {
             setFlag(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });

  if(Object.keys(flag).length !== 0) {
      var today = new Date();
      var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      return (
          <footer className="text-center" style={{"background": "rgb(236,241,244)"}}>

              <div className="container text-muted py-4 py-lg-5" style={{"background": "rgb(236,241,244)"}}>
                  <ul className="list-inline">
                      <li className="list-inline-item me-4 float-on-hover"><label className="link-secondary">design
                          Web</label></li>
                      <li className="list-inline-item me-4 float-on-hover"><label className="link-secondary">Data
                          Warehouse</label></li>

                      <li className="list-inline-item me-4 float-on-hover"><label className="link-secondary">base de
                          données</label></li>
                      <li className="list-inline-item me-4 float-on-hover"><label className="link-secondary">application
                          mobile</label>

                      </li>
                  </ul>

                  <p className="mb-0 float-on-hover">{date}</p>
              </div>
          </footer>
      );
  }
}

export default Foot;
