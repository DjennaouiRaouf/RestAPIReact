import React, {useEffect, useState} from "react";
import "./Information.css"
import axios from "axios";
import config from "../../../config.json";
function Information () {
    const [info,setInfo]=useState({});


  useEffect(() => {

    axios.get(`${config.apiUrl}/profileinfo/`)
      .then((response) => {
        setInfo(response.data);

      })
      .catch((error) => {
        console.log(error);

      });
  });
 if(Object.keys(info).length!==0) {

     return (
         <div className="container">

             <section>
                 <h1>Mes Informations</h1>
                 <div className="container">
                     <div className="container ">
                         <div className="panel-body inf-content">
                             <div className="row">
                                 <div className="col-md-4 float-on-hover"><img
                                     className="img-circle img-thumbnail isTooltip" alt=""
                                     style={{"width": "600px"}}
                                     src={`${config.mediaUrl}`+info.photo_de_profil}/>
                                 </div>
                                 <div className="col-md-6 float-on-hover">
                                     <div className="table-responsive">
                                         <table className="table table-user-information">
                                             <tbody>

                                             {Object.keys(info).map(key => {
                                                  if(key !== "photo_de_profil"){

                                                        return(
                                                         <tr key={key}>
                                                             <td style={{"fontSize": "13px"}}><strong><span
                                                                 className="glyphicon glyphicon-asterisk text-primary"></span>
                                                                 {key.replaceAll("_", " ")}
                                                             </strong></td>
                                                             <td className="text-primary" style={{"fontSize": "13px"}}>
                                                                 {info[key]}
                                                             </td>
                                                         </tr>

                                                     );

                                                  }
                                                  else{
                                                      return null;
                                                  }
                                             })}

                                             </tbody>
                                         </table>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
         </div>
     );
 }
}

export default Information;
