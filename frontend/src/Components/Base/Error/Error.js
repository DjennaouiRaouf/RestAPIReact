import React from "react";
import "./Error.css";
function Error(){

   return(
            <div style={{
                "-webkit-user-select": "none",
                "-moz-user-select": "none",
                "-ms-user-select": "none",
                "user-select": "none",
            }}>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                      rel="stylesheet"/>
                    <div className="page-404">
                        <div className="outer">
                            <div className="middle">
                                <div className="inner">

                                    <div className="inner-circle"><i className="fa fa-home"></i><span>404</span></div>
                                    <span className="inner-status">Oops! Vous etes perdu</span>
                                    <span className="inner-detail" >
                    Page introuvable
                    <a style={{"marginLeft":"10px"}} href="/frontend/public" className="btn btn-info mtl"><i className="fa fa-home" ></i>&nbsp;
                        Retour
                    </a>
                </span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
   )

}


export default Error;
